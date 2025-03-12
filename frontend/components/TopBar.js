import styled from "styled-components";

export default function TopBar() {
  return (
    <StyledTopBar>
      <div>Track your Order</div>
      <div>Customer Service</div>
      <div>Store Locator</div>
    </StyledTopBar>
  );
}

const StyledTopBar = styled.div`
  background: #f5f5f5;
  padding: 0.5rem 5%;
  display: flex;
  justify-content: flex-end;
  gap: 2rem;
  font-size: 0.9rem;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
`; 