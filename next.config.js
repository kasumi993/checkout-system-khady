const path = require('path');

module.exports = {
  images: {
    domains: ['flagcdn.com'],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `@import "@/styles/global/variables.scss";`,
  },
  webpack: (config) => {
    config.resolve.alias['@'] = path.join(__dirname, 'src');
    return config;
  }
};
