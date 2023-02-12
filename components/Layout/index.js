// Import external resources
import styled from "styled-components";

// Import internal resources
import useStore from "@/hooks/useStore";

// Import components
import ShopHeader from "../ShopHeader";

export default function Layout({ children }) {
  const [position] = useStore((state) => [state.position]);

  return (
    <>
      {position !== "Login" && <ShopHeader />}
      <StyledMainContent>{children}</StyledMainContent>
      {position !== "Login" && (
        <StyledFooter>
          <p>&copy; 2023 by long ha hoang</p>
        </StyledFooter>
      )}
      {position === "Login" && (
        <LoginFooter>
          <p>Another Footer</p>
          <p>&copy; 2023 by long ha hoang</p>
        </LoginFooter>
      )}
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
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #0c0c0c;
  color: #fcfcfc;
`;

const LoginFooter = styled(StyledFooter)`
  position: absolute;

  p {
    margin: 0;
  }
`;
