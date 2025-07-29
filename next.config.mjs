/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
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
  output: 'standalone',
  trailingSlash: false,
  experimental: {
    optimizeCss: true
  }
}

export default nextConfig
