import nodemailer from 'nodemailer';
import { adminTemplate, userTemplate, type AdminEmailData, type UserEmailData } from './templates';

function ensureEnv(name: string): string {
  const val = process.env[name];
  if (!val) throw new Error(`Missing required env: ${name}`);
  return val;
}

const EMAIL_SERVER_HOST = ensureEnv('EMAIL_SERVER_HOST');
const EMAIL_SERVER_PORT = Number(ensureEnv('EMAIL_SERVER_PORT'));
const EMAIL_SERVER_USER = ensureEnv('EMAIL_SERVER_USER');
const EMAIL_SERVER_PASSWORD = ensureEnv('EMAIL_SERVER_PASSWORD');
const EMAIL_FROM = ensureEnv('EMAIL_FROM');

const transporter = nodemailer.createTransport({
  host: EMAIL_SERVER_HOST,
  port: EMAIL_SERVER_PORT,
  secure: EMAIL_SERVER_PORT === 465, // 465 = SSL, 587 = STARTTLS
  auth: {
    user: EMAIL_SERVER_USER,
    pass: EMAIL_SERVER_PASSWORD,
  },
});

export async function sendAdminEmail(data: AdminEmailData) {
  const subject = `New Contact Submission${data.subject ? ': ' + data.subject : ''}`;
  const html = adminTemplate(data);
  await transporter.sendMail({
    from: EMAIL_FROM,
    to: EMAIL_FROM,
    subject,
    html,
  });
}

export async function sendUserEmail(data: UserEmailData) {
  const subject = 'Thanks for reaching out — I received your message';
  const html = userTemplate(data);
  await transporter.sendMail({
    from: EMAIL_FROM,
    to: data.email,
    subject,
    html,
  });
}