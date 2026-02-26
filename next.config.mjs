/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Set basePath to your GitHub repo name, e.g. '/portfolio'
  // basePath: '/portfolio',
};

export default nextConfig;
