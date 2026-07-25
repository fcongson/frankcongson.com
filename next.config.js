/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Static export has no server, so Next's image optimization API isn't available.
  // Source images are pre-sized/exported as-is. Revisit with a build-time optimizer
  // (e.g. sharp pre-processing) if page weight becomes an issue.
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  compiler: {
    styledComponents: true,
  },
}

module.exports = nextConfig
