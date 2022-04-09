/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};



module.exports = {
  env: {
    IMAGES_DOMAIN: process.env.IMAGES_DOMAIN
  },

  publicRuntimeConfig: {
    IMAGES_DOMAIN: process.env.IMAGES_DOMAIN
  },

  images: {
    domains: [process.env.IMAGES_DOMAIN],
    path: "/_next/image",
    loader: "default",
  },
}