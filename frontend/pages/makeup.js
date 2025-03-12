import Layout from '../components/Layout';
import styled from 'styled-components';
import ProductGrid from '../components/ProductGrid';
import { navCategories } from '../data/products';
import { useState } from 'react';

const PageContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
  color: #333;
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
  border: 1px solid ${props => props.active ? '#b8860b' : '#ddd'};
  background: ${props => props.active ? '#b8860b' : '#fff'};
  color: ${props => props.active ? '#fff' : '#333'};
  border-radius: 25px;
  white-space: nowrap;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #b8860b;
    color: white;
  }
`;

export default function Makeup() {
  const [activeCategory, setActiveCategory] = useState('All');

  return (
    <Layout>
      <PageContainer>
        <Title>Makeup Collection</Title>
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
        <ProductGrid category={activeCategory === 'All' ? null : activeCategory} />
      </PageContainer>
    </Layout>
  );
} 