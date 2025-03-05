import Head from "next/head";
import Navbar from "../components/Navbar";
import styled from "styled-components";

export default function Home() {
  return (
    <>
      <Head>
        <title>Beauty Store | Home</title>
      </Head>
      <Navbar />
      <Container>
        <h1>Welcome to the Beauty Store</h1>
        <Description>Shop the best cosmetics, eyelashes, and nail extensions.</Description>
      </Container>
    </>
  );
}

const Container = styled.div`
  text-align: center;
  padding: 50px;
  background: #ffe4e1;
  min-height: calc(100vh - 70px);
`;

const Description = styled.p`
  font-size: 1.2rem;
  margin-top: 20px;
`;
