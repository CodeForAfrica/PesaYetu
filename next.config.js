const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const withImages = require('next-images');

module.exports = withBundleAnalyzer(
  withImages({
    cssLoaderOptions: {
      url: false,
    },
    // Exclude SVG from default file extensions list
    // See: https://github.com/twopluszero/next-images/blob/master/index.js
    fileExtensions: ['jpg', 'jpeg', 'png', 'gif', 'ico', 'webp', 'jp2', 'avif'],
    images: {
      domains: process.env.NEXT_PUBLIC_IMAGE_DOMAINS.split(', '),
    },
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/,
        use: [
          '@svgr/webpack',
          {
            loader: 'svg-url-loader',
            options: {},
          },
        ],
      });
      return config;
    },
  })
);
