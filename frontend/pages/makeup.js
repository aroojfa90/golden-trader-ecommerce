import Layout from '../components/Layout';
import styled from 'styled-components';
import Image from 'next/image';
import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { makeupProducts, navCategories, brands, makeupCategories } from '../data/products';

const PageContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
`;

const HeroBanner = styled.div`
  position: relative;
  height: 300px;
  margin-bottom: 3rem;
  border-radius: 8px;
  overflow: hidden;
`;

const CategoryNav = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  overflow-x: auto;
  padding-bottom: 1rem;
  
  &::-webkit-scrollbar {
    height: 4px;
  }
`;

const CategoryButton = styled.button`
  padding: 0.5rem 1.5rem;
  border: 1px solid ${props => props.active ? '#000' : '#ddd'};
  background: ${props => props.active ? '#000' : '#fff'};
  color: ${props => props.active ? '#fff' : '#000'};
  border-radius: 25px;
  white-space: nowrap;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #000;
    color: #fff;
  }
`;

const FilterSection = styled.div`
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Filters = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  height: fit-content;
`;

const FilterGroup = styled.div`
  margin-bottom: 1.5rem;

  h3 {
    font-size: 1rem;
    margin-bottom: 1rem;
    font-weight: 600;
  }
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1.5rem;
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

const ProductImage = styled.div`
  position: relative;
  height: 220px;
  background: #f5f5f5;
`;

const ProductInfo = styled.div`
  padding: 1rem;

  h3 {
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
  }

  .brand {
    color: #666;
    font-size: 0.8rem;
    margin-bottom: 0.5rem;
  }

  .price {
    font-weight: 600;
    margin-bottom: 1rem;
  }
`;

const AddToCartButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  background: #000;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9;
  }
`;

export default function Makeup() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [priceRange, setPriceRange] = useState('all');
  const [selectedBrands, setSelectedBrands] = useState([]);
  const { addToCart } = useCart();

  // Filter products based on selected category
  const filteredProducts = makeupProducts.filter(product => {
    if (activeCategory === 'All') return true;
    if (activeCategory === 'New Arrivals') return product.isNew;
    return product.category === activeCategory;
  });

  return (
    <Layout>
      <PageContainer>
        <HeroBanner>
          <Image
            src="/images/banners/makeup-banner.jpg"
            alt="Makeup Collection"
            layout="fill"
            objectFit="cover"
            priority
          />
        </HeroBanner>

        <CategoryNav>
          {navCategories.map(category => (
            <CategoryButton
              key={category}
              active={activeCategory === category}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </CategoryButton>
          ))}
        </CategoryNav>

        <FilterSection>
          <Filters>
            <FilterGroup>
              <h3>Price Range</h3>
              <div>
                <label>
                  <input
                    type="radio"
                    name="price"
                    value="all"
                    checked={priceRange === 'all'}
                    onChange={(e) => setPriceRange(e.target.value)}
                  /> All
                </label>
                <label>
                  <input
                    type="radio"
                    name="price"
                    value="under1000"
                    checked={priceRange === 'under1000'}
                    onChange={(e) => setPriceRange(e.target.value)}
                  /> Under Rs. 1000
                </label>
              </div>
            </FilterGroup>

            <FilterGroup>
              <h3>Brands</h3>
              {brands.map(brand => (
                <div key={brand}>
                  <label>
                    <input
                      type="checkbox"
                      checked={selectedBrands.includes(brand)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedBrands([...selectedBrands, brand]);
                        } else {
                          setSelectedBrands(selectedBrands.filter(b => b !== brand));
                        }
                      }}
                    />
                    {' '}{brand}
                  </label>
                </div>
              ))}
            </FilterGroup>

            <FilterGroup>
              <h3>Product Type</h3>
              {Object.entries(makeupCategories).map(([category, subcategories]) => (
                <div key={category}>
                  <h4>{category}</h4>
                  {subcategories.map(subcategory => (
                    <div key={subcategory}>
                      <label>
                        <input type="checkbox" />
                        {' '}{subcategory}
                      </label>
                    </div>
                  ))}
                </div>
              ))}
            </FilterGroup>
          </Filters>

          <ProductGrid>
            {filteredProducts.map(product => (
              <ProductCard key={product.id}>
                <ProductImage>
                  <Image
                    src={product.image}
                    alt={product.name}
                    layout="fill"
                    objectFit="cover"
                  />
                </ProductImage>
                <ProductInfo>
                  <div className="brand">{product.brand}</div>
                  <h3>{product.name}</h3>
                  <div className="price">
                    <span className="current">Rs. {product.price}</span>
                    {product.discount && (
                      <span className="original">Rs. {product.originalPrice}</span>
                    )}
                  </div>
                  <AddToCartButton onClick={() => addToCart(product)}>
                    Add to Cart
                  </AddToCartButton>
                </ProductInfo>
              </ProductCard>
            ))}
          </ProductGrid>
        </FilterSection>
      </PageContainer>
    </Layout>
  );
} 