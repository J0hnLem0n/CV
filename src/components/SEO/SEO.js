/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

function SEO({ lang, meta }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            keywords
            siteUrl
            yandexVerification
          }
        }
      }
    `
  )

  const {
    title,
    siteUrl,
    keywords,
    description,
    author,
    yandexVerification
  } = site.siteMetadata

  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={title}
      meta={[
        {
          name: `description`,
          content: description
        },
        {
          name: `keywords`,
          content: keywords
        },
        {
          name: `author`,
          content: author
        },
        {
          property: `og:title`,
          content: title
        },
        {
          property: `og:site_name`,
          content: `Обо мне`
        },
        {
          property: `og:description`,
          content: description
        },

        {
          property: `og:image:alt`,
          content: `Николаев Евгений Евгеньевич. JavaScript разработчки`
        },
        {
          property: `og:image:height`,
          content: `630`
        },
        {
          property: `og:image:width`,
          content: `1200`
        },
        {
          property: `og:url`,
          content: siteUrl
        },
        {
          property: `og:image`,
          content: `${siteUrl}/images/og_image.png?v1`
        },
        {
          property: `og:type`,
          content: `website`
        },
        {
          name: `twitter:card`,
          content: `summary`
        },
        {
          name: `twitter:creator`,
          content: author
        },
        {
          name: `twitter:title`,
          content: title
        },
        {
          name: `twitter:description`,
          content: description
        },
        {
          name: `yandex-verification`,
          content: yandexVerification
        }
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `ru`,
  meta: [],
  description: ``
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired
}

export default SEO
