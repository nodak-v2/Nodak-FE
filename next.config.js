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
      'nodak-s3.s3.ap-northeast-2.amazonaws.com',
    ],
  },
});

module.exports = nextConfig;
