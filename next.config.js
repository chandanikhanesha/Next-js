/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["ilovecompress.appskym.com", "localhost", "picsum.photos"], // <== Domain name
  },
};

module.exports = nextConfig;
