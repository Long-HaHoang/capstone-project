// Import external resources
import styled from "styled-components";

// Import internal resources
import useStore from "@/hooks/useStore";

// Import components
import ShopHeader from "../ShopHeader";

export default function Layout({ children }) {
  return (
    <>
      <ShopHeader />
      <StyledMainContent>{children}</StyledMainContent>
      <StyledFooter>
        <p>&copy; 2023 by long ha hoang</p>
      </StyledFooter>
    </>
  );
}

// Styled components
const StyledMainContent = styled.main`
  position: relative;
  margin-top: 60px;
  padding: 20px 0;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  @media (min-width: 997px) {
    margin-bottom: 60px;
  }
`;

const StyledFooter = styled.footer`
  position: relative;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #0c0c0c;
  color: #fcfcfc;

  @media (min-width: 997px) {
    position: fixed;
    width: 100%;
  }
`;
