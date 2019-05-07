import React from 'react'
import styled from 'styled-components'
import Container from '../layout/container'
import HeroGrid from '../partials/herogrid'

const StyledHeroSection = styled.section`
  margin-bottom: 240px;
`
const HeroHeading = styled.h2`
  color: white;
  font-size: 72px;
  font-weight: 700;
  line-height: 88px;
  max-width: 800px;
  margin-bottom: -0.5em;
`
const HeroContent = styled.p`
  color: #a6a6a6;
  font-size: 24px;
  font-weight: 400;
  line-height: 38px;
  text-align: left;
`

const HeroSection = props => (
  <StyledHeroSection>
    <Container z="10">
      <HeroHeading>{props.heading}</HeroHeading>
    </Container>
    <Container wide>
      <HeroGrid gridImages={props.gridImages} />
    </Container>
    <Container narrow>
      <HeroContent>{props.content}</HeroContent>
    </Container>
  </StyledHeroSection>
)

export default HeroSection