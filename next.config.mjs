const nextConfig = {
    reactStrictMode: true,
    images: {
      deviceSizes: [640, 768, 1024, 1280, 1600],
    },
    compress: true,
    staticPageGenerationTimeout: 60,
    swcMinify: true,
    experimental: {
      scrollRestoration: true,
    },
    // async headers() {
    //   return [
    //     {
    //       source: '/(.*)',
    //       headers: [
    //         {
    //           key: 'Cache-Control',
    //           value: 'public, max-age=31536000, immutable',
    //         },
    //       ],
    //     },
    //   ];
    // },
  };
  
  export default nextConfig;
  