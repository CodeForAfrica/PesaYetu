const path = require("path");

module.exports = {
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "storybook-addon-material-ui",
  ],
  stories: ["../src/**/*.stories.js"],
};
