import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'placeholder.svg' },
      { protocol: 'https', hostname: 'blob.v0.dev' },
    ],
    unoptimized: false,
  },

  trailingSlash: false,

  experimental: {
    turbopack: {
      root: __dirname, // Fixes the Turbopack workspace root issue
    },
  },
};

export default nextConfig;
