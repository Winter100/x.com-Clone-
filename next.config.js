/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack5: true,
  webpack: (config, options) => {
    config.cache = false;
    return config;
  },
  images: {
    remotePatterns: [
      {
        hostname: "via.placeholder.com",
      },
    ],
  },
};

module.exports = nextConfig;
