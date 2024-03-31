/** @type {import('next').NextConfig} */
const nextConfig = {
  // esLint:{
  //   ignoreDuringBuilds:true
  // },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: ''
      }
    ]
  }
};

export default nextConfig;
