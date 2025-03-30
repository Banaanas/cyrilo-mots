/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["fr"],
    defaultLocale: "fr",
  },
  reactStrictMode: true,
  compiler: {
    emotion: true,
  },

  async headers() {
    return [
      // Fonts Header - Cache + Immutability
      {
        source: "/fonts/Montserrat.woff2",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/fonts/OpenSans-Regular.woff2",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
