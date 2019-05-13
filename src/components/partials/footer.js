import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Container from '../layout/container'

const StyledFooter = styled.footer`
  text-align: center;
  margin-bottom: 54px;
`
const FooterSocials = styled.div`
  color: white;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  width: 95%;
  max-width: 200px;
  margin: 0 auto 24px;
`
const FooterColophon = styled.div`
  color: #a6a6a6;
  font-family: 'Open Sans';
  font-weight: 400;
  font-style: normal;
  font-size: 13px;
  margin-bottom: 24px;
`
const FooterLinks = styled.ul`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  width: 95%;
  max-width: 160px;
  margin: 0 auto;
  padding: 0;
  & a {
    color: #a6a6a6;
    font-family: 'Open Sans';
    font-weight: 400;
    font-style: normal;
    font-size: 13px;
  }
`

const Footer = () => (
  <StyledFooter>
    <Container>
      <FooterSocials>
        <FontAwesomeIcon icon={['fab', 'facebook-square']} />
        <FontAwesomeIcon icon={['fab', 'instagram']} />
        <FontAwesomeIcon icon={['fab', 'pinterest-p']} />
        <FontAwesomeIcon icon={['fab', 'twitter']} />
      </FooterSocials>
      <FooterColophon>
        The entire Stocksy United collection is 100% exclusive, hand selected
        for quality and curated daily.
      </FooterColophon>
      <FooterLinks>
        <a href="/legal">Legal</a>
        <a href="/terms">Terms</a>
        <a href="/privacy">Privacy</a>
      </FooterLinks>
    </Container>
  </StyledFooter>
)

export default Footer
