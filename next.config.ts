import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    TMDB_ACCESS_TOKEN: process.env.TMDB_ACCESS_TOKEN,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
        pathname: "/t/p/**",
      },
      {
        protocol: "https",
        hostname: "links.papareact.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "knetic.org.uk",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
