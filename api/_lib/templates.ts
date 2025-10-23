type FileInfo = { filename: string; publicUrl: string };

export function adminTemplate({
  name,
  email,
  subject,
  message,
  files,
}: {
  name: string;
  email: string;
  subject?: string;
  message: string;
  files: FileInfo[];
}) {
  const fileButtons = files.length
    ? files
        .map(
          (f, i) => `
      <tr>
        <td style="padding:8px 0">
          <a href="${f.publicUrl}" style="background:#4f46e5;color:#fff;text-decoration:none;padding:10px 16px;border-radius:8px;display:inline-block" target="_blank" rel="noopener noreferrer">
            View File ${i + 1}: ${escapeHtml(f.filename)}
          </a>
        </td>
      </tr>`
        )
        .join('')
    : '<tr><td style="padding:8px 0;color:#64748b">No attachments uploaded.</td></tr>';

  return `
  <div style="font-family:Inter,Segoe UI,Arial,sans-serif;background:#0b1220;color:#e5e7eb;padding:24px">
    <div style="max-width:640px;margin:0 auto;background:#111827;border:1px solid #1f2937;border-radius:16px;overflow:hidden">
      <div style="background:linear-gradient(135deg,#3b82f6,#10b981);height:4px"></div>
      <div style="padding:24px">
        <h2 style="margin:0 0 16px 0;color:#fff">New Contact Submission</h2>
        <p style="margin:0 0 12px 0;color:#cbd5e1">You received a new message via the portfolio contact form.</p>
        <table style="width:100%;margin-top:16px">
          <tr>
            <td style="padding:8px 0;color:#93c5fd">Name</td>
            <td style="padding:8px 0;text-align:right;color:#e5e7eb">${escapeHtml(name)}</td>
          </tr>
          <tr>
            <td style="padding:8px 0;color:#93c5fd">Email</td>
            <td style="padding:8px 0;text-align:right;color:#e5e7eb">${escapeHtml(email)}</td>
          </tr>
          <tr>
            <td style="padding:8px 0;color:#93c5fd">Subject</td>
            <td style="padding:8px 0;text-align:right;color:#e5e7eb">${escapeHtml(subject || '—')}</td>
          </tr>
        </table>
        <div style="margin-top:16px;padding:16px;background:#0f172a;border:1px solid #1f2937;border-radius:12px">
          <div style="color:#93c5fd;margin-bottom:8px">Message</div>
          <div style="white-space:pre-wrap;color:#e5e7eb">${escapeHtml(message)}</div>
        </div>
        <div style="margin-top:24px">
          <div style="color:#93c5fd;margin-bottom:8px">Attachments</div>
          <table style="width:100%">${fileButtons}</table>
        </div>
      </div>
    </div>
  </div>`;
}

export function userTemplate({
  name,
  subject,
  message,
}: {
  name: string;
  subject?: string;
  message: string;
}) {
  return `
  <div style="font-family:Inter,Segoe UI,Arial,sans-serif;background:#0b1220;color:#e5e7eb;padding:24px">
    <div style="max-width:640px;margin:0 auto;background:#111827;border:1px solid #1f2937;border-radius:16px;overflow:hidden">
      <div style="background:linear-gradient(135deg,#3b82f6,#10b981);height:4px"></div>
      <div style="padding:24px">
        <h2 style="margin:0 0 12px 0;color:#fff">Thanks for reaching out!</h2>
        <p style="margin:0 0 12px 0;color:#cbd5e1">Hi ${escapeHtml(name)}, I’ve received your message and will get back to you soon.</p>
        <table style="width:100%;margin-top:16px">
          <tr>
            <td style="padding:8px 0;color:#93c5fd">Subject</td>
            <td style="padding:8px 0;text-align:right;color:#e5e7eb">${escapeHtml(subject || '—')}</td>
          </tr>
        </table>
        <div style="margin-top:16px;padding:16px;background:#0f172a;border:1px solid #1f2937;border-radius:12px">
          <div style="color:#93c5fd;margin-bottom:8px">Your message</div>
          <div style="white-space:pre-wrap;color:#e5e7eb">${escapeHtml(message)}</div>
        </div>
        <p style="margin-top:16px;color:#94a3b8">You can reply directly to this email if you have any additional details.</p>
      </div>
    </div>
  </div>`;
}

function escapeHtml(input: string) {
  return input
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

export type AdminEmailData = {
  name: string;
  email: string;
  subject?: string;
  message: string;
  files: FileInfo[];
};

export type UserEmailData = {
  name: string;
  email: string;
  subject?: string;
  message: string;
};