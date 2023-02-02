import styled from "styled-components";

import ShopHeader from "../ShopHeader";

import * as Styled from "@/components/Layout/Layout.styled.js";

export default function Layout({ children, cartTotal }) {
  return (
    <>
      <ShopHeader cartTotal={cartTotal} />
      <Styled.AppContainer>{children}</Styled.AppContainer>
      <footer>
        <p>&copy; 2023 by long ha hoang</p>
      </footer>
    </>
  );
}
