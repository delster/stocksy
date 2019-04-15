import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import SEO from '../components/seo'
import HeroGrid from '../components/herogrid'
import StocksySearch from '../components/search'

const Container = styled.div`
  margin: 0 auto;
  width: 95%;
  max-width: 1080px;
  ${props => props.wide && `width: 100%; max-width: 1280px;`}
  ${props => props.narrow && `max-width: 920px;`}
`

const HeroSection = styled.section``
const HeroHeading = styled.h2`
  color: white;
  font-family: "Playfair Display", serif;
  font-size: 72px;
  font-weight: 700;
  line-height: 88px;
  max-width: 800px;
  margin-bottom: -.5em;
`
const HeroContent = styled.p`
  font-family: "Open Sans", sans-serif;
  font-size: 24px;
`

const DiscoverSection = styled.section``
const DiscoverHeading = styled.h2``
const DiscoverContent = styled.p``

const SectionLabel = styled.p``

const CaptionedImage = styled.div``
const Caption = styled.span``

const BlogSection = styled.section``
const BlogHeading = styled.h2``

const BlogPost = styled.div``
const BlogImage = styled.img``
const BlogLink = styled.a``

const SearchSection = styled.section``
const SearchHeading = styled.h2``

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`stocksy`, `gatsby`, `microsite`]} />
    <HeroSection>
      <Container>
        <HeroHeading>50,000+ Business Stock Photos, Curated Daily</HeroHeading>
      </Container>
      <Container wide>
        <HeroGrid />
      </Container>
      <Container narrow>
        <HeroContent>
          Business stock photography that looks authentic. All photographs and footage are exclusive and available royalty-free. Use our modern business content on your digital projects like websites, blog posts, or social media ads. Our stock business images are also great for print and digital ad campaigns.
        </HeroContent>
      </Container>
    </HeroSection>
    <DiscoverSection>
      <Container>
        <SectionLabel>Discover Stocksy</SectionLabel>
        <DiscoverHeading>Business Images</DiscoverHeading>
        <DiscoverContent>
          Explore our curated galleries featuring the latest stock business photography. From the boardroom to the coffee shop, we have business imagery for any occasion.
        </DiscoverContent>
        <CaptionedImage>
          <img src="" alt="" />
          <Caption>Gallery Title</Caption>
        </CaptionedImage>
        <CaptionedImage>
          <img src="" alt="" />
          <Caption>Gallery Title</Caption>
        </CaptionedImage>
        <CaptionedImage>
          <img src="" alt="" />
          <Caption>Gallery Title</Caption>
        </CaptionedImage>
        <CaptionedImage tall>
          <img src="" alt="" />
          <Caption>Gallery Title</Caption>
        </CaptionedImage>
      </Container>
    </DiscoverSection>
    <BlogSection>
      <Container>
        <SectionLabel>More Great Stuff</SectionLabel>
        <BlogHeading>On the blog</BlogHeading>
        <BlogPost>
          <BlogImage src="" alt="" />
          <BlogLink href="#">Blog Title ></BlogLink>
        </BlogPost>
        <BlogPost>
          <BlogImage src="" alt="" />
          <BlogLink href="#">Blog Title ></BlogLink>
        </BlogPost>
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