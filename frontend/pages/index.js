import Head from "next/head";
import styled from "styled-components";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import BestSellers from "../components/BestSellers";
import FeaturedBrands from "../components/FeaturedBrands";
import Newsletter from "../components/Newsletter";
import { categories, brands } from '../data/products';

export default function Home() {
  return (
    <>
      <Head>
        <title>Beauty & Care | Golden Trader</title>
        <meta name="description" content="Shop luxury beauty and skincare products" />
      </Head>

      <Navigation />

      <MainContainer>
        {/* Hero Section */}
        <HeroSection>
          <HeroContent>
            <h1>Natural Beauty & Skincare</h1>
            <p>Discover our collection of luxury beauty products</p>
            <ShopButton>Shop Now</ShopButton>
          </HeroContent>
        </HeroSection>

        {/* Categories */}
        <Section>
          <SectionTitle>Shop By Category</SectionTitle>
          <CategoryGrid>
            {categories.map((category) => (
              <CategoryCard key={category.name}>
                <CategoryImage src={category.image} alt={category.name} />
                <CategoryOverlay>
                  <CategoryName>{category.name}</CategoryName>
                  <CategoryDescription>{category.description}</CategoryDescription>
                  <CategoryButton>Shop Now</CategoryButton>
                </CategoryOverlay>
              </CategoryCard>
            ))}
          </CategoryGrid>
        </Section>

        {/* Best Sellers Section */}
        <BestSellers />

        {/* Special Offer Banner */}
        <OfferBanner>
          <OfferContent>
            <h2>Special Offer</h2>
            <p>Get 25% off on all Skincare products</p>
            <ShopButton>Shop Now</ShopButton>
          </OfferContent>
        </OfferBanner>

        {/* Featured Brands */}
        <FeaturedBrands />

        {/* Newsletter */}
        <Newsletter />
      </MainContainer>

      <Footer />
    </>
  );
}

// Styled Components
const MainContainer = styled.main`
  padding-top: 80px;
`;

const HeroSection = styled.div`
  height: 90vh;
  background: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)),
              url('https://images.pexels.com/photos/3785147/pexels-photo-3785147.jpeg') center/cover;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
`;

const HeroContent = styled.div`
  h1 {
    font-size: 4.5rem;
    margin-bottom: 1rem;
    font-family: 'Playfair Display', serif;
    line-height: 1.2;
  }
  p {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    font-weight: 300;
  }
`;

const ShopButton = styled.button`
  padding: 1.2rem 3.5rem;
  background: #ff69b4;
  color: white;
  border: none;
  border-radius: 30px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(255,105,180,0.3);
  }
`;

const Section = styled.section`
  padding: 5rem 5%;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.8rem;
  margin-bottom: 3rem;
  font-family: 'Playfair Display', serif;
  color: #333;
`;

const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 0 5%;
`;

const CategoryCard = styled.div`
  position: relative;
  height: 400px;
  overflow: hidden;
  border-radius: 15px;
  cursor: pointer;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
`;

const CategoryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;

  ${CategoryCard}:hover & {
    transform: scale(1.1);
  }
`;

const CategoryOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2rem;
  background: linear-gradient(transparent, rgba(0,0,0,0.8));
  color: white;
  transform: translateY(100px);
  transition: transform 0.3s ease;

  ${CategoryCard}:hover & {
    transform: translateY(0);
  }
`;

const CategoryName = styled.h3`
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const CategoryDescription = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
  opacity: 0.9;
`;

const CategoryButton = styled.button`
  padding: 0.8rem 2rem;
  background: #ff69b4;
  color: white;
  border: none;
  border-radius: 25px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #ff5ba7;
    transform: translateY(-2px);
  }
`;

const OfferBanner = styled.div`
  background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
              url('https://images.pexels.com/photos/3785157/pexels-photo-3785157.jpeg') center/cover;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  margin: 4rem 0;
`;

const OfferContent = styled.div`
  h2 {
    font-size: 3rem;
    margin-bottom: 1rem;
    font-family: 'Playfair Display', serif;
  }
  p {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
`;
