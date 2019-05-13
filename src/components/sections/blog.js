import React from 'react'
import styled from 'styled-components'
import Container from '../layout/container'
import { SectionLabel } from '../partials/sectionlabel'
import CDNImage from '../utils/cdnimage'

const responsiveBreakpoint = `980px`

const StyledBlogSection = styled.section`
  margin-bottom: 180px;

  & ${SectionLabel} {
    top: -25%;
    left: -42.5%;
  }

  @media (max-width: ${responsiveBreakpoint}) {
    margin-bottom: 4rem;
  }
`
const BlogFlex = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-end;
  justify-content: space-between;

  @media (max-width: ${responsiveBreakpoint}) {
    flex-flow: column;
    align-items: stretch;
  }
`
const BlogBox = styled.div`
  flex: 1 1 100%;
  height: 100%;
  margin: 1rem;

  &:first-of-type {
    flex: 1 1 75%;
    align-self: center;
    padding-bottom: 2rem;

    @media (max-width: ${responsiveBreakpoint}) {
      margin: 0;

      & * {
        display: inline-block;
        text-align: left;
        padding-left: 5.5rem;
        max-width: 100%;
        width: 100%;
      }

      & ${SectionLabel} {
        position: relative;
        top: 0;
        left: 0;
        transform: none;
      }
    }
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
const BlogPost = styled.div``
const BlogImgWrap = styled.div`
  width: 100%;
  margin-bottom: 1rem;
  &,
  & img {
    max-height: 360px;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`
const BlogLink = styled.a`
  display: inline-block;
  color: #ff3f58;
  font-family: 'Open Sans';
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  min-height: 2em;
`
const BlogSection = props => (
  <StyledBlogSection>
    <Container>
      <BlogFlex>
        <BlogBox>
          <SectionLabel>{props.label}</SectionLabel>
          <BlogHeading>{props.heading}</BlogHeading>
        </BlogBox>
        {props.posts &&
          props.posts.map(post => (
            <BlogBox key={post.imageId}>
              <BlogPost>
                <BlogImgWrap>
                  <CDNImage assetId={post.imageId} />
                </BlogImgWrap>
                <BlogLink href={post.linkUrl}>{post.linkText} ></BlogLink>
              </BlogPost>
            </BlogBox>
          ))}
      </BlogFlex>
    </Container>
  </StyledBlogSection>
)

export default BlogSection
