import React from 'react'
import styled from 'styled-components'

import FluidImg from '../utils/fluidimage'

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

const HeroGrid = props => {
  const { gridImages } = props

  return (
    <Grid outer>
      <GridItem flex>
        <Box area="a" flexBasis="50%" gapBottom>
          <FluidImg fluid={gridImages[0].optimized.childImageSharp.fluid} alt={gridImages[0].altText} />
        </Box>
        <Box area="b" flexBasis="40%">
          <FluidImg fluid={gridImages[1].optimized.childImageSharp.fluid} alt={gridImages[0].altText} />
        </Box>
      </GridItem>
      <Grid inner>
        <Box area="c">
          <FluidImg fluid={gridImages[2].optimized.childImageSharp.fluid} alt={gridImages[0].altText} />
        </Box>
        <Box area="d">
          <FluidImg fluid={gridImages[3].optimized.childImageSharp.fluid} alt={gridImages[0].altText} />
        </Box>
        <Box area="e">
          <FluidImg fluid={gridImages[4].optimized.childImageSharp.fluid} alt={gridImages[0].altText} />
        </Box>
        <Box area="f">
          <FluidImg fluid={gridImages[5].optimized.childImageSharp.fluid} alt={gridImages[0].altText} />
        </Box>
        <Box area="g">
          <FluidImg fluid={gridImages[6].optimized.childImageSharp.fluid} alt={gridImages[0].altText} />
        </Box>
      </Grid>
      <GridItem flex>
        <Box area="h" flexBasis="55%" gapBottom>
          <FluidImg fluid={gridImages[7].optimized.childImageSharp.fluid} alt={gridImages[0].altText} />
        </Box>
        <Box area="i" flexBasis="35%">
          <FluidImg fluid={gridImages[8].optimized.childImageSharp.fluid} alt={gridImages[0].altText} />
        </Box>
      </GridItem>
    </Grid>
  )
}

export default HeroGrid