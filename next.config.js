/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    serverComponents: true,
    runtime: "experimental-edge",
  },
  images: {
    domains: [
      "imagedelivery.net",
      "customer-l1cj5o0rluzitqwm.cloudflarestream.com",
    ],
  },
  env: {
    BASE_URL: process.env.BASE_URL,
  },
};

module.exports = nextConfig;
