import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75, 80],
    deviceSizes: [360, 480, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async redirects() {
    return [
      {
        source: "/index.html",
        destination: "/",
        permanent: true,
      },
      {
        source: "/about.html",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/services.html",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/coal-tar-transportation.html",
        destination: "/coal-tar-transportation",
        permanent: true,
      },
      {
        source: "/ethanol-transportation.html",
        destination: "/ethanol-transportation",
        permanent: true,
      },
      {
        source: "/lube-oil-transportation.html",
        destination: "/lube-oil-transportation",
        permanent: true,
      },
      {
        source: "/other-services.html",
        destination: "/other-services",
        permanent: true,
      },
      {
        source: "/clients.html",
        destination: "/clients",
        permanent: true,
      },
      {
        source: "/contact.html",
        destination: "/contact",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
