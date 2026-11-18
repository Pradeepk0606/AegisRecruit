const isProd = process.env.NODE_ENV === 'production';
const isGhPages = process.env.DEPLOY_TARGET === 'gh-pages';

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Only apply GitHub Pages options when explicitly targeting gh-pages
  basePath: isGhPages ? '/PradeepPortfolio' : '',
  trailingSlash: isGhPages ? true : false,
  output: isGhPages ? 'export' : 'standalone',
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'source.unsplash.com' },
      { protocol: 'https', hostname: 'i.scdn.co' },
      { protocol: 'https', hostname: 'mosaic.scdn.co' },
      { protocol: 'https', hostname: 'seed-mix-image.spotifycdn.com' },
      { protocol: 'https', hostname: 'wrapped-images.spotifycdn.com' },
    ],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
    // Required for static export on GitHub Pages
    unoptimized: isGhPages ? true : false,
  },
  env: {
    NEXT_PUBLIC_SITE_URL: isGhPages
      ? 'https://pradeepk0606.github.io/PradeepPortfolio'
      : (process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  },
};

export default nextConfig;
