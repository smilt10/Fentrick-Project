/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',               // ✅ required for GitHub Pages
  images: { unoptimized: true },  // ✅ allows images in static export
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  trailingSlash: true,            // helps prevent 404s on static hosting
}

export default nextConfig
