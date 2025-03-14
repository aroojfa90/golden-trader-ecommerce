import styled from 'styled-components';
import Navigation from './Navigation';
import Footer from './Footer';
import { useEffect } from 'react';
import Head from 'next/head';

const LayoutWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  flex: 1;
  padding-top: 80px; // Height of fixed navbar
  
  @media (max-width: 768px) {
    padding-top: 60px;
  }
`;

const Layout = ({ children }) => {
  useEffect(() => {
    // Add viewport meta tag for mobile responsiveness
    const meta = document.createElement('meta');
    meta.name = 'viewport';
    meta.content = 'width=device-width, initial-scale=1, maximum-scale=1';
    document.head.appendChild(meta);
  }, []);

  return (
    <LayoutWrapper>
      <Head>
        <title>Golden Trader - Beauty & Skincare</title>
        <meta name="description" content="Shop the best beauty and skincare products" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <Main>{children}</Main>
      <Footer />
    </LayoutWrapper>
  );
};

export default Layout; 