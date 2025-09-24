# ADA Australia Website

A modern, responsive website for ADA Australia built with Next.js, Tailwind CSS, and shadcn/ui components.

## Features

- **Modern Design**: Clean, professional design with Tailwind CSS
- **Responsive**: Mobile-first responsive design
- **Component Library**: Built with shadcn/ui components
- **Performance**: Optimized for speed and SEO
- **Accessibility**: Built with accessibility best practices

## Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui
- **Language**: TypeScript
- **Package Manager**: pnpm

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/huntrbrooks/ada-australia-website.git
cd ada-australia-website
```

2. Install dependencies:
```bash
pnpm install
```

3. Run the development server:
```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

This project is configured for easy deployment on Vercel:

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect it's a Next.js project
3. Deploy with zero configuration

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── articles/          # Articles page
│   ├── contact/           # Contact page
│   ├── publications/      # Publications page
│   ├── support/           # Support page
│   ├── training/          # Training page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   └── ...               # Custom components
├── public/               # Static assets
└── lib/                  # Utility functions
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is private and proprietary to ADA Australia.
