// import global next configuration
import sharedConfig from '@repo/next-config/index.mjs';
import bundleAnalyzer from '@next/bundle-analyzer';

/** @type {import('next').NextConfig} */

//setup bundle analyzer
const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

// export bundle analyzer with nextjs config
const nextConfig = withBundleAnalyzer({
  ...sharedConfig,
})

export default nextConfig;