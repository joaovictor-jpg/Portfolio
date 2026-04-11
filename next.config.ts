import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  transpilePackages: ['@mantine/core', '@mantine/hooks'],
};

export default nextConfig;
