import Layout from '../components/Layout';
import styled from 'styled-components';
import ProductGrid from '../components/ProductGrid';

const ShopPage = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 2rem;
`;

export default function Shop() {
  return (
    <Layout>
      <ShopPage>
        <Title>All Products</Title>
        <ProductGrid />
      </ShopPage>
    </Layout>
  );
} 