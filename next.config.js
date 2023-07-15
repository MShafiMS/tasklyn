/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
    domains: ["webb-school-mission-2022.vercel.app"],
  },
};

module.exports = nextConfig;
