import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

// Normalize.css (CSS Reset)
import 'normalize.css'

// TODO: Move these to the specific components that use them.
import 'typeface-open-sans'
import 'typeface-playfair-display'

// FontAwesome Library to load only these specific icons:
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faFacebookSquare, faInstagram, faPinterestP, faTwitter } from '@fortawesome/free-brands-svg-icons'

// Layout Components
import Header from './header'
import Footer from './footer'

const Theme = styled.div`
  display: flex;
  flex-flow: column;
  color: #a6a6a6;
  background-color: black;
  min-height: 100vh;
`
const Body = styled.main`
  flex: 1 1 100%;
`

library.add(fab, faFacebookSquare, faInstagram, faPinterestP, faTwitter)

const Layout = ({ children }) => (
  <Theme>
    <Header />
    <Body>{children}</Body>
    <Footer />
  </Theme>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
