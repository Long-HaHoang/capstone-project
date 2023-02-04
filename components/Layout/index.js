import styled from "styled-components";

import ShopHeader from "../ShopHeader";

import * as Styled from "@/components/Layout/Layout.styled.js";

export default function Layout({ children, cartTotal }) {
  return (
    <>
      <ShopHeader cartTotal={cartTotal} />
      <br />
      <Styled.ContentContainer>{children}</Styled.ContentContainer>
      <br />
      <Styled.Footer>
        <p>&copy; 2023 by long ha hoang</p>
      </Styled.Footer>
    </>
  );
}
