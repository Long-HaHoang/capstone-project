import styled from "styled-components";
import { useState } from "react";

import ShopHeader from "@/components/ShopHeader";
import Gallery from "@/components/Gallery";

export default function HomePage({
  onHandleCartItem,
  cartTotal,
  handleCartTotal,
}) {
  return (
    <AppContainer>
      <StyledMain>
        <Gallery
          onHandleCartTotal={handleCartTotal}
          onHandleCartItem={onHandleCartItem}
        />
        <p>&copy; 2023 by long ha hoang</p>
      </StyledMain>
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
  position: relative;
  top: 45px;
`;
