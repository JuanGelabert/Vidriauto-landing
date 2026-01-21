/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['vidriauto.com.ar'],
  },
  // Optimización para SEO y performance
  compress: true,
  poweredByHeader: false,
}

module.exports = nextConfig

