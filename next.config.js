const withImages = require("next-images");

module.exports = withImages({
  images: {
    domains: process.env.NEXT_PUBLIC_IMAGE_DOMAINS.split(", "),
  },
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        "@svgr/webpack",
        {
          loader: "svg-url-loader",
          options: {},
        },
      ],
    });
    return config;
  },
});
