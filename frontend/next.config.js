/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: [
        "encrypted-tbn0.gstatic.com", 
        "images.unsplash.com",
        "cdn.pixabay.com",
        "images.pexels.com"
      ],
    },
  };
  
  module.exports = nextConfig;
  