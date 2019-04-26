import React from 'react'
import styled from 'styled-components'
import Container from '../layout/container'
import { SectionLabel } from '../layout/shared'

const StyledBlogSection = styled.section`
  margin-bottom: 180px;
  & ${SectionLabel} {
    top: -25%;
    left: -42.5%;
  }
`
const BlogFlex = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
`
const BlogBox = styled.div`
  flex: 1 1 100%;
  height: 100%;
  margin: 1rem;

  &:first-of-type {
    flex: 1 1 75%;
    padding-bottom: 2rem;
  }
`
const BlogHeading = styled.h2`
  color: white;
  font-size: 42px;
  font-style: normal;
  font-weight: 700;
  line-height: 52px;
  max-width: 140px;
  margin: 0 auto;
`
const StyledBlogPost = styled.div``
export const BlogImgWrap = styled.div`
  background-color: #494949;
  min-height: 220px;
  width: 100%;
  margin-bottom: 1rem;
`
export const BlogLink = styled.a`
  color: #ff3f58;
  font-family: 'Open Sans';
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
`
export const BlogPost = props => <StyledBlogPost>{props.image}{props.link}</StyledBlogPost>

const BlogSection = props => (
  <StyledBlogSection>
    <Container>
      <BlogFlex>
        <BlogBox>
          <SectionLabel>{props.label}</SectionLabel>
          <BlogHeading>{props.heading}</BlogHeading>
        </BlogBox>
        {props.children.map(post=><BlogBox>{post}</BlogBox>)}
      </BlogFlex>
    </Container>
  </StyledBlogSection>
)

export default BlogSection