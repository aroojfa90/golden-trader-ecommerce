import Image from 'next/image';
import styled from "styled-components";
import { useState } from "react";

export default function ProductCard({ product }) {
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0]);

  return (
    <Card>
      <div className="relative">
        <Image
          src={product.image}
          alt={`${product.brand} - ${product.name}`}
          width={300}
          height={400}
          objectFit="cover"
          priority={true}
        />
        {product.discount && (
          <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded">
            -{product.discount}%
          </span>
        )}
      </div>
      <ProductInfo>
        <BrandName>{product.brand}</BrandName>
        <ProductName>{product.name}</ProductName>
        <PriceContainer>
          {product.discount > 0 && (
            <OriginalPrice>Rs.{product.originalPrice}</OriginalPrice>
          )}
          <SalePrice>Rs.{product.salePrice}</SalePrice>
        </PriceContainer>
        
        {product.colors && (
          <ColorSelector>
            {product.colors.map(color => (
              <ColorOption 
                key={color}
                selected={color === selectedColor}
                onClick={() => setSelectedColor(color)}
              >
                {color}
              </ColorOption>
            ))}
          </ColorSelector>
        )}
        
        {product.soldOut ? (
          <SoldOutButton>Sold Out</SoldOutButton>
        ) : (
          <AddToCartButton>Add to Cart</AddToCartButton>
        )}
      </ProductInfo>
    </Card>
  );
}

const Card = styled.div`
  background: white;
  padding: 15px;
  border-radius: 10px;
  text-align: center;
  width: 250px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
`;

const ProductInfo = styled.div`
  margin-top: 10px;
`;

const BrandName = styled.h3`
  font-size: 1.1rem;
  margin: 10px 0;
`;

const ProductName = styled.h2`
  font-size: 1.1rem;
  margin: 10px 0;
`;

const PriceContainer = styled.div`
  margin: 10px 0;
`;

const OriginalPrice = styled.span`
  text-decoration: line-through;
  color: #666;
  margin-right: 10px;
`;

const SalePrice = styled.span`
  font-weight: bold;
  color: #ff69b4;
`;

const ColorSelector = styled.div`
  margin: 10px 0;
`;

const ColorOption = styled.span`
  padding: 5px 10px;
  background: ${props => props.selected ? '#ff69b4' : '#f0f0f0'};
  color: ${props => props.selected ? 'white' : '#333'};
  border-radius: 5px;
  margin-right: 5px;
  cursor: pointer;
`;

const AddToCartButton = styled.button`
  padding: 10px 20px;
  background: #ff69b4;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #ff5ba7;
  }
`;

const DiscountBadge = styled.span`
  background: #ff69b4;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 0.8rem;
  margin-bottom: 10px;
`;

const SoldOutButton = styled.button`
  padding: 10px 20px;
  background: #666;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: not-allowed;
`;
