import Navigation from './Navigation';
import Footer from './Footer';
import styled from 'styled-components';
import Head from 'next/head';

const Main = styled.main`
  min-height: 100vh;
  padding-top: 80px; // Adjust this value based on your navbar height
`;

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Makeup City - Beauty & Skincare</title>
        <meta name="description" content="Shop the best beauty and skincare products" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default Layout; 