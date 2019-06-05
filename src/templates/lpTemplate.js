import React from 'react'
import SEO from '../components/utils/seo'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import HeroSection from '../components/sections/hero'
import DiscoverSection from '../components/sections/discover'
import BlogSection from '../components/sections/blog'
import SearchSection from '../components/sections/search'

const Template = ({ data }) => {
  const { fields } = data.markdownRemark
  const { title, description, hero, discover, blog, search } = data.markdownRemark.frontmatter

  // This could use a refactor at the Node API level to expose these as pre-built fields.
  const heroImages = hero.gridImages.map((e, i) => ({ ...e, "optimized": fields[`heroImage_${i}`] }) )
  const discoverImages = discover.discoverImages.map((e, i) => ({ ...e, "optimized": fields[`discoverImage_${i}`] }))
  const blogPosts = blog.posts.map((e, i) => ({ ...e, "optimized": fields[`blogImage_${i}`] }))

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
        gridImages={heroImages}
      />
      <DiscoverSection
        label={discover.label}
        heading={discover.heading}
        content={discover.copy}
        discoverImages={discoverImages}
      />
      <BlogSection
        label={blog.label}
        heading={blog.heading}
        posts={blogPosts}
      />
      <SearchSection heading={search.heading} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { slug: { eq: $path } }) {
      fields {
        heroImage_0 { ...optimizedImg }
        heroImage_1 { ...optimizedImg }
        heroImage_2 { ...optimizedImg }
        heroImage_3 { ...optimizedImg }
        heroImage_4 { ...optimizedImg }
        heroImage_5 { ...optimizedImg }
        heroImage_6 { ...optimizedImg }
        heroImage_7 { ...optimizedImg }
        heroImage_8 { ...optimizedImg }
        discoverImage_0 { ...optimizedImg }
        discoverImage_1 { ...optimizedImg }
        discoverImage_2 { ...optimizedImg }
        discoverImage_3 { ...optimizedImg }
        blogImage_0 { ...optimizedImg }
        blogImage_1 { ...optimizedImg }
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
  fragment optimizedImg on File {
  childImageSharp {
    fluid(maxWidth: 525, quality: 70) {
      ...GatsbyImageSharpFluid_withWebp_tracedSVG
      presentationWidth
    }
  }
}
`

export default Template
