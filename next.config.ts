import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Build a self-contained server for Docker / VPS deployment.
  // Ignored by Vercel, which handles output automatically.
  output: "standalone",
};

export default nextConfig;
