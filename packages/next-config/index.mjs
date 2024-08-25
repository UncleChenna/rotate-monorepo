/** @type {import('next').NextnextConfig} */

//global next configuration
const nextConfig = {
  webpack: ( nextConfig ) => nextConfig,
  env: {},
  swcMinify: true,
  optimizeFonts: true,
  compiler: {
    removeConsole: process.env.NODE_ENV !== 'development', //hide console logs in environments except development environment
  },
  // optimize image
  images: {
    minimumCacheTTL: 60,
  },
                                                        // Enable compression
  compress: true,
  
  images: {                                              // optimize image
    minimumCacheTTL: 60,
    deviceSizes: [ 640, 750, 828, 1080, 1200, 1920 ],
    imageSizes: [ 16, 32, 48, 64, 96, 128, 256 ],
    formats: [ 'image/webp' ],
  },
  // Enable compression
  compress: true,
  // Additional optimizations
  poweredByHeader: false,
  generateEtags: true,
  reactStrictMode: true,
  productionBrowserSourceMaps: false,
  // commented this out because it requires extra packages to be installed in order to run a successful build
  // experimental: {
  //   optimizeCss: true, // optimize css declarations
  // },
};

export default nextConfig;