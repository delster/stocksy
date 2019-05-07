import React from 'react'
import { Link, graphql } from 'gatsby'
import SEO from '../components/utils/seo'
import Layout from '../components/layout'
import Container from '../components/layout/container'

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => (
  <Layout>
    <SEO title="Home" keywords={[`stocksy`, `gatsby`, `microsite`]} />
    <Container>
      <h1>
        Welcome to the Landing Page Generator! Use the CMS to create subpages.
      </h1>
      <p>Current Subpages:</p>
      <ul>
        {edges.map(e => (
          <li key={e.node.frontmatter.slug}>
            <Link to={e.node.frontmatter.slug}>
              {e.node.frontmatter.title}
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  </Layout>
)

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___title] }) {
      edges {
        node {
          frontmatter {
            title
            slug
          }
        }
      }
    }
  }
`

export default IndexPage
