// Import external resources
import styled from "styled-components";

// Import internal resources
import useStore from "@/hooks/useStore";
import useWindowDimensions from "@/hooks/useWindowsDimension";

// Import components
import ShopHeader from "../ShopHeader";

export default function Layout({ children }) {
  const size = useWindowDimensions();

  return (
    <StyledAppContainer height={size.height} width={size.width}>
      <ShopHeader />
      {size.width > 1440 && <StyledAsideLeft></StyledAsideLeft>}
      <StyledMainContent height={size.height}>{children}</StyledMainContent>
      {size.width > 1440 && <StyledAsideRight></StyledAsideRight>}
      <StyledFooter>
        <StyledCopy>&copy; 2023 by long ha hoang</StyledCopy>
      </StyledFooter>
    </StyledAppContainer>
  );
}

// Styled componentsd
const StyledAppContainer = styled.div`
  clear: both;

  height: 100%;
  width: ${(props) => `${props.width}px`};
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 60px 1fr 60px;
  grid-template-areas:
    "Header"
    "Main"
    "Footer";

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 6fr 1fr;
    grid-template-areas:
      "Header Header Header"
      "AsideLeft Main AsideRight"
      "Footer Footer Footer";
  }
`;

const StyledMainContent = styled.main`
  position: relative;

  grid-area: Main;
  height: 100%;
  min-height: ${(props) => `${props.height - 120}px`};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
`;

const StyledAsideLeft = styled.aside`
  grid-area: AsideLeft;
`;

const StyledAsideRight = styled.aside`
  grid-area: AsideRight;
`;

const StyledFooter = styled.footer`
  height: 60px;
  grid-area: Footer;
  background-color: #1a1a1a;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const StyledCopy = styled.p`
  color: var(--primary-color);
  text-align: center;
  font-size: 1rem;
`;
