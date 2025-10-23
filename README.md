# Kushagra Singh - Portfolio

## Overview
A modern, responsive portfolio website showcasing my projects, skills and professional experience. Built with a focus on performance, accessibility and clean design.

## Features

- Responsive design that works on all devices
- Interactive AI assistant for visitor engagement
- Project showcase with detailed descriptions
- Skills and experience sections
- Contact form integration

## Technologies Used

- **Frontend**: React, TypeScript, Vite
- **Styling**: Tailwind CSS, shadcn/ui
- **Animation**: Framer Motion
- **Deployment**: Vercel

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/kushagra-webhook/KushagraPortfolio.git
   cd KushagraPortfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:8080/](http://localhost:8080/) to view it in your browser.

## Deployment

The site is automatically deployed to Vercel on pushes to the `main` branch.

## Contact Backend (Vercel Functions + Supabase + Nodemailer)

- API route: `api/contact/index.ts` handles submissions.
- Stores data in `contact_submissions` and uploads optional files to Supabase Storage bucket `contact-uploads`.
- Sends 2 emails via Gmail SMTP: admin receipt and user confirmation, with styled HTML templates and direct file view buttons in admin email.

### Environment Variables
Set these on Vercel (Project Settings → Environment Variables) and locally in `.env.local` (do not expose service keys to the browser):

- `NEXT_PUBLIC_SUPABASE_URL`: Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Supabase anon key (client-side only)
- `SUPABASE_SERVICE_ROLE_KEY`: Supabase service role key (server-only)
- `EMAIL_SERVER_HOST`: `smtp.gmail.com`
- `EMAIL_SERVER_PORT`: `587`
- `EMAIL_SERVER_USER`: your Gmail address
- `EMAIL_SERVER_PASSWORD`: Gmail App Password (16 chars), not your login password
- `EMAIL_FROM`: sender address (same as above or a verified alias)

Notes:
- Supabase storage public-read policy expects object names to start with `contact-uploads/`.
- Ensure Gmail App Password is created under Google Account → Security → App Passwords.

### Local Testing
- Dev server runs on Vite; API functions run on Vercel cloud. For local tests, `fetch('/api/contact')` will work on deployments; locally you can test by deploying a preview or running a local serverless emulator.

### Future: Chatbot Backend on Render
- Keep front-end calls decoupled via a base URL env, e.g. `RENDER_CHATBOT_URL` (to add later).
- When the Python backend is live on Render, the UI can call it directly without changes to the contact API.
