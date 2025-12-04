# GitHub Pages Deployment Guide

This guide will help you deploy this Next.js project to GitHub Pages.

## Prerequisites

- A GitHub account
- Git installed on your local machine
- Node.js 20.x or higher

## Step-by-Step Setup

### 1. Create a GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it (e.g., `events-landing`)
3. Make it public (required for free GitHub Pages) or use a private repo with GitHub Pro

### 2. Push Your Code

```bash
# Initialize git if not already done
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit"

# Add your GitHub repository as remote
git remote add origin https://github.com/your-username/events-landing.git

# Push to main branch
git push -u origin main
```

### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** tab
3. Scroll down to **Pages** section (in the left sidebar)
4. Under **Source**, select **GitHub Actions** (not "Deploy from a branch")
5. Save the settings

### 4. Trigger Deployment

The deployment will automatically trigger when you:
- Push to the `main` branch
- Or manually trigger it from the Actions tab

### 5. Monitor Deployment

1. Go to the **Actions** tab in your repository
2. You'll see the workflow running
3. Wait for it to complete (usually 2-5 minutes)
4. Once complete, your site will be live!

### 6. Access Your Site

Your site will be available at:
```
https://your-username.github.io/events-landing/
```

Replace `your-username` with your GitHub username and `events-landing` with your repository name.

## Custom Domain Setup (Optional)

If you want to use a custom domain:

1. Create a `CNAME` file in the `public` directory:
   ```
   yourdomain.com
   www.yourdomain.com
   ```

2. Update `src/app/layout.tsx`:
   ```typescript
   metadataBase: new URL('https://yourdomain.com'),
   ```

3. Configure DNS:
   - Add a CNAME record pointing to `your-username.github.io`
   - Or add A records for GitHub Pages IPs

4. In GitHub repository Settings → Pages, add your custom domain

## Troubleshooting

### Build Fails

- Check the Actions tab for error messages
- Ensure all dependencies are in `package.json`
- Verify Node.js version is 20.x or higher

### 404 Errors

- Ensure `.nojekyll` file exists in the root
- Check that `output: 'export'` is set in `next.config.ts`
- Verify the base path if using a subdirectory

### Assets Not Loading

- Check that image paths use `/` not relative paths
- Ensure `images.unoptimized: true` in `next.config.ts`
- Verify all assets are in the `public` directory

### Site Not Updating

- Clear browser cache
- Wait a few minutes for GitHub Pages to propagate changes
- Check if the workflow completed successfully

## Manual Deployment

If you prefer to deploy manually:

```bash
# Build the project
npm run build

# The static files are in the 'out' directory
# You can upload these to any static hosting service
```

## Updating Your Site

Simply push changes to the `main` branch:

```bash
git add .
git commit -m "Update content"
git push origin main
```

The GitHub Action will automatically rebuild and redeploy your site.

## Workflow Details

The deployment workflow (`.github/workflows/deploy.yml`) does the following:

1. **Checkout** - Gets your code
2. **Setup Node.js** - Installs Node.js 20
3. **Install dependencies** - Runs `npm ci`
4. **Build** - Runs `npm run build` to create static export
5. **Upload artifact** - Uploads the `out` directory
6. **Deploy** - Deploys to GitHub Pages

## Notes

- The site is built as a static export (no server-side features)
- Images are unoptimized for compatibility with static hosting
- The workflow runs automatically on every push to `main`
- GitHub Pages is free for public repositories

