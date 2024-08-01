/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["mdx", "md", "jsx", "js", "tsx", "ts"],
  env: {
    API_LOCAL: process.env.NEXT_PUBLIC_API_LOCAL,
  },
};

export default nextConfig;
