# Shiv Construction Website

A modern, professional construction company website built with Next.js and Tailwind CSS.

## Features

- 🏗️ Modern, responsive design
- 📱 Mobile-friendly navigation
- 🎨 Beautiful UI with Tailwind CSS
- ⚡ Fast performance with Next.js
- 📧 Contact form
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
│   ├── layout.tsx      # Root layout with Navbar and Footer
│   ├── page.tsx        # Homepage
│   └── globals.css     # Global styles
├── components/
│   ├── Navbar.tsx      # Navigation component
│   ├── Hero.tsx        # Hero section
│   ├── Services.tsx    # Services section
│   ├── About.tsx       # About section
│   ├── Projects.tsx    # Projects portfolio
│   ├── Contact.tsx     # Contact form
│   └── Footer.tsx      # Footer component
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

## Customization

You can customize the website by:
- Updating contact information in `components/Contact.tsx`
- Modifying services in `components/Services.tsx`
- Adding your own projects in `components/Projects.tsx`
- Changing colors in `tailwind.config.ts`

