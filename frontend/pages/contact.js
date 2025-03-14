import Layout from '../components/Layout';
import styled from 'styled-components';

const ContactPage = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const ContactInfo = styled.div`
  margin-bottom: 2rem;
`;

const ContactForm = styled.form`
  display: grid;
  gap: 1rem;
  max-width: 600px;
`;

const ContactDetails = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  margin-bottom: 2rem;
`;

export default function Contact() {
  return (
    <Layout>
      <ContactPage>
        <h1>Contact Us</h1>
        <ContactDetails>
          <h2>Get in Touch</h2>
          <p>We're here to help! Contact us through any of these channels:</p>
          <ul>
            <li>Phone: +923480400614</li>
            <li>Email: info@goldentrader.pk</li>
            <li>Address: Mehran House, 756-C Tariq Rd, Karachi, Pakistan</li>
          </ul>
        </ContactDetails>
        {/* ... contact form ... */}
      </ContactPage>
    </Layout>
  );
} 