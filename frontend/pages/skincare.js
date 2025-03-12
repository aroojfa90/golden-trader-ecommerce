import Layout from '../components/Layout';
import styled from 'styled-components';
import ProductGrid from '../components/ProductGrid';

const SkincarePage = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

export default function Skincare() {
  return (
    <Layout>
      <SkincarePage>
        <h1>Skincare</h1>
        <ProductGrid category="Skincare" />
      </SkincarePage>
    </Layout>
  );
} 