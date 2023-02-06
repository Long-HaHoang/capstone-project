// Import external resources
import styled from "styled-components";

// Import internal resources
import Link from "next/link";

// Import of styled components
import * as Styled from "@/components/ShopHeader/ShopHeader.styled.js";

// Import of SVG Icon Component
import { SmallCart } from "@/components/Icons";

export default function ShopHeader({ cartTotal }) {
  return (
    <Styled.ShopHeader>
      <Styled.ShopH1>Shop Name</Styled.ShopH1>
      <Styled.ShoppingCartLink
        aria-label="Checkout link"
        href={"/ShoppingCart"}
      >
        <SmallCart />
        {cartTotal && (
          <Styled.ShoppingCartCounter>{cartTotal}</Styled.ShoppingCartCounter>
        )}
      </Styled.ShoppingCartLink>
    </Styled.ShopHeader>
  );
}
