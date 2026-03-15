/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://example.com", // ← 배포 후 실제 도메인으로 교체
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: "weekly",
  priority: 0.7,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
};
