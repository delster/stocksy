import React from 'react'
import SEO from '../components/utils/seo'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

import HeroSection from '../components/sections/hero'
import DiscoverSection from '../components/sections/discover'
import BlogSection from '../components/sections/blog'
import SearchSection from '../components/sections/search'

const Template = ({ data }) => {
  const {
    title,
    description,
    hero,
    discover,
    blog,
    search,
  } = data.markdownRemark.frontmatter

  return (
    <Layout>
      <SEO
        title={title}
        description={description}
        keywords={[`stocksy`, `gatsby`, `microsite`]}
      />
      <HeroSection
        heading={hero.heading}
        content={hero.copy}
        gridImages={hero.gridImages}
      />
      <DiscoverSection
        label={discover.label}
        heading={discover.heading}
        content={discover.copy}
        discoverImages={discover.discoverImages}
      />
      <BlogSection
        label={blog.label}
        heading={blog.heading}
        posts={blog.posts}
      />
      <SearchSection heading={search.heading} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { slug: { eq: $path } }) {
      frontmatter {
        title
        description
        hero {
          heading
          copy
          gridImages {
            imageId
            altText
          }
        }
        discover {
          label
          heading
          copy
          discoverImages {
            imageId
            altText
            captionLinkText
            captionLinkUrl
          }
        }
        blog {
          label
          heading
          posts {
            imageId
            linkText
            linkUrl
          }
        }
        search {
          heading
        }
      }
    }
  }
`

export default Template
