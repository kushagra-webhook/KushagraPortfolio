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
          <a href="${f.publicUrl}" style="background:linear-gradient(135deg, #4f46e5, #06b6d4);color:#fff;text-decoration:none;padding:12px 20px;border-radius:12px;display:inline-block;font-weight:500;box-shadow:0 4px 12px rgba(79, 70, 229, 0.3);transition:all 0.3s ease" target="_blank" rel="noopener noreferrer">
            View File ${i + 1}: ${escapeHtml(f.filename)}
          </a>
        </td>
      </tr>`
        )
        .join('')
    : '<tr><td style="padding:8px 0;color:#64748b">No attachments uploaded.</td></tr>';
  
    // {/* <p style="margin:8px 0 0 0;color:#64748b;font-size:14px">Aspiring AI/ML Engineer & Software Developer</p> */}
  return `
  <div style="font-family:Inter,'Segoe UI',Arial,sans-serif;background:linear-gradient(135deg, #fefefe 0%, #e0f2fe 30%, #e0f7fa 70%, #fefefe 100%);color:#1e293b;padding:32px;min-height:100vh">
    <div style="max-width:640px;margin:0 auto;background:#ffffff;border:1px solid #e2e8f0;border-radius:20px;overflow:hidden;box-shadow:0 10px 25px rgba(0,0,0,0.08)">
      <div style="background:linear-gradient(135deg, #4f46e5, #06b6d4);height:6px"></div>
      <div style="padding:32px">
        <div style="text-align:center;margin-bottom:24px">
          <h1 style="margin:0;font-size:28px;font-weight:700;background:linear-gradient(135deg, #4f46e5, #06b6d4);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text">Kushagra Singh</h1>
          
        </div>
        
        <h2 style="margin:0 0 16px 0;color:#1e293b;font-size:24px;font-weight:600">New Contact Submission</h2>
        <p style="margin:0 0 24px 0;color:#475569;line-height:1.6">You received a new message via the portfolio contact form.</p>
        
        <div style="background:linear-gradient(135deg, #f8fafc, #f1f5f9);border:1px solid #e2e8f0;border-radius:16px;padding:24px;margin-bottom:24px">
          <table style="width:100%">
            <tr>
              <td style="padding:12px 0;color:#4f46e5;font-weight:500;font-size:14px">Name</td>
              <td style="padding:12px 0;text-align:right;color:#1e293b;font-weight:500">${escapeHtml(name)}</td>
            </tr>
            <tr>
              <td style="padding:12px 0;color:#4f46e5;font-weight:500;font-size:14px">Email</td>
              <td style="padding:12px 0;text-align:right;color:#1e293b;font-weight:500">
                <a href="mailto:${escapeHtml(email)}" style="color:#06b6d4;text-decoration:none">${escapeHtml(email)}</a>
              </td>
            </tr>
          </table>
        </div>

        <div style="margin-bottom:20px">
          <div style="background:linear-gradient(135deg, #f0f9ff, #e0f7fa);border:1px solid #bae6fd;border-radius:12px;padding:16px">
            <div style="color:#0369a1;margin-bottom:8px;font-weight:600;font-size:14px">Subject</div>
            <div style="color:#1e293b;font-weight:500">${escapeHtml(subject || '—')}</div>
          </div>
        </div>

        <div style="margin-bottom:24px">
          <div style="background:linear-gradient(135deg, #f0f9ff, #e0f7fa);border:1px solid #bae6fd;border-radius:12px;padding:20px">
            <div style="color:#0369a1;margin-bottom:12px;font-weight:600;font-size:14px">Message</div>
            <div style="white-space:pre-wrap;color:#1e293b;line-height:1.6">${escapeHtml(message)}</div>
          </div>
        </div>

        <div style="margin-top:24px">
          <div style="color:#4f46e5;margin-bottom:12px;font-weight:600;font-size:16px">Attachments</div>
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
}) 
//  {/* <p style="margin:8px 0 0 0;color:#64748b;font-size:14px">Aspiring AI/ML Engineer & Software Developer</p> */}
{
  return `
  <div style="font-family:Inter,'Segoe UI',Arial,sans-serif;background:linear-gradient(135deg, #fefefe 0%, #e0f2fe 30%, #e0f7fa 70%, #fefefe 100%);color:#1e293b;padding:32px;min-height:100vh">
    <div style="max-width:640px;margin:0 auto;background:#ffffff;border:1px solid #e2e8f0;border-radius:20px;overflow:hidden;box-shadow:0 10px 25px rgba(0,0,0,0.08)">
      <div style="background:linear-gradient(135deg, #4f46e5, #06b6d4);height:6px"></div>
      <div style="padding:32px">
        <div style="text-align:center;margin-bottom:24px">
          <h1 style="margin:0;font-size:28px;font-weight:700;background:linear-gradient(135deg, #4f46e5, #06b6d4);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text">Kushagra Singh</h1>
         
        </div>
        
        <h2 style="margin:0 0 16px 0;color:#1e293b;font-size:24px;font-weight:600">Thanks for reaching out!</h2>
        <p style="margin:0 0 8px 0;color:#475569;line-height:1.6">Hi ${escapeHtml(name)}, I've received your message and will get back to you soon.</p>
        <p style="margin:0 0 24px 0;color:#64748b;font-size:14px;font-style:italic">This is an automated email confirmation.</p>

        <div style="margin-bottom:20px">
          <div style="background:linear-gradient(135deg, #f0f9ff, #e0f7fa);border:1px solid #bae6fd;border-radius:12px;padding:16px">
            <div style="color:#0369a1;margin-bottom:8px;font-weight:600;font-size:14px">Your Subject</div>
            <div style="color:#1e293b;font-weight:500">${escapeHtml(subject || '—')}</div>
          </div>
        </div>

        <div style="margin-bottom:24px">
          <div style="background:linear-gradient(135deg, #f0f9ff, #e0f7fa);border:1px solid #bae6fd;border-radius:12px;padding:20px">
            <div style="color:#0369a1;margin-bottom:12px;font-weight:600;font-size:14px">Your Message</div>
            <div style="white-space:pre-wrap;color:#1e293b;line-height:1.6">${escapeHtml(message)}</div>
          </div>
        </div>

        <div style="background:linear-gradient(135deg, #f8fafc, #f1f5f9);border:1px solid #e2e8f0;border-radius:16px;padding:20px;margin-bottom:32px">
          <p style="margin:0 0 12px 0;color:#475569;line-height:1.6">You can reply directly to this email if you have any additional details or questions.</p>
          <p style="margin:0;color:#64748b;font-size:14px">I will get back to you as soon as I can. Thank you for your patience.</p>
        </div>

        <div style="border-top:2px solid #e2e8f0;padding-top:24px;margin-top:32px">
          <div style="color:#64748b;font-size:14px;line-height:1.6">
            <p style="margin:0 0 10px 0;color:#1e293b;font-weight:600">Warm regards,</p>
            <p style="margin:0 0 8px 0;color:#1e293b;font-weight:600;font-size:16px">Kushagra Singh</p>
            <p style="margin:0 0 4px 0">Final Year, B.Tech Computer Science Engineering (Grad-2026)</p>
            <p style="margin:0 0 12px 0">MIT-WPU, Pune, India</p>
            <p style="margin:0 0 4px 0">Email: <a href="mailto:kushagraa.n@gmail.com" style="color:#06b6d4;text-decoration:none">kushagraa.n@gmail.com</a> | Phone: <a href="tel:+919699688519" style="color:#06b6d4;text-decoration:none">+91 9699688519</a></p>
            <p style="margin:0">
              <a href="https://www.linkedin.com/in/kushagra-anit-singh/" style="color:#06b6d4;text-decoration:none;margin-right:12px" target="_blank" rel="noopener noreferrer">LinkedIn</a> | 
              <a href="https://github.com/kushagra-a-singh" style="color:#06b6d4;text-decoration:none;margin:0 12px" target="_blank" rel="noopener noreferrer">GitHub</a> | 
              <a href="https://kushagra-singh.vercel.app/" style="color:#06b6d4;text-decoration:none;margin-left:12px" target="_blank" rel="noopener noreferrer">Portfolio</a>
            </p>
          </div>
        </div>
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