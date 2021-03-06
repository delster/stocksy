import React from 'react'
import styled from 'styled-components'
import Container from '../layout/container'
import StocksySearch from '../partials/stocksysearch'

const StyledSearchSection = styled.section`
  margin-bottom: 180px;
`
const SearchHeading = styled.h2`
  color: white;
  font-size: 72px;
  font-style: normal;
  font-weight: 700;
  text-align: center;

  @media(max-width:720px) {
    font-size: 64px;
  }
`

const SearchSection = props => (
  <StyledSearchSection>
    <Container>
      <SearchHeading>{props.heading}</SearchHeading>
      <StocksySearch />
    </Container>
  </StyledSearchSection>
)

export default SearchSection