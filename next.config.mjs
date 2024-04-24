/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    instrumentationHook: true,
  },
  images: {
    domains: ['via.placeholder.com'],
  },
};

export default nextConfig;
