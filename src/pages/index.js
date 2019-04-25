import React from 'react'
import styled from 'styled-components'
import SEO from '../components/utils/seo'
import Layout from '../components/layout'
import Container from '../components/layout/container'

import HeroGrid from '../components/herogrid'
import StocksySearch from '../components/stocksysearch'

const SansFont = `"Open Sans", sans-serif`
const SerifFont = `"Playfair Display", serif`

const SectionLabel = styled.p`
  position: absolute;
  height: 1em;
  color: white;
  font-family: ${SansFont};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 5px;
  text-transform: uppercase;
  transform: rotate(270deg);
`

const HeroSection = styled.section`
  margin-bottom: 240px;
`
const HeroHeading = styled.h2`
  color: white;
  font-family: ${SerifFont};
  font-size: 72px;
  font-weight: 700;
  line-height: 88px;
  max-width: 800px;
  margin-bottom: -0.5em;
`
const HeroContent = styled.p`
  color: #a6a6a6;
  font-family: ${SansFont};
  font-size: 24px;
  font-weight: 400;
  line-height: 38px;
  text-align: left;
}
`

const DiscoverSection = styled.section`
  margin-bottom: 180px;

  & ${SectionLabel} {
    top: 0;
    left: -20%;
  }
`
const DiscoverGrid = styled.div`
  display: grid;
  grid-gap: 30px;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(2, 1fr);
`
const DiscoverGridItem = styled.div`
  ${props => props.tall && `grid-row-end: span 2;`}
`
const DiscoverHeading = styled.h2`
  color: white;
  font-family: ${SerifFont};
  font-size: 42px;
  font-style: normal;
  font-weight: 700;
  line-height: 52px;
  margin-bottom: 0.5em;
  padding-left: 5.5rem;
  max-width: 200px;
`
const DiscoverContent = styled.p`
  color: #a6a6a6;
  font-family: ${SansFont};
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 29px;
  margin-bottom: 3em;
  padding-left: 5.5rem;
  max-width: 360px;
`

const CaptionedImage = styled.div`
  position: relative;
  height: 100%;
  background-color: #494949;
`
const Caption = styled.span`
  color: white;
  background-color: #292929;
  position: absolute;
  bottom: 0;
  width: 100%;
  font-weight: 600;
  font-family: 'Open Sans';
  font-size: 16px;
  font-style: normal;
  letter-spacing: 2px;
  text-align: center;
  text-transform: uppercase;
  padding: 0.75em 0;
`

const BlogSection = styled.section`
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
  font-family: ${SerifFont};
  font-size: 42px;
  font-style: normal;
  font-weight: 700;
  line-height: 52px;
  max-width: 140px;
  margin: 0 auto;
`
const BlogPost = styled.div``
const BlogImgWrap = styled.div`
  background-color: #494949;
  min-height: 220px;
  width: 100%;
  margin-bottom: 1rem;
`
const BlogLink = styled.a`
  color: #ff3f58;
  font-family: 'Open Sans';
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
`

const SearchSection = styled.section`
  margin-bottom: 180px;
`
const SearchHeading = styled.h2`
  color: white;
  font-family: ${SerifFont};
  font-size: 72px;
  font-style: normal;
  font-weight: 700;
  line-height: 64px;
  text-align: center;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`stocksy`, `gatsby`, `microsite`]} />
    <HeroSection>
      <Container z="10">
        <HeroHeading>50,000+ Business Stock Photos, Curated Daily</HeroHeading>
      </Container>
      <Container wide>
        <HeroGrid />
      </Container>
      <Container narrow>
        <HeroContent>
          Business stock photography that looks authentic. All photographs and
          footage are exclusive and available royalty-free. Use our modern
          business content on your digital projects like websites, blog posts,
          or social media ads. Our stock business images are also great for
          print and digital ad campaigns.
        </HeroContent>
      </Container>
    </HeroSection>
    <DiscoverSection>
      <Container>
        <DiscoverGrid>
          <DiscoverGridItem>
            <SectionLabel>Discover Stocksy</SectionLabel>
            <DiscoverHeading>Business Images</DiscoverHeading>
            <DiscoverContent>
              Explore our curated galleries featuring the latest stock business
              photography. From the boardroom to the coffee shop, we have
              business imagery for any occasion.
            </DiscoverContent>
          </DiscoverGridItem>
          <DiscoverGridItem>
            <CaptionedImage>
              <img src="" alt="" />
              <Caption>Gallery Title A</Caption>
            </CaptionedImage>
          </DiscoverGridItem>
          <DiscoverGridItem>
            <CaptionedImage>
              <img src="" alt="" />
              <Caption>Gallery Title B</Caption>
            </CaptionedImage>
          </DiscoverGridItem>
          <DiscoverGridItem tall>
            <CaptionedImage>
              <img src="" alt="" />
              <Caption>Gallery Title C</Caption>
            </CaptionedImage>
          </DiscoverGridItem>
          <DiscoverGridItem>
            <CaptionedImage tall>
              <img src="" alt="" />
              <Caption>Gallery Title D</Caption>
            </CaptionedImage>
          </DiscoverGridItem>
        </DiscoverGrid>
      </Container>
    </DiscoverSection>
    <BlogSection>
      <Container>
        <BlogFlex>
          <BlogBox>
            <SectionLabel>More Great Stuff</SectionLabel>
            <BlogHeading>On the blog</BlogHeading>
          </BlogBox>
          <BlogBox>
            <BlogPost>
              <BlogImgWrap>
                <img src="" alt="" />
              </BlogImgWrap>
              <BlogLink href="#">Blog Title ></BlogLink>
            </BlogPost>
          </BlogBox>
          <BlogBox>
            <BlogPost>
              <BlogImgWrap>
                <img src="" alt="" />
              </BlogImgWrap>
              <BlogLink href="#">Blog Title ></BlogLink>
            </BlogPost>
          </BlogBox>
        </BlogFlex>
      </Container>
    </BlogSection>
    <SearchSection>
      <Container>
        <SearchHeading>Explore Stocksy's Business</SearchHeading>
        <StocksySearch />
      </Container>
    </SearchSection>
  </Layout>
)

export default IndexPage
