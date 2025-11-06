/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://ahiaglobal.onrender.com/:path*', // Added :path* at the end
      },
    ];
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'magikworldgifts.eu-central-1.linodeobjects.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
