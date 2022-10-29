/** @type {import("next").NextConfig} */
module.exports = {
  swcMinify: true,
  reactStrictMode: true,
  compiler: {
    emotion: true
  },
  experimental: {
    runtime: "experimental-edge"
  }
}
