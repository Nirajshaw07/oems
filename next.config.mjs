/** @type {import('next').NextConfig} */
const nextConfig = { devIndicators: flase;
    eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
