const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://api.ahiaglobal.com', 
      },
    ];
  },
};

export default nextConfig;
 