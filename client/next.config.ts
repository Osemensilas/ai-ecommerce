const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://ahiaglobal.onrender.com', 
      },
    ];
  },
};

export default nextConfig;
 