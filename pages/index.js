import styled from "styled-components";
import { useState } from "react";

import ShopHeader from "@/components/ShopHeader";
import Gallery from "@/components/Gallery";
import ShopFooter from "@/components/ShopFooter";

export default function HomePage() {
  const [cartTotal, setCartTotal] = useState(0);

  function handleCartTotal(counter) {
    setCartTotal(cartTotal + counter);
  }

  return (
    <AppContainer>
      <ShopHeader />
      <StyledMain>
        <Gallery onhandleCartTotal={handleCartTotal} />
        <p>&copy; 2023 by long ha hoang</p>
      </StyledMain>
      <ShopFooter cartTotal={cartTotal} />
    </AppContainer>
  );
}

const AppContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border: solid green;
  padding: 0 10px;
`;

const StyledMain = styled.main`
  margin-bottom: 11%;
`;
