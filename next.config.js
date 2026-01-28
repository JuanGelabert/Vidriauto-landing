/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  // Optimización para SEO y performance
  compress: true,
  poweredByHeader: false,

  // Exportar como sitio estático
  output: 'export',
}

module.exports = nextConfig
