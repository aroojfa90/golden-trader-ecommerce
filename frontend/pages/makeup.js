import { useState } from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import ProductGrid from '../components/ProductGrid';
import { navCategories, makeupProducts } from '../data/products';
import { FiFilter, FiGrid } from 'react-icons/fi';

const PageContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #333;
  font-family: 'Playfair Display', serif;
`;

const Subtitle = styled.p`
  color: #666;
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto;
`;

const CategoryNav = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 3rem;
  overflow-x: auto;
  padding-bottom: 1rem;
  justify-content: center;
  
  &::-webkit-scrollbar {
    height: 4px;
  }
`;

const CategoryButton = styled.button`
  padding: 0.75rem 2rem;
  border: 2px solid ${props => props.active ? '#b8860b' : 'transparent'};
  background: ${props => props.active ? '#b8860b' : '#f8f8f8'};
  color: ${props => props.active ? '#fff' : '#333'};
  border-radius: 30px;
  white-space: nowrap;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;

  &:hover {
    background: #b8860b;
    color: white;
    transform: translateY(-2px);
  }
`;

const ToolBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding: 1rem;
  background: #f8f8f8;
  border-radius: 8px;
`;

const FilterButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: white;
  border: 1px solid #ddd;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #f0f0f0;
  }
`;

export default function MakeupPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  // Calculate filtered products based on active category
  const filteredProducts = activeCategory === 'All' 
    ? makeupProducts 
    : makeupProducts.filter(product => product.category === activeCategory);

  return (
    <Layout>
      <PageContainer>
        <Header>
          <Title>Makeup Collection</Title>
          <Subtitle>
            Discover our curated selection of premium makeup products from top brands
          </Subtitle>
        </Header>

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

        <ToolBar>
          <FilterButton>
            <FiFilter size={18} />
            Filter
          </FilterButton>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <FiGrid size={18} />
            <span>{filteredProducts.length} Products</span>
          </div>
        </ToolBar>

        <ProductGrid category={activeCategory === 'All' ? null : activeCategory} />
      </PageContainer>
    </Layout>
  );
} 