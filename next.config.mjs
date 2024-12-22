/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lxzoewzkqvnqgncegpxf.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/**",
      },
    ],
  },
};

("https://lxzoewzkqvnqgncegpxf.supabase.co/storage/v1/object/public/Cabins/c7216469-336d-491f-850b-eead419970c8-unsplash_optimized_500.jpg");

export default nextConfig;

console.log("no");
