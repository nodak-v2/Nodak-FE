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
    domains: [
      'via.placeholder.com',
      process.env.NEXT_PUBLIC_IMAGE_URL.split('https://')[1],
    ],
  },
});

module.exports = nextConfig;
