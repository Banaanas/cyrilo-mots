/** @type {import("next-sitemap").IConfig} */
const config = {
  siteUrl: "https://mots.cyrilo.dev/",
  generateRobotsTxt: true,
  generateIndexSitemap: false,

  robotsTxtOptions: {
    policies: [
      {
        // Disallow ALL robots to crawl ALL folders/files
        // To block indexation, noindex and nofollow meta tags have been added through next-seo default config (SEO file)
        userAgent: "*",
        disallow: "/",
      },
    ],
  },
};

module.exports = config;
