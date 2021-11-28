/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  images: {
    domains: (process.env.IMAGE_DOMAINS_CONFIG || '').split(','),
  },
  webpack: (config, _) => {
    return config
  },
}
