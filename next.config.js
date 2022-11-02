

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    URL: 'http://localhost:3030',
  }
}

module.exports = nextConfig
