import React from 'react'
import styled from 'styled-components'

import CDNImage from '../utils/cdnimage'

const gridGap = `20px`
const responsiveBreakpoint = `800px`

const Grid = styled.div`
  display: grid;
  grid-gap: ${gridGap};

  ${props =>
    props.outer &&
    `
    grid-template-columns: 2fr 7fr 3fr;
    margin: 0 auto;
    min-height: 500px;
    width: 100%;
    max-width: 1200px;

    & * {
      max-height: 100%;
    }

    @media(max-width:${responsiveBreakpoint}) {
      display: flex;
      flex-flow: column;
    }
  `}

  ${props =>
    props.inner &&
    `
    height: 100%;
    grid-template-rows: 4fr 3fr 3fr;
    grid-template-columns: 9fr 6fr 7fr;
    grid-template-areas: "c d d" "e e f" "e e g";

    @media(max-width:${responsiveBreakpoint}) {
      margin: ${gridGap} 0;
      & ${Box} {
        min-height: 120px;
      }
    }
  `}
`
const GridItem = styled.div`
  ${props =>
    props.flex &&
    `
    display: flex;
    flex-flow: column nowrap;

    @media(max-width:${responsiveBreakpoint}) {
      flex-flow: row nowrap;
      align-items: stretch;
      justify-content: space-between;
      max-height: 240px;

      & ${Box} {
        flex: 1 1 50%;
        margin-bottom: 0;
        &:first-of-type {
          margin-right: ${gridGap};
        }
      }
    }
  `}
`
const Box = styled.div`
  background: #444;
  ${props => props.area && `grid-area: ${props.area};`}
  ${props => props.flexBasis && `flex: 1 1 ${props.flexBasis};`}
  ${props => props.gapBottom && `margin-bottom: ${gridGap};`}

  & img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`

const HeroGrid = props => (
  <Grid outer>
    <GridItem flex>
      <Box area="a" flexBasis="50%" gapBottom>
        <CDNImage
          assetId={props.gridImages[0].imageId}
          alt={props.gridImages[0].altText}
        />
      </Box>
      <Box area="b" flexBasis="40%">
        <CDNImage
          assetId={props.gridImages[1].imageId}
          alt={props.gridImages[1].altText}
        />
      </Box>
    </GridItem>
    <Grid inner>
      <Box area="c">
        <CDNImage
          assetId={props.gridImages[2].imageId}
          alt={props.gridImages[2].altText}
        />
      </Box>
      <Box area="d">
        <CDNImage
          assetId={props.gridImages[3].imageId}
          alt={props.gridImages[3].altText}
        />
      </Box>
      <Box area="e">
        <CDNImage
          assetId={props.gridImages[4].imageId}
          alt={props.gridImages[4].altText}
        />
      </Box>
      <Box area="f">
        <CDNImage
          assetId={props.gridImages[5].imageId}
          alt={props.gridImages[5].altText}
        />
      </Box>
      <Box area="g">
        <CDNImage
          assetId={props.gridImages[6].imageId}
          alt={props.gridImages[6].altText}
        />
      </Box>
    </Grid>
    <GridItem flex>
      <Box area="h" flexBasis="55%" gapBottom>
        <CDNImage
          assetId={props.gridImages[7].imageId}
          alt={props.gridImages[7].altText}
        />
      </Box>
      <Box area="i" flexBasis="35%">
        <CDNImage
          assetId={props.gridImages[8].imageId}
          alt={props.gridImages[8].altText}
        />
      </Box>
    </GridItem>
  </Grid>
)

export default HeroGrid
