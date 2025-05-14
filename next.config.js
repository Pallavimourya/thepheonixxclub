/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  typescript: {
    // During development, type errors won't fail the build
    ignoreBuildErrors: process.env.NODE_ENV === 'development',
  },
}

module.exports = nextConfig 