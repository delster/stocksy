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
import Header from './header'
import Footer from './footer'

// Global Styling
const GlobalStyle = createGlobalStyle`
  * { position: relative }
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
