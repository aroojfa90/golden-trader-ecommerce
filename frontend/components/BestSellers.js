import styled from "styled-components";
import Image from 'next/image';
import { products } from '../data/products';

export default function BestSellers() {
  return (
    <StyledSection>
      <Title>Best Sellers</Title>
      <ProductGrid>
        {products.map((product) => (
          <ProductCard key={product.id}>
            <ImageContainer>
              <Image
                src={product.image}
                alt={`${product.brand} - ${product.name}`}
                layout="fill"
                objectFit="cover"
                priority={true}
                quality={90}
              />
              {product.discount && (
                <Discount>-{product.discount}%</Discount>
              )}
            </ImageContainer>
            <ProductInfo>
              <Brand>{product.brand}</Brand>
              <Name>{product.name}</Name>
              <PriceContainer>
                <SalePrice>Rs. {product.salePrice}</SalePrice>
                <OriginalPrice>Rs. {product.originalPrice}</OriginalPrice>
              </PriceContainer>
            </ProductInfo>
          </ProductCard>
        ))}
      </ProductGrid>
    </StyledSection>
  );
}

const StyledSection = styled.section`
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;
  font-weight: 600;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  padding: 1rem;
`;

const ProductCard = styled.div`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  padding-top: 133.33%; // 3:4 aspect ratio
`;

const ProductInfo = styled.div`
  padding: 1rem;
  text-align: center;
`;

const Brand = styled.p`
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`;

const Name = styled.h3`
  font-size: 1rem;
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

const PriceContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

const SalePrice = styled.span`
  color: #e53e3e;
  font-weight: 600;
`;

const OriginalPrice = styled.span`
  text-decoration: line-through;
  color: #666;
  font-size: 0.9rem;
`;

const Discount = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  background: #e53e3e;
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.875rem;
`; 