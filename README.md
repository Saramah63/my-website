This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
# my-website

## Email Forwarding + Contact Form

### A) Forwarding (Domain Email Routing)
Goal: `contact@saramahmodi.com` must deliver to `saramah63@gmail.com`.

Recommended: **Cloudflare Email Routing**
1. Add your domain to Cloudflare (Free plan).
2. Update GoDaddy nameservers to the Cloudflare nameservers.
3. In Cloudflare Dashboard: Email → Email Routing → Enable.
4. Verify destination address: `saramah63@gmail.com`.
5. Create routing rule: `contact` → `saramah63@gmail.com`.

GoDaddy Forwarding (if available):
- Use GoDaddy Email Forwarding (domain email routing) to forward `contact@saramahmodi.com` → `saramah63@gmail.com`.
- Note: GoDaddy “Email Privacy” is not domain email routing. You need actual forwarding for the domain inbox.

Testing:
- Send a test email to `contact@saramahmodi.com`.
- Check Gmail inbox and spam folder.
- If it lands in spam, mark “Not spam” once to improve deliverability.

### B) SMTP Notifications (Apply Form)
The Apply form stores submissions in `/data/submissions.json` (dev) and sends a notification email to `saramah63@gmail.com` using Gmail SMTP + Nodemailer.

Required env vars:
```
EMAIL_USER=saramah63@gmail.com
EMAIL_PASS=GMAIL_APP_PASSWORD
NOTIFICATION_EMAIL=saramah63@gmail.com
SITE_NAME=SaraMahmodi.com
APP_ENV=production
NEXT_PUBLIC_STRATEGIC_SESSION_PRICE=
NEXT_PUBLIC_SESSION_DURATION=
NEXT_PUBLIC_APPLICATION_REVIEW_DAYS=
NEXT_PUBLIC_SCHEDULING_URL=
NEXT_PUBLIC_CONTACT_EMAIL=contact@saramahmodi.com
NEXT_PUBLIC_LINKEDIN_URL=
NEXT_PUBLIC_INSTAGRAM_URL=
NEXT_PUBLIC_WHATSAPP_NUMBER=358417539326
```

Gmail App Password:
1. Enable 2‑Step Verification on the Gmail account.
2. Google Account → Security → App passwords.
3. Create an App Password for “Mail”.
4. Use that as `EMAIL_PASS` (never your real password).

### C) Rate Limiting + Honeypot
The API route includes:
- Honeypot hidden field (`companyWebsite`)
- In‑memory rate limiting (5 requests per 10 minutes per IP)
