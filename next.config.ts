import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      // Point legacy top-level URLs at the matching service page so their
      // existing ranking equity is preserved (was previously /services).
      {
        source: "/photography",
        destination: "/services/photography",
        permanent: true,
      },
      {
        source: "/documentary",
        destination: "/services/documentary",
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
