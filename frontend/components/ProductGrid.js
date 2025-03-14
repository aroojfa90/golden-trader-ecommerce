import styled from 'styled-components';
import Image from 'next/image';
import { useCart } from '../context/CartContext';
import { makeupProducts } from '../data/products';
import { FiShoppingBag, FiHeart, FiEye } from 'react-icons/fi';
import { useState } from 'react';

// Styled Components
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  padding: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const ProductCard = styled.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 30px rgba(0,0,0,0.15);

    .product-actions {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    .product-actions {
      opacity: 1;
      transform: none;
    }
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  padding-top: 125%; // 4:5 aspect ratio
  background: #f8f8f8;
  overflow: hidden;
`;

const ProductActions = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  gap: 1rem;
  padding: 1.5rem;
  background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.3s ease;
`;

const ActionButton = styled.button`
  background: white;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  color: #333;

  &:hover {
    background: #b8860b;
    color: white;
    transform: translateY(-3px);
  }
`;

const ProductInfo = styled.div`
  padding: 1.5rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Brand = styled.div`
  color: #b8860b;
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const Name = styled.h3`
  font-size: 1.1rem;
  margin-bottom: 0.75rem;
  font-weight: 500;
  color: #333;
  line-height: 1.4;
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.25rem;
`;

const Price = styled.span`
  font-size: 1.2rem;
  font-weight: 600;
  color: ${props => props.isDiscounted ? '#b8860b' : '#333'};
`;

const OriginalPrice = styled.span`
  text-decoration: line-through;
  color: #999;
  font-size: 1rem;
`;

const Discount = styled.span`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: #b8860b;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  font-size: 0.875rem;
  font-weight: 500;
  z-index: 1;
  box-shadow: 0 2px 8px rgba(184,134,11,0.3);
`;

const AddToCartButton = styled.button`
  width: 100%;
  padding: 1rem;
  background: ${props => props.disabled ? '#ccc' : '#b8860b'};
  color: white;
  border: none;
  border-radius: 8px;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  transition: all 0.3s ease;
  font-weight: 500;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:hover {
    background: ${props => props.disabled ? '#ccc' : '#96700a'};
    transform: ${props => props.disabled ? 'none' : 'translateY(-2px)'};
  }
`;

const OutOfStock = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255,255,255,0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  font-weight: 500;
  color: #e53e3e;
`;

const QuickView = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;

  &.active {
    opacity: 1;
    visibility: visible;
  }
`;

function ProductGrid({ category = null }) {
  const { addToCart } = useCart();
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  const filteredProducts = category 
    ? makeupProducts.filter(product => product.category === category)
    : makeupProducts;

  return (
    <>
      <Grid>
        {filteredProducts.map((product) => (
          <ProductCard key={product.id}>
            <ImageContainer>
              {product.discount > 0 && (
                <Discount>-{product.discount}%</Discount>
              )}
              <Image
                src={product.image}
                alt={`${product.brand} - ${product.name}`}
                layout="fill"
                objectFit="cover"
                priority={false}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkLUEwLi0tLS0tQT5AQEA"
              />
              <ProductActions className="product-actions">
                <ActionButton 
                  onClick={() => addToCart(product)} 
                  title="Add to Cart"
                  aria-label="Add to Cart"
                >
                  <FiShoppingBag size={18} />
                </ActionButton>
                <ActionButton 
                  title="Add to Wishlist"
                  aria-label="Add to Wishlist"
                >
                  <FiHeart size={18} />
                </ActionButton>
                <ActionButton 
                  onClick={() => setQuickViewProduct(product)} 
                  title="Quick View"
                  aria-label="Quick View"
                >
                  <FiEye size={18} />
                </ActionButton>
              </ProductActions>
              {product.outOfStock && (
                <OutOfStock>Out of Stock</OutOfStock>
              )}
            </ImageContainer>
            <ProductInfo>
              <Brand>{product.brand}</Brand>
              <Name>{product.name}</Name>
              <PriceContainer>
                <Price isDiscounted={product.discount > 0}>
                  Rs. {product.price}
                </Price>
                {product.discount > 0 && (
                  <OriginalPrice>Rs. {product.originalPrice}</OriginalPrice>
                )}
              </PriceContainer>
              <AddToCartButton 
                onClick={() => addToCart(product)}
                disabled={product.outOfStock}
              >
                <FiShoppingBag size={18} />
                {product.outOfStock ? 'Out of Stock' : 'Add to Cart'}
              </AddToCartButton>
            </ProductInfo>
          </ProductCard>
        ))}
      </Grid>

      {quickViewProduct && (
        <QuickView className="active" onClick={() => setQuickViewProduct(null)}>
          {/* Quick view modal content */}
        </QuickView>
      )}
    </>
  );
}

export default ProductGrid; 