import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import LogoImg from '../../images/logo-header.svg'
import HeaderSearch from './headersearch'

const StickyHeader = styled.header`
  background-color: #181818;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  z-index: 500;
`
const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
`
const LogoWrap = styled.div`
  padding-left: 0.666em;
  padding-top: 0.3em;
`
const HeaderRight = styled.nav`
  & a {
    display: inline-block;
    color: #e6e6e6;
    font-family: 'Open Sans';
    font-size: 13px;
    font-weight: 400;
    text-decoration: none;
    padding: 1.8em 1.15em;
  }
`

export default () => (
  <StaticQuery
    query={graphql`
      {
        allCmsSettings {
          edges {
            node {
              navlinks_primary {
                navLinkText
                navLinkUrl
              }
            }
          }
        }
      }
    `}
    render={data => {
      const navLinks = data.allCmsSettings.edges[0].node.navlinks_primary

      return (
        <StickyHeader>
          <HeaderLeft>
            <LogoWrap>
              <a href="https://www.stocksy.com/">
                <img src={LogoImg} alt="Stocksy Logo" />
              </a>
            </LogoWrap>
            <HeaderSearch />
          </HeaderLeft>
          <HeaderRight>
            {navLinks.map(n => (
              <a key={n.navLinkText} href={n.navLinkUrl}>
                {n.navLinkText}
              </a>
            ))}
          </HeaderRight>
        </StickyHeader>
      )
    }}
  />
)
