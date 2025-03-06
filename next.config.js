const path = require('path');

module.exports = {
  images: {
    domains: ['flagcdn.com'],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `@import "@/styles/global/variables.scss"; 
                  @import "~bootstrap/scss/functions";
                  @import "~bootstrap/scss/variables";
                  @import "~bootstrap/scss/mixins";`,
  },
  webpack: (config) => {
    config.resolve.alias['@'] = path.join(__dirname, 'src');
    return config;
  }
};
