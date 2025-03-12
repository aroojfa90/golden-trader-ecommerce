import Layout from '../components/Layout';
import styled from 'styled-components';
import { useCart } from '../context/CartContext';
import Image from 'next/image';
import Link from 'next/link';

const CartPage = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const CartGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const CartItems = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const CartSummary = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  height: fit-content;
`;

const CartItem = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr auto;
  gap: 1rem;
  padding: 1rem 0;
  border-bottom: 1px solid #eee;
`;

const CheckoutButton = styled.button`
  width: 100%;
  padding: 1rem;
  background: #000;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9;
  }
`;

export default function Cart() {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const subtotal = cart.reduce((total, item) => total + (item.salePrice * item.quantity), 0);
  const shipping = subtotal > 0 ? 200 : 0;
  const total = subtotal + shipping;

  return (
    <Layout>
      <CartPage>
        <h1>Shopping Cart</h1>
        {cart.length === 0 ? (
          <div>
            <p>Your cart is empty</p>
            <Link href="/shop">
              <a>Continue Shopping</a>
            </Link>
          </div>
        ) : (
          <CartGrid>
            <CartItems>
              {cart.map((item) => (
                <CartItem key={item.id}>
                  <div style={{ position: 'relative', width: '100px', height: '100px' }}>
                    <Image
                      src={item.image}
                      alt={item.name}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div>
                    <h3>{item.name}</h3>
                    <p>Rs. {item.salePrice}</p>
                    <select
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                    >
                      {[1,2,3,4,5].map(num => (
                        <option key={num} value={num}>{num}</option>
                      ))}
                    </select>
                  </div>
                  <button onClick={() => removeFromCart(item.id)}>Remove</button>
                </CartItem>
              ))}
            </CartItems>
            <CartSummary>
              <h2>Order Summary</h2>
              <div>
                <p>Subtotal: Rs. {subtotal}</p>
                <p>Shipping: Rs. {shipping}</p>
                <h3>Total: Rs. {total}</h3>
              </div>
              <CheckoutButton>Proceed to Checkout</CheckoutButton>
            </CartSummary>
          </CartGrid>
        )}
      </CartPage>
    </Layout>
  );
} 