/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true // ajuda com hospedagem estática
};
module.exports = nextConfig;
