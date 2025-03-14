import styled from "styled-components";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useCart } from '../context/CartContext';
import { FiMenu, FiX, FiShoppingBag, FiSearch, FiUser } from 'react-icons/fi';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { cart } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <TopBar>
        <TopBarContent>
          <TopBarLeft>
            <PhoneNumber>
              <i className="fas fa-phone-alt"></i> +923466863552
            </PhoneNumber>
            <Email>
              <i className="fas fa-envelope"></i> info@beautycare.com
            </Email>
          </TopBarLeft>
          <TopBarRight>
            <SocialLinks>
              <SocialLink href="#"><i className="fab fa-facebook-f"></i></SocialLink>
              <SocialLink href="#"><i className="fab fa-instagram"></i></SocialLink>
              <SocialLink href="#"><i className="fab fa-pinterest-p"></i></SocialLink>
            </SocialLinks>
          </TopBarRight>
        </TopBarContent>
      </TopBar>

      <Nav $isScrolled={isScrolled}>
        <NavContainer>
          <MenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </MenuButton>
          
          <Logo>
            <Link href="/" passHref>
              <LogoText>BEAUTY & CARE</LogoText>
            </Link>
          </Logo>

          <NavLinks isOpen={isMenuOpen}>
            {[
              { name: "Makeup", href: "/makeup" },
              { name: "Spa", href: "/spa" },
              { name: "Nails", href: "/nails" },
              { name: "Perfume", href: "/perfume" },
              { name: "Skin Care", href: "/skincare" },
              { name: "Hair Care", href: "/haircare" }
            ].map((item) => (
              <NavItem key={item.href}>
                <Link href={item.href} passHref>
                  <NavLink onClick={() => setIsMenuOpen(false)}>{item.name}</NavLink>
                </Link>
              </NavItem>
            ))}
          </NavLinks>

          <NavRight>
            <IconButton aria-label="Search">
              <FiSearch />
            </IconButton>
            <CartButton aria-label="Cart">
              <FiShoppingBag />
              <CartCount>{cart.length}</CartCount>
            </CartButton>
            <IconButton aria-label="Account">
              <FiUser />
            </IconButton>
          </NavRight>
        </NavContainer>
      </Nav>
    </>
  );
};

export default Navigation;

const TopBar = styled.div`
  background: #222;
  color: white;
  padding: 8px 0;
  font-size: 0.9rem;
`;

const TopBarContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TopBarLeft = styled.div`
  display: flex;
  gap: 2rem;
`;

const PhoneNumber = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  i {
    color: #ff69b4;
  }
`;

const Email = styled(PhoneNumber)``;

const TopBarRight = styled.div``;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialLink = styled.a`
  color: white;
  transition: color 0.3s ease;

  &:hover {
    color: #ff69b4;
  }
`;

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const NavContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Logo = styled.h1`
  font-size: 1.8rem;
  color: #b8860b;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const LogoText = styled.a`
  font-family: 'Playfair Display', serif;
  font-size: 1.8rem;
  font-weight: 700;
  color: #333;
  cursor: pointer;
  text-decoration: none;
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  color: #333;

  @media (max-width: 768px) {
    display: block;
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    display: ${props => props.isOpen ? 'flex' : 'none'};
    position: fixed;
    top: 60px;
    left: 0;
    right: 0;
    background: white;
    flex-direction: column;
    padding: 2rem;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }
`;

const NavItem = styled.div``;

const NavLink = styled.a`
  color: #333;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;

  &:hover {
    color: #b8860b;
  }
`;

const NavRight = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
`;

const IconButton = styled.button`
  background: none;
  border: none;
  font-size: 1.25rem;
  cursor: pointer;
  color: #333;
  display: flex;
  align-items: center;
  padding: 0.5rem;

  &:hover {
    color: #b8860b;
  }
`;

const CartButton = styled(IconButton)`
  position: relative;
`;

const CartCount = styled.span`
  position: absolute;
  top: -8px;
  right: -8px;
  background: #ff69b4;
  color: white;
  font-size: 0.7rem;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;


