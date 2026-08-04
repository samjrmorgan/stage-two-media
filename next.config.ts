import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: "/photography",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/documentary",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/events-activations",
        destination: "/services",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
