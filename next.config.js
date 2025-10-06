/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  // Only use static export for production builds (GitHub Pages)
  ...(isProd && { output: 'export' }),
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig