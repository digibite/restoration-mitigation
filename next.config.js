/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const isGithubPages = process.env.PAGES_BASE_PATH

const nextConfig = {
  // Only use static export for production builds (GitHub Pages)
  ...(isProd && { output: 'export' }),
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  assetPrefix: isGithubPages ? `/${process.env.PAGES_BASE_PATH}/` : '',
  basePath: isGithubPages ? `/${process.env.PAGES_BASE_PATH}` : '',
}

module.exports = nextConfig