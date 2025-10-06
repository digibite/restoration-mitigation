/** @type {import('next').NextConfig} */
const repo = process.env.PAGES_BASE_PATH
  ? `/${process.env.PAGES_BASE_PATH}`
  : "";
const nextConfig = {
  output: "export",
  basePath: repo,
  assetPrefix: repo ? `${repo}/` : "",
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
};
module.exports = nextConfig;
