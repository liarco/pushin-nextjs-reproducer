
const withTM = require('next-transpile-modules')(['pushin'])

/** @type {import('next').NextConfig} */
const nextConfig = withTM({
  reactStrictMode: true,
})

module.exports = nextConfig
