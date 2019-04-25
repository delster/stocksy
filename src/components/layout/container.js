import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
  position: relative;
  margin: 0 auto;
  width: 95%;
  max-width: 1080px;
  ${props => props.wide && `width: 100%; max-width: 1280px;`}
  ${props => props.narrow && `max-width: 920px;`}
  z-index: ${props => props.z ? props.z : `1`}
`

const Container = props => <StyledContainer {...props}>{props.children}</StyledContainer>

export default Container