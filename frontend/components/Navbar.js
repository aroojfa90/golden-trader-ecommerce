import Link from "next/link";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Nav>
      <NavItem>
        <Link href="/">Home</Link>
      </NavItem>
      <NavItem>
        <Link href="/products">Products</Link>
      </NavItem>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 30px;
  padding: 15px;
  background: pink;
`;

const NavItem = styled.div`
  font-size: 1.2rem;
`;

export default Navbar;
