import styled from "styled-components";

const ProductCard = ({ product }) => {
  return (
    <Card>
      <Image src={product.image} alt={product.name} />
      <Title>{product.name}</Title>
      <Price>${product.price.toFixed(2)}</Price>
    </Card>
  );
};

const Card = styled.div`
  background: white;
  padding: 15px;
  border-radius: 10px;
  text-align: center;
  width: 250px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
`;

const Title = styled.h2`
  font-size: 1.1rem;
  margin: 10px 0;
`;

const Price = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: #ff69b4;
`;

export default ProductCard;
