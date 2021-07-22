const path = require("path");

module.exports = {
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "storybook-addon-material-ui",
    "storybook-addon-next-router",
  ],
  stories: ["../src/**/*.stories.js"],
  webpackFinal: async (config) => {
    // Need to remove default svg-url-loader first
    // See: https://github.com/webpack/webpack/issues/595
    config.module.rules = config.module.rules.map((data) => {
      const regex = data.test && data.test.toString();
      if (/svg\|/.test(regex)) {
        data.test =
          /\.(ico|jpg|jpeg|png|apng|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/;
      }

      return data;
    });
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        "@svgr/webpack",
        {
          loader: "svg-url-loader",
          options: {
            // https://github.com/bhovhannes/svg-url-loader#iesafe
            iesafe: true,
          },
        },
      ],
    });

    config.module.rules.push({
      test: /\.(js|jsx)$/,
      loader: require.resolve("babel-loader"),
      options: {
        plugins: [
          "@babel/plugin-proposal-nullish-coalescing-operator",
        ],
      },
    });

    return config;
  },
};
