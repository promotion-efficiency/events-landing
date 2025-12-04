# Events Landing Page

A modern, responsive landing page for event management and exhibition services built with Next.js, React, and Tailwind CSS.

## Features

- 🌐 Multi-language support (English/Arabic)
- 📱 Fully responsive design
- ⚡ Optimized performance with Next.js static export
- 🎨 Modern UI with custom typography
- 🎬 Smooth animations and transitions

## Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/events-landing.git
cd events-landing
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) (or the port specified) in your browser.

## Building for Production

To create a production build:

```bash
npm run build
```

The static files will be exported to the `out` directory.

## Deployment to GitHub Pages

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Setup Instructions

1. **Enable GitHub Pages in your repository:**
   - Go to your repository on GitHub
   - Navigate to Settings → Pages
   - Under "Source", select "GitHub Actions"

2. **Push your code:**
   ```bash
   git add .
   git commit -m "Setup GitHub Pages deployment"
   git push origin main
   ```

3. **Automatic Deployment:**
   - The GitHub Action workflow (`.github/workflows/deploy.yml`) will automatically:
     - Build your Next.js app
     - Export static files
     - Deploy to GitHub Pages
   - You can monitor the deployment in the "Actions" tab of your repository

4. **Access your site:**
   - Your site will be available at: `https://your-username.github.io/events-landing/`
   - If you're using a custom domain, update the `metadataBase` in `src/app/layout.tsx`

### Manual Deployment

If you prefer to deploy manually:

```bash
npm run build
# The out directory contains your static files
# You can upload these to GitHub Pages or any static hosting service
```

## Project Structure

```
events-landing/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment workflow
├── public/                     # Static assets
├── src/
│   ├── app/                   # Next.js app directory
│   ├── components/            # React components
│   ├── context/               # React context providers
│   ├── hooks/                 # Custom React hooks
│   ├── locales/               # i18n translation files
│   └── providers/             # App providers
├── .nojekyll                  # Prevents Jekyll processing on GitHub Pages
├── next.config.ts             # Next.js configuration
└── package.json               # Dependencies and scripts
```

## Configuration

### Base Path (Optional)

If your repository name is different or you want to deploy to a subdirectory, update `next.config.ts`:

```typescript
const nextConfig: NextConfig = {
    basePath: '/your-repo-name', // Add this if needed
    output: 'export',
    // ... rest of config
};
```

### Custom Domain

To use a custom domain:
1. Update `metadataBase` in `src/app/layout.tsx`
2. Add a `CNAME` file in the `public` directory with your domain
3. Configure DNS settings as per GitHub Pages documentation

## Technologies Used

- **Next.js 15** - React framework
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Styling
- **Framer Motion** - Animations
- **GSAP** - Advanced animations
- **i18next** - Internationalization
- **Swiper** - Carousel/slider component

## License

This project is private and proprietary.

## Support

For issues or questions, please open an issue in the repository.
