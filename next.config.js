module.exports = {
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
};
