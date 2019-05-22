import React from 'react'
import styled from 'styled-components'

import Container from '../layout/container'
import { SectionLabel } from '../partials/sectionlabel'
import CDNImage from '../utils/cdnimage'

const responsiveBreakpoint = `720px`

const StyledDiscoverSection = styled.section`
  margin-bottom: 180px;

  @media (max-width: ${responsiveBreakpoint}) {
    margin-bottom: 6rem;
  }
`
const DiscoverSectionLabel = styled(SectionLabel)`
  top: 0;
  left: -20%;

  @media (max-width: ${responsiveBreakpoint}) {
    position: relative;
    left: inherit;
    padding-left: 5.5rem;
    transform: none;
  }
`
const DiscoverGrid = styled.div`
  display: grid;
  grid-gap: 30px;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: ${responsiveBreakpoint}) {
    grid-template-columns: none;
  }
`
/* eslint-disable no-use-before-define */
const DiscoverGridItem = styled.div`
  & ${CaptionedImage} img {
    max-height: 400px;
  }
  &:nth-of-type(4) {
    grid-row-end: span 2;
    & ${CaptionedImage} img {
      max-height: 800px;
    }
  }
`
/* eslint-enable no-use-before-define */
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

const CaptionedImage = styled.div`
  &,
  & img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    background-color: #494949;
  }
`
const Caption = styled.span`
  color: white;
  background-color: #292929;
  position: absolute;
  left: 0;
  bottom: 0;
  min-height: 1em;
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
          <DiscoverSectionLabel>{props.label}</DiscoverSectionLabel>
          <DiscoverHeading>{props.heading}</DiscoverHeading>
          <DiscoverContent>{props.content}</DiscoverContent>
        </DiscoverGridItem>
        {props.discoverImages &&
          props.discoverImages.map((e, i) => (
            <DiscoverGridItem key={i}>
              <a href={e.captionLinkUrl}>
                <CaptionedImage>
                  <CDNImage assetId={e.imageId} alt={e.altText} />
                  <Caption>{e.captionLinkText}</Caption>
                </CaptionedImage>
              </a>
            </DiscoverGridItem>
          ))}
      </DiscoverGrid>
    </Container>
  </StyledDiscoverSection>
)

export default DiscoverSection
