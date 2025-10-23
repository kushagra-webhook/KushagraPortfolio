import type { VercelRequest, VercelResponse } from '@vercel/node';
import formidable from 'formidable';
import fs from 'fs';
import { createClient } from '@supabase/supabase-js';
import { sendAdminEmail, sendUserEmail } from '../_lib/email';
import { randomUUID } from 'crypto';

export const config = {
  api: {
    bodyParser: false,
  },
};

function parseForm(req: VercelRequest): Promise<{ fields: any; files: any }> {
  const form = formidable({ multiples: true });
  return new Promise((resolve, reject) => {
    form.parse(req as any, (err, fields, files) => {
      if (err) reject(err);
      else resolve({ fields, files });
    });
  });
}

function ensureEnv(name: string): string {
  const val = process.env[name];
  if (!val) throw new Error(`Missing required env: ${name}`);
  return val;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const origin = req.headers.origin || '*';
  res.setHeader('Access-Control-Allow-Origin', origin);
  res.setHeader('Vary', 'Origin');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  try {
    const SUPABASE_URL = ensureEnv('NEXT_PUBLIC_SUPABASE_URL');
    const SUPABASE_SERVICE_ROLE_KEY = ensureEnv('SUPABASE_SERVICE_ROLE_KEY');

    const { fields, files } = await parseForm(req);

    const name = String(fields.name || '').trim();
    const email = String(fields.email || '').trim();
    const subject = String(fields.subject || '').trim();
    const message = String(fields.message || '').trim();

    if (!name || !email || !message) {
      res.status(400).json({ error: 'Missing required fields' });
      return;
    }

    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

    const uploadedFiles: { filename: string; publicUrl: string }[] = [];

    // Handle optional files (could be single or array)
    const incomingFiles = (files as any).files;
    const fileList: any[] = Array.isArray(incomingFiles)
      ? incomingFiles
      : incomingFiles
      ? [incomingFiles]
      : [];

    for (const file of fileList) {
      const filepath: string = (file.filepath || file.path) as string;
      const originalFilename: string = (file.originalFilename || file.name || 'upload') as string;
      const contentType: string = (file.mimetype || 'application/octet-stream') as string;
      const buffer = fs.readFileSync(filepath);

      const objectName = `contact-uploads/${randomUUID()}-${originalFilename}`;

      const { error: uploadError } = await supabase.storage
        .from('contact-uploads')
        .upload(objectName, buffer, {
          contentType,
          upsert: false,
        });

      if (uploadError) {
        console.error('Upload error:', uploadError.message);
        throw new Error(`Failed to upload file: ${originalFilename}`);
      }

      const { data: signed, error: signError } = await supabase.storage
        .from('contact-uploads')
        .createSignedUrl(objectName, 60 * 60 * 24 * 30); // 30 days

      if (signError || !signed?.signedUrl) {
        console.error('Signed URL error:', signError?.message);
        throw new Error('Failed to generate access URL for uploaded file');
      }

      uploadedFiles.push({ filename: originalFilename, publicUrl: signed.signedUrl });
    }

    const { error: insertError } = await supabase
      .from('contact_submissions')
      .insert({
        name,
        email,
        subject: subject || null,
        message,
        file_urls: uploadedFiles.map((f) => ({ url: f.publicUrl, name: f.filename })),
      });

    if (insertError) {
      console.error('Insert error:', insertError.message);
      throw new Error('Failed to save submission');
    }

    await sendAdminEmail({
      name,
      email,
      subject,
      message,
      files: uploadedFiles,
    });

    await sendUserEmail({
      name,
      email,
      subject,
      message,
    });

    res.status(200).json({ success: true, files: uploadedFiles });
  } catch (err: any) {
    console.error('Contact handler error:', err);
    res.status(500).json({ error: err.message || 'Internal server error' });
  }
}