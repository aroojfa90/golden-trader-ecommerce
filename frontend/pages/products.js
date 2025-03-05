import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import styled from "styled-components";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Replace with your deployed backend URL if not running locally
    axios.get("http://localhost:5000/api/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
    <>
      <Navbar />
      <PageTitle>Our Products</PageTitle>
      <ProductGrid>
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </ProductGrid>
    </>
  );
}

const PageTitle = styled.h1`
  text-align: center;
  margin-top: 20px;
`;

const ProductGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;
`;
