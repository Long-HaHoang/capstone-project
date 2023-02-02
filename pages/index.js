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
    <>
      <StyledMain>
        <Gallery
          onHandleCartTotal={handleCartTotal}
          onHandleCartItem={onHandleCartItem}
        />
      </StyledMain>
    </>
  );
}

const StyledMain = styled.main`
  position: relative;
  top: 45px;
  margin-bottom: 40px;
`;
