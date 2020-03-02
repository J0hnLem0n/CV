const URL = `https://johnlemon.ru`

module.exports = {
  siteMetadata: {
    title: `Николаев Евгений Евгеньевич`,
    description: `Senior JavaScript Developer. Всегда готов рассмотреть сложные и интересные предложения по работе, связанные с веб разработкой.`,
    author: `JohnLemon`,
    siteUrl: URL,
    keywords: `JavaScript, JS, React, Redux, AngularJS,  Web, старший, разработчик, Senior, developer`,
    yandexVerification: '61e35626d1f6c0af',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.inline.svg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/
        }
      }
    },
    'gatsby-plugin-sitemap',
    {
      resolve: `gatsby-plugin-yandex-metrika`,
      options: {
        trackingId: '58702333',
        webvisor: true,
        trackHash: true,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-159360292-1",
        head: true,
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: URL,
        sitemap: `${URL}/sitemap.xml`,
        policy: [{ userAgent: '*', allow: '/' }]
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
