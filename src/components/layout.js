import React from 'react'
import PropTypes from 'prop-types'
import styled, { createGlobalStyle } from 'styled-components'

// Normalize.css (CSS Reset)
import 'normalize.css'

// TODO: Move these to the specific components that use them.
import 'typeface-open-sans'
import 'typeface-playfair-display'

// FontAwesome Library to load only these specific icons:
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {
  faFacebookSquare,
  faInstagram,
  faPinterestP,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'

// Layout Components
import Header from './partials/stickyheader'
import Footer from './partials/footer'

// Styling Variables
const SansFont = `"Open Sans", sans-serif`
const SerifFont = `"Playfair Display", serif`

// Global Styling
const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    position: relative;
    font-family: ${SansFont};
  }
  /* START: gastsby-image fix */
  picture {
    position: initial;
  }
  .gatsby-image-wrapper {
    height: 100%;
  }
  /* END: gastsby-image fix */
  h1,h2,h3,h4,h5,h6 {
    font-family: ${SerifFont};
  }
`
// Truly "Page Layout" Styling
const PageWrapper = styled.div`
  display: flex;
  flex-flow: column;
  color: #a6a6a6;
  background-color: black;
  min-height: 100vh;
`
// Body Styling
const Main = styled.main`
  flex: 1 1 100%;
`

library.add(fab, faFacebookSquare, faInstagram, faPinterestP, faTwitter)

const Layout = ({ children }) => (
  <PageWrapper>
    <GlobalStyle />
    <Header />
    <Main>{children}</Main>
    <Footer />
  </PageWrapper>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
