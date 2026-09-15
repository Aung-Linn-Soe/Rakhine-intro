/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // GitHub Pages などの静的ホスティング用に静的書き出し
  trailingSlash: true, // /see/index.html 形式で出力し、静的ホスティングでの解決を安定させる
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
