import styled from "styled-components";

import ShopHeader from "../ShopHeader";

export default function Layout({ children, cartTotal }) {
  return (
    <>
      <ShopHeader cartTotal={cartTotal} />
      <AppContainer>
        {children}
        <footer>
          <p>&copy; 2023 by long ha hoang</p>
        </footer>
      </AppContainer>
    </>
  );
}

const AppContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: solid green;
  padding: 0 10px;
  gap: 10;
`;
