import React from 'react'
import styled from 'styled-components'

import CDNImage from '../utils/cdnimage'

const gridGap = `20px`;

const Grid = styled.div`
  display: grid;
  grid-gap: ${gridGap};

  ${props => props.outer && `
    grid-template-columns: 2fr 7fr 3fr;
    margin: 0 auto;
    min-height: 500px;
    width: 1200px;

    & * {
      max-height: 100%;
    }
  `}
  ${props => props.inner && `
    height: 100%;
    grid-template-rows: 4fr 3fr 3fr;
    grid-template-columns: 9fr 6fr 7fr;
    grid-template-areas: "c d d" "e e f" "e e g";
  `}
`
const GridItem = styled.div`
  ${props => props.flex && `
    display: flex;
    flex-flow: column nowrap;
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
        { props.gridImages &&
          <CDNImage assetId={props.gridImages[0]} alt='' />}
      </Box>
      <Box area="b" flexBasis="40%">
        { props.gridImages &&
          <CDNImage assetId={props.gridImages[1]} alt='' />}
      </Box>
    </GridItem>
    <Grid inner>
      <Box area="c">
        { props.gridImages &&
          <CDNImage assetId={props.gridImages[2]} alt='' />}
      </Box>
      <Box area="d">
        { props.gridImages &&
          <CDNImage assetId={props.gridImages[3]} alt='' />}
      </Box>
      <Box area="e">
        { props.gridImages &&
          <CDNImage assetId={props.gridImages[4]} alt='' />}
      </Box>
      <Box area="f">
        { props.gridImages &&
          <CDNImage assetId={props.gridImages[5]} alt='' />}
      </Box>
      <Box area="g">
        { props.gridImages &&
          <CDNImage assetId={props.gridImages[6]} alt='' />}
      </Box>
    </Grid>
    <GridItem flex>
      <Box area="h" flexBasis="55%" gapBottom>
        { props.gridImages &&
          <CDNImage assetId={props.gridImages[7]} alt='' />}
      </Box>
      <Box area="i" flexBasis="35%">
        { props.gridImages &&
          <CDNImage assetId={props.gridImages[8]} alt='' />}
      </Box>
    </GridItem>
  </Grid>
)

export default HeroGrid