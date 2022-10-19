const withTM = require("next-transpile-modules")(["@commons-ui/core"], {
  debug: /(^|\s)+--inspect(\s|$)+/.test(process.env.NODE_OPTIONS),
  resolveSymlinks: false,
});

module.exports = withTM({
  experimental: {
    outputStandalone: true,
  },
  images: {
    domains: process.env.NEXT_PUBLIC_IMAGE_DOMAINS?.split(",")
      ?.map((d) => d.trim())
      ?.filter((d) => d),
  },
  reactStrictMode: false,
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
  async redirects() {
    return [
      {
        source: "/data",
        destination: "/data/documents",
        permanent: true,
      },
      {
        source: "/explore",
        destination: "/explore/ke",
        permanent: true,
      },
      {
        source: "/stories",
        destination: "/stories/news",
        permanent: true,
      },
    ];
  },
});
