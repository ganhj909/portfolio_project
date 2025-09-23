import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  exportTrailingSlash: true,
  output: 'export',
  images: { unoptimized: true },
};

export default nextConfig;
