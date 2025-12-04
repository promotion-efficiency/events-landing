import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: 'export',
    images: { 
        unoptimized: true,
        formats: ['image/webp', 'image/avif'],
    },
    compress: true,
    poweredByHeader: false,
    generateEtags: true,
    trailingSlash: false,
    // Note: headers() is not supported in static export mode
    // If you need custom headers, configure them in your GitHub Pages settings or use a custom domain with .htaccess
};

export default nextConfig;
