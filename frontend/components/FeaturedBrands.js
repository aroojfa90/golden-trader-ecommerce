import styled from "styled-components";

export default function FeaturedBrands() {
  const brands = [
    {
      name: "St London",
      logo: "https://images.pexels.com/photos/4465824/pexels-photo-4465824.jpeg",
      products: "150+ Products"
    },
    {
      name: "Maybelline",
      logo: "https://images.pexels.com/photos/4465831/pexels-photo-4465831.jpeg",
      products: "200+ Products"
    },
    {
      name: "The Ordinary",
      logo: "https://images.pexels.com/photos/4465829/pexels-photo-4465829.jpeg",
      products: "50+ Products"
    },
    {
      name: "Kryolan",
      logo: "https://images.pexels.com/photos/4465834/pexels-photo-4465834.jpeg",
      products: "100+ Products"
    },
    {
      name: "Loreal Paris",
      logo: "https://images.pexels.com/photos/4465840/pexels-photo-4465840.jpeg",
      products: "180+ Products"
    },
    {
      name: "Revolution",
      logo: "https://images.pexels.com/photos/4465837/pexels-photo-4465837.jpeg",
      products: "120+ Products"
    }
  ];

  return (
    <Section>
      <SectionTitle>Featured Brands</SectionTitle>
      <BrandsGrid>
        {brands.map((brand) => (
          <BrandCard key={brand.name}>
            <BrandImageContainer>
              <BrandImage src={brand.logo} alt={brand.name} />
            </BrandImageContainer>
            <BrandInfo>
              <BrandName>{brand.name}</BrandName>
              <ProductCount>{brand.products}</ProductCount>
            </BrandInfo>
            <ShopNowButton>Shop Now</ShopNowButton>
          </BrandCard>
        ))}
      </BrandsGrid>
    </Section>
  );
}

const Section = styled.section`
  padding: 5rem 5%;
  background: #fff;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.8rem;
  margin-bottom: 3rem;
  font-family: 'Playfair Display', serif;
  color: #333;
`;

const BrandsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: 0 2rem;
`;

const BrandCard = styled.div`
  background: white;
  border-radius: 15px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0,0,0,0.1);
  }
`;

const BrandImageContainer = styled.div`
  width: 150px;
  height: 150px;
  margin: 0 auto 1.5rem;
  border-radius: 50%;
  overflow: hidden;
  border: 1px solid #f0f0f0;
`;

const BrandImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const BrandInfo = styled.div`
  margin-bottom: 1.5rem;
`;

const BrandName = styled.h3`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 0.5rem;
  font-weight: 600;
`;

const ProductCount = styled.p`
  color: #666;
  font-size: 0.9rem;
`;

const ShopNowButton = styled.button`
  padding: 0.8rem 2rem;
  background: transparent;
  color: #ff69b4;
  border: 2px solid #ff69b4;
  border-radius: 25px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #ff69b4;
    color: white;
    transform: translateY(-2px);
  }
`;

