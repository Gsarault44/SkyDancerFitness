/** @type {import('next').NextConfig} */
const path = require('path');
const globImporter = require('node-sass-glob-importer');
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    importer: globImporter(),
    includePaths: [path.join(__dirname, 'styles')],
  },
}

module.exports = nextConfig
