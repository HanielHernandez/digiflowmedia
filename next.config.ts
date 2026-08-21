import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // GSAP ScrollTrigger + React Strict Mode double-mount often cancels tweens in dev
  reactStrictMode: false,
  // Keep GSAP/ScrollTrigger out of broken tree-shaking (package marks sideEffects: false)
  transpilePackages: ["gsap"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
    ],
  },
};

export default nextConfig;
