import React from 'react'
import styled from 'styled-components'
import Container from '../layout/container'
import LogoImg from '../../images/logo.png'

const StyledHeader = styled.header`
  margin-top: 3rem;
`
const HeaderWrapper = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  & > div {
    display: inline-block;
  }
`
const HeaderLeft = styled.div``
const HeaderRight = styled.div`
  &,& a {
    color: #a6a6a6;
    font-family: "Open Sans";
    font-size: 14px;
    font-weight: 400;
  }
  & a {
    text-decoration: none;
    padding-bottom: 2px;
    border-bottom: 1px solid #a6a6a6;
  }
`

const Header = () => (
  <StyledHeader>
    <HeaderWrapper>
      <HeaderLeft>
        <img src={LogoImg} alt="Stocksy Logo" />
      </HeaderLeft>
      <HeaderRight>
        Shop <a href="https://stocksy.com">Stocksy.com</a>
      </HeaderRight>
    </HeaderWrapper>
  </StyledHeader>
)

export default Header