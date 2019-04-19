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
  ${props => props.a && `flex: 1 1 50%; margin-bottom: ${gridGap};`}
  ${props => props.b && `flex: 1 1 40%;`}
  ${props => props.c && `grid-area: c;`}
  ${props => props.d && `grid-area: d;`}
  ${props => props.e && `grid-area: e;`}
  ${props => props.f && `grid-area: f;`}
  ${props => props.g && `grid-area: g;`}
  ${props => props.h && `flex: 1 1 55%; margin-bottom: ${gridGap};`}
  ${props => props.i && `flex: 1 1 35%;`}
`

const HeroGrid = props => (
  <Grid outer>
    <GridItem flex>
      <Box a />
      <Box b />
    </GridItem>
    <Grid inner>
      <Box c />
      <Box d />
      <Box e />
      <Box f />
      <Box g />
    </Grid>
    <GridItem flex>
      <Box h />
      <Box i />
    </GridItem>
  </Grid>
)

export default HeroGrid