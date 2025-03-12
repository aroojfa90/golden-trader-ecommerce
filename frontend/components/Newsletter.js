import styled from "styled-components";
import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      // Here you would typically make an API call to your backend
      setStatus("Thank you for subscribing!");
      setEmail("");
    } else {
      setStatus("Please enter a valid email");
    }
  };

  return (
    <NewsletterSection>
      <NewsletterContainer>
        <NewsletterContent>
          <h2>Newsletter Sign Up</h2>
          <p>Receive our latest updates about our products and promotions.</p>
          
          <NewsletterForm onSubmit={handleSubmit}>
            <InputWrapper>
              <EmailInput
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <SubscribeButton type="submit">
                Subscribe
              </SubscribeButton>
            </InputWrapper>
            {status && <StatusMessage>{status}</StatusMessage>}
          </NewsletterForm>
        </NewsletterContent>
      </NewsletterContainer>
    </NewsletterSection>
  );
}

const NewsletterSection = styled.section`
  background: #fff5f8;
  padding: 4rem 0;
  margin: 2rem 0;
`;

const NewsletterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const NewsletterContent = styled.div`
  text-align: center;
  max-width: 600px;
  margin: 0 auto;

  h2 {
    font-size: 2rem;
    color: #333;
    margin-bottom: 1rem;
    font-family: 'Playfair Display', serif;
  }

  p {
    color: #666;
    margin-bottom: 2rem;
    line-height: 1.6;
  }
`;

const NewsletterForm = styled.form`
  width: 100%;
`;

const InputWrapper = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const EmailInput = styled.input`
  flex: 1;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  outline: none;

  &:focus {
    border-color: #ff69b4;
  }
`;

const SubscribeButton = styled.button`
  padding: 1rem 2rem;
  background: #ff69b4;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #ff5ba7;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const StatusMessage = styled.p`
  margin-top: 1rem;
  color: ${props => props.error ? '#ff0000' : '#4CAF50'};
  font-size: 0.9rem;
`; 