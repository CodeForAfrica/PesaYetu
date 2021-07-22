module.exports = {
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
};
