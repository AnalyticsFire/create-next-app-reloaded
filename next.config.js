// next.config.js
const withSass = require('@zeit/next-sass');
const path = require('path');

module.exports = withSass({
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty',
    };
    // Added aliases
    config.resolve.alias = {
      '@root': path.join(__dirname),
      config: path.resolve(__dirname, 'lib/config.shim'),
    };

    return config;
  },
});
