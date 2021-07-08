const withImages = require("next-images");
module.exports = withImages({
   cssLoaderOptions: {
     url: false,
   },
   // Exclude SVG from default file extensions list
   // See: https://github.com/twopluszero/next-images/blob/master/index.js
   fileExtensions: ["jpg", "jpeg", "png", "gif", "ico", "webp", "jp2", "avif"],
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