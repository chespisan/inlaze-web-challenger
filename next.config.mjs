/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  env: {
    API_LOCAL: process.env.NEXT_PUBLIC_API_LOCAL,
  },
};

export default nextConfig;
