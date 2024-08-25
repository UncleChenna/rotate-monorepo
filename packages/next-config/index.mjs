/** @type {import('next').NextnextConfig} */


const nextConfig = {
  webpack: ( nextConfig ) => nextConfig,
  env: {},
  swcMinify: true,
  optimizeFonts: true,
  compiler: {
    removeConsole: process.env.NODE_ENV !== 'development',
  },
  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;