# Shiv Construction Website

A modern, professional construction company website built with Next.js and Tailwind CSS.

## Features

- 🏗️ Modern, responsive design
- 📱 Mobile-friendly navigation
- 🎨 Beautiful UI with Tailwind CSS
- ⚡ Fast performance with Next.js
- 📧 Contact form with email integration
- 🔔 Custom toast notifications
- 🎯 SEO optimized

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts  # Email API endpoint
│   ├── layout.tsx        # Root layout with Navbar and Footer
│   ├── page.tsx          # Homepage
│   └── globals.css       # Global styles
├── components/
│   ├── Navbar.tsx        # Navigation component
│   ├── Hero.tsx          # Hero section
│   ├── Services.tsx      # Services section
│   ├── About.tsx         # About section
│   ├── Projects.tsx      # Projects portfolio
│   ├── Contact.tsx       # Contact form
│   ├── Footer.tsx        # Footer component
│   └── ToastProvider.tsx # Toast notification provider
└── package.json
```

## Build for Production

```bash
npm run build
npm start
```

## Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **React** - UI library
- **react-hot-toast** - Toast notifications
- **Nodemailer** - Email sending

## Email Configuration

The contact form sends emails to `vapi@shivconstruction.info`. To enable email functionality:

1. Create a `.env.local` file in the root directory
2. Add your SMTP configuration:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
SMTP_FROM=Shiv Construction <your-email@gmail.com>
```

### Gmail Setup

For Gmail, you'll need to:

1. Enable 2-Step Verification on your Google account
2. Generate an App Password: https://support.google.com/accounts/answer/185833
3. Use the App Password as `SMTP_PASSWORD`

### Alternative Email Services

You can also use:

- **Resend** (recommended for production)
- **SendGrid**
- **Mailgun**
- **AWS SES**

Update the API route in `app/api/contact/route.ts` to use your preferred service.

## Customization

You can customize the website by:

- Updating contact information in `components/Contact.tsx`
- Modifying services in `components/Services.tsx`
- Adding your own projects in `components/Projects.tsx`
- Changing colors in `tailwind.config.ts`
