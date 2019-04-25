import React from 'react'
import styled from 'styled-components'

const gridGap = `20px`;

const Grid = styled.div`
  display: grid;
  grid-gap: ${gridGap};

  ${props => props.outer && `
    grid-template-columns: 2fr 7fr 3fr;
    margin: 0 auto;
    height: 500px;
    width: 1200px;
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
`

const HeroGrid = props => (
  <Grid outer>
    <GridItem flex>
      <Box area="a" flexBasis="50%" gapBottom />
      <Box area="b" flexBasis="40%" />
    </GridItem>
    <Grid inner>
      <Box area="c" />
      <Box area="d" />
      <Box area="e" />
      <Box area="f" />
      <Box area="g" />
    </Grid>
    <GridItem flex>
      <Box area="h" flexBasis="55%" gapBottom />
      <Box area="i" flexBasis="35%" />
    </GridItem>
  </Grid>
)

export default HeroGrid