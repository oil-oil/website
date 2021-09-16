module.exports = {
  siteUrl: process.env.SITE_URL || 'https://www.apiseven.com/',
  generateRobotsTxt: true,
  exclude: ['/server-sitemap.xml'], // <= exclude here
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://www.apiseven.com/server-sitemap.xml',
    ],
  },
}
