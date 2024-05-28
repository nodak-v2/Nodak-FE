/** @type {import('next').NextConfig} */
const nextConfig = {
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
};

export default nextConfig;
