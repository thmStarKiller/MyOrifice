# My Origines (DIVABOX) Scandal Report 💩

A mobile-first Next.js web application presenting a comprehensive French report about the My Origines (DIVABOX) scandal.

## Features

- 📱 **Mobile-First Design**: Optimized for mobile devices with responsive layouts
- 🎨 **Modern UI**: Built with Next.js 15, TypeScript, and Tailwind CSS
- 🧩 **shadcn/ui Components**: Beautiful, accessible UI components
- 🇫🇷 **French Content**: Authentic French report with proper typography
- 🌙 **Dark Mode Support**: Toggle between light and dark themes
- ⚡ **Performance**: Static generation for fast loading

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Deployment**: Vercel-ready

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

Open [http://localhost:3000](http://localhost:3000) with your browser to see the scandal report.

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles with Tailwind CSS
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main page importing the report
├── components/
│   ├── ui/                  # shadcn/ui components
│   │   ├── badge.tsx
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── separator.tsx
│   └── MyOriginesReport.tsx # Main report component
└── lib/
    └── utils.ts             # Utility functions
```

## Report Sections

The report covers:
- 🏢 **Company Overview**: My Origines background and structure
- 🚨 **Service Client Issues**: Customer service problems
- 🔍 **Authenticity Concerns**: Product authenticity questions
- ⭐ **Review Manipulation**: Suspicious review patterns
- 👥 **Employee Feedback**: Internal company insights
- 📊 **Final Verdict**: Comprehensive analysis

## Development

### Building for Production

```bash
npm run build
```

### Running Tests

```bash
npm run lint
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
