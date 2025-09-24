# ADA Australia Website

A modern, mobile-optimized website for ADA Australia built with Next.js, Tailwind CSS, and shadcn/ui components.

## Features

- **Modern Design**: Clean, professional design with Tailwind CSS
- **Mobile-First**: Fully optimized for mobile phones and tablets
- **Responsive Navigation**: Collapsible mobile menu with smooth animations
- **Touch-Friendly**: Optimized tap targets and mobile interactions
- **Performance**: Fast loading and optimized for mobile networks
- **Accessibility**: Built with accessibility best practices
- **SEO Optimized**: Proper mobile viewport and meta tags

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

## Mobile Optimizations

This website is specifically optimized for mobile devices with:

- **Responsive Header**: Collapsible navigation menu with hamburger icon
- **Mobile-First Layout**: Hero section and content optimized for small screens
- **Touch-Friendly Interface**: 44px minimum tap targets for better usability
- **Optimized Typography**: Better font scaling and line heights for mobile
- **Safe Area Support**: Proper spacing for devices with notches
- **Smooth Animations**: Mobile-friendly transitions and interactions
- **No Horizontal Scroll**: Prevents unwanted scrolling on mobile devices

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is private and proprietary to ADA Australia.
