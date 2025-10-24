const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://api.ahiaglobal.com/api/:path*', // ✅ Proxy to secure backend
      },
    ];
  },
};

export default nextConfig;
