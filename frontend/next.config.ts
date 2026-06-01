import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "images.pexels.com" },
          {
      protocol: "https",
      hostname: "sonipa-production.up.railway.app",
    },
    ],
  },
}

export default nextConfig
