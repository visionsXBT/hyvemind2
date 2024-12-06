/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'], // Keep this if you're serving images from localhost
    unoptimized: true, // This will allow using local GIFs without optimization
  },
  // Ensure no redirects or rewrites are interfering with our routes
  async redirects() {
    return []
  },
  async rewrites() {
    return []
  }
}

module.exports = nextConfig

