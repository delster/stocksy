import React from 'react'
import styled from 'styled-components'
import Container from '../layout/container'
import { SectionLabel } from '../layout/shared'

const StyledDiscoverSection = styled.section`
  margin-bottom: 180px;
  & ${SectionLabel} {
    top: 0;
    left: -20%;
  }
`
const DiscoverGrid = styled.div`
  display: grid;
  grid-gap: 30px;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(2, 1fr);
`
const DiscoverGridItem = styled.div`
  &:nth-of-type(4) {
    grid-row-end: span 2;
  }
`
const DiscoverHeading = styled.h2`
  color: white;
  font-size: 42px;
  font-style: normal;
  font-weight: 700;
  line-height: 52px;
  margin-bottom: 0.5em;
  padding-left: 5.5rem;
  max-width: 200px;
`
const DiscoverContent = styled.p`
  color: #a6a6a6;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 29px;
  margin-bottom: 3em;
  padding-left: 5.5rem;
  max-width: 360px;
`

export const CaptionedImage = styled.div`
  position: relative;
  height: 100%;
  background-color: #494949;
`
export const Caption = styled.span`
  color: white;
  background-color: #292929;
  position: absolute;
  bottom: 0;
  width: 100%;
  font-weight: 600;
  font-family: 'Open Sans';
  font-size: 16px;
  font-style: normal;
  letter-spacing: 2px;
  text-align: center;
  text-transform: uppercase;
  padding: 0.75em 0;
`
const DiscoverSection = props => (
  <StyledDiscoverSection>
    <Container>
      <DiscoverGrid>
        <DiscoverGridItem>
          <SectionLabel>{props.label}</SectionLabel>
          <DiscoverHeading>{props.heading}</DiscoverHeading>
          <DiscoverContent>{props.content}</DiscoverContent>
        </DiscoverGridItem>
        {props.children.map(item=><DiscoverGridItem>{item}</DiscoverGridItem>)}
      </DiscoverGrid>
    </Container>
  </StyledDiscoverSection>
)

export default DiscoverSection