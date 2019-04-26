import React from 'react'
import SEO from '../components/utils/seo'
import Layout from '../components/layout'

import HeroSection from '../components/sections/hero'
import DiscoverSection, { CaptionedImage, Caption } from '../components/sections/discover'
import BlogSection, { BlogPost, BlogImgWrap, BlogLink } from '../components/sections/blog'
import SearchSection from '../components/sections/search'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`stocksy`, `gatsby`, `microsite`]} />
    <HeroSection
      heading="50,000+ Business Stock Photos, Curated Daily"
      content="Business stock photography that looks authentic. All photographs and footage are exclusive and available royalty-free. Use our modern business content on your digital projects like websites, blog posts, or social media ads. Our stock business images are also great for print and digital ad campaigns." />
    <DiscoverSection
      label="Discover Stocksy"
      heading="Business Images"
      content="Explore our curated galleries featuring the latest stock business photography. From the boardroom to the coffee shop, we have business imagery for any occasion.">
      <CaptionedImage>
        <img src="" alt="" />
        <Caption>Gallery Title A</Caption>
      </CaptionedImage>
      <CaptionedImage>
        <img src="" alt="" />
        <Caption>Gallery Title B</Caption>
      </CaptionedImage>
      <CaptionedImage>
        <img src="" alt="" />
        <Caption>Gallery Title C</Caption>
      </CaptionedImage>
      <CaptionedImage tall>
        <img src="" alt="" />
        <Caption>Gallery Title D</Caption>
      </CaptionedImage>
    </DiscoverSection>
    <BlogSection
      label="More Great Stuff"
      heading="On the blog">
      <BlogPost
        image={<BlogImgWrap><img src="" alt="" /></BlogImgWrap>}
        link={<BlogLink href="#">Blog Title ></BlogLink>} />
      <BlogPost
        image={<BlogImgWrap><img src="" alt="" /></BlogImgWrap>}
        link={<BlogLink href="#">Blog Title ></BlogLink>} />
    </BlogSection>
    <SearchSection heading="Explore Stocksy's Business" />
  </Layout>
)

export default IndexPage
