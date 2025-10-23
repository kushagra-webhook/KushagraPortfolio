import nodemailer from 'nodemailer';
import { adminTemplate, userTemplate, type AdminEmailData, type UserEmailData } from './templates.js';

function ensureEnv(name: string): string {
  const val = process.env[name];
  if (!val) throw new Error(`Missing required env: ${name}`);
  return val;
}

function getTransporter() {
  const EMAIL_SERVER_HOST = ensureEnv('EMAIL_SERVER_HOST');
  const EMAIL_SERVER_PORT = Number(ensureEnv('EMAIL_SERVER_PORT'));
  const EMAIL_SERVER_USER = ensureEnv('EMAIL_SERVER_USER');
  const EMAIL_SERVER_PASSWORD = ensureEnv('EMAIL_SERVER_PASSWORD');

  return nodemailer.createTransport({
    host: EMAIL_SERVER_HOST,
    port: EMAIL_SERVER_PORT,
    secure: EMAIL_SERVER_PORT === 465, // 465 = SSL, 587 = STARTTLS
    auth: {
      user: EMAIL_SERVER_USER,
      pass: EMAIL_SERVER_PASSWORD,
    },
  });
}

// Display name for outgoing emails
const FROM_NAME = 'Kushagra Singh';

export async function sendAdminEmail(data: AdminEmailData) {
  const EMAIL_FROM = ensureEnv('EMAIL_FROM');
  const subject = `New Contact Submission${data.subject ? ': ' + data.subject : ''}`;
  const html = adminTemplate(data);
  const transporter = getTransporter();
  await transporter.sendMail({
    from: { name: FROM_NAME, address: EMAIL_FROM },
    to: EMAIL_FROM,
    subject,
    html,
  });
}

export async function sendUserEmail(data: UserEmailData) {
  const EMAIL_FROM = ensureEnv('EMAIL_FROM');
  const subject = 'Thank you for reaching out. I have received your message.';
  const html = userTemplate(data);
  const transporter = getTransporter();
  await transporter.sendMail({
    from: { name: FROM_NAME, address: EMAIL_FROM },
    to: data.email,
    subject,
    html,
  });
}