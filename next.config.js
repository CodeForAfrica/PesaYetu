module.exports = {
  images: {
    domains: process.env.NEXT_PUBLIC_IMAGE_DOMAINS.split(", "),
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
};
