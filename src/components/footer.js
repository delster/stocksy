import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const StyledFooter = styled.footer`
  text-align: center;
`
const FooterSocials = styled.div``
const FooterColophon = styled.div``
const FooterLinks = styled.ul``

const Footer = () => (
  <StyledFooter>
    <FooterSocials>
      <FontAwesomeIcon icon={['fab', 'facebook-square']} />
      <FontAwesomeIcon icon={['fab', 'instagram']} />
      <FontAwesomeIcon icon={['fab', 'pinterest-p']} />
      <FontAwesomeIcon icon={['fab', 'twitter']} />
    </FooterSocials>
    <FooterColophon>The entire Stocksy United collection is 100% exclusive, hand selected for quality and curated daily.</FooterColophon>
    <FooterLinks>
      <a href="/legal">Legal</a>
      <a href="/terms">Terms</a>
      <a href="/privacy">Privacy</a>
    </FooterLinks>
  </StyledFooter>
)

export default Footer