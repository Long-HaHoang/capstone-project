import styled from "styled-components";
import { useState } from "react";

import ShopHeader from "@/components/ShopHeader";
import Gallery from "@/components/Gallery";

export default function HomePage() {
  const [cartTotal, setCartTotal] = useState(0);

  function handleCartTotal(counter) {
    setCartTotal(cartTotal + counter);
  }

  return (
    <AppContainer>
      <ShopHeader cartTotal={cartTotal} />
      <main>
        <Gallery handleCartTotal={handleCartTotal} />
        <p>&copy; 2023 by long ha hoang</p>
      </main>
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
