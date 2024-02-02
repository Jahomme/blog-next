/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  target: 'serverless',
  reactStrictMode: true,
};

module.exports = nextConfig;
