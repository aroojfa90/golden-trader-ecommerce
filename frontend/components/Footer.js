import styled from "styled-components";
import Link from "next/link";

const FooterContainer = styled.footer`
  background: #f5f5f5;
  padding: 4rem 2rem;
`;

const FooterGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const FooterSection = styled.div`
  h3 {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    font-weight: 600;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: 0.5rem;
  }

  a {
    color: #666;
    text-decoration: none;
    &:hover {
      color: #000;
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterGrid>
        <FooterSection>
          <h3>Shop</h3>
          <ul>
            <li><Link href="/makeup">Makeup</Link></li>
            <li><Link href="/skincare">Skincare</Link></li>
            <li><Link href="/haircare">Haircare</Link></li>
            <li><Link href="/perfumes">Perfumes</Link></li>
          </ul>
        </FooterSection>

        <FooterSection>
          <h3>Information</h3>
          <ul>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
            <li><Link href="/store-locator">Store Locator</Link></li>
            <li><Link href="/careers">Careers</Link></li>
          </ul>
        </FooterSection>

        <FooterSection>
          <h3>Customer Service</h3>
          <ul>
            <li><Link href="/shipping">Shipping Information</Link></li>
            <li><Link href="/returns">Returns & Exchanges</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
            <li><Link href="/track-order">Track Your Order</Link></li>
          </ul>
        </FooterSection>

        <FooterSection>
          <h3>Contact Us</h3>
          <p>Mehran House, 756-C Tariq Rd,</p>
          <p>Karachi, Pakistan</p>
          <p>Email: info@makeupcity.com</p>
          <p>Phone: (021) 111-222-333</p>
        </FooterSection>
      </FooterGrid>
    </FooterContainer>
  );
};

export default Footer; 