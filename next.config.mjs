/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    qualities: [75, 95, 100],   // add all qualities used in your images
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placeholder.svg',
      },
      {
        protocol: 'https',
        hostname: 'blob.v0.dev',
      }
    ],
    unoptimized: false
  },

  trailingSlash: false
};

export default nextConfig;
