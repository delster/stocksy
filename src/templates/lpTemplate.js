import React from 'react'
import SEO from '../components/utils/seo'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

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

  const { fields } = data.markdownRemark

  return (
    <Layout>
      <SEO
        title={title}
        description={description}
        keywords={[`stocksy`, `gatsby`, `microsite`]}
      />
      {/*
      START: Image Optimization Debugging
      <div style={{ height: `333px`, width: `500px` }}>
        <Img fixed={fields.blogImage_0.childImageSharp.fixed} />
      </div>
      END: Image Optimization Debugging
      */}
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
      fields {
        blogImage_0 {
          relativePath
          childImageSharp {
            fixed(width: 500) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        blogImage_1 {
          relativePath
        }
        discoverImage_0 {
          relativePath
        }
        discoverImage_1 {
          relativePath
        }
        discoverImage_2 {
          relativePath
        }
        discoverImage_3 {
          relativePath
        }
        heroImage_0 {
          relativePath
        }
        heroImage_1 {
          relativePath
        }
        heroImage_2 {
          relativePath
        }
        heroImage_3 {
          relativePath
        }
        heroImage_4 {
          relativePath
        }
        heroImage_5 {
          relativePath
        }
        heroImage_6 {
          relativePath
        }
        heroImage_7 {
          relativePath
        }
        heroImage_8 {
          relativePath
        }
      }
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
