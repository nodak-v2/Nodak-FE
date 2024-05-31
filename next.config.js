const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
});

/** @type {import('next').NextConfig} */
const nextConfig = withPWA({
  experimental: {
    instrumentationHook: true,
  },
  images: {
    domains: ['via.placeholder.com'],
  },  
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination:
          (process.env.NEXT_PUBLIC_URL ?? 'https://api.nodak.link') + '/:path*',
      },
    ];
  },
});

module.exports = nextConfig;
