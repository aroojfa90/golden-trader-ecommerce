import styled from 'styled-components';

const ContactBarContainer = styled.div`
  background: #1a1a1a;
  color: white;
  padding: 0.5rem 0;
  font-size: 0.875rem;
`;

const ContactInfo = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
`;

const ContactBar = () => {
  return (
    <ContactBarContainer>
      <ContactInfo>
        <span>Customer Service: +923480400614</span>
        <span>info@goldentrader.pk</span>
      </ContactInfo>
    </ContactBarContainer>
  );
};

export default ContactBar; 