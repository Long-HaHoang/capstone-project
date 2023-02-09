// Import external resources
import styled from "styled-components";

// Import internal resources
import Link from "next/link";

// Import of SVG Icon Component
import { SmallCart } from "@/components/Icons";

export default function ShopHeader({ cartTotal }) {
  return (
    <StyledShopHeader>
      <StyledShopHeaderLink href={"/"}>
        <StyledShopH1>Shop Name</StyledShopH1>
      </StyledShopHeaderLink>

      <StyledShoppingCartLink aria-label="Checkout link" href={"/ShoppingCart"}>
        <SmallCart />
        {cartTotal && (
          <StyledShoppingCartCounter>{cartTotal}</StyledShoppingCartCounter>
        )}
      </StyledShoppingCartLink>
    </StyledShopHeader>
  );
}

// Styled components
const StyledShopHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;

  width: 100%;
  height: 60px;
  padding: 10px 25px;

  background-color: var(--secondary-color);
  color: var(--primary-color);
  border-bottom: solid lightgray;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const StyledShopH1 = styled.h1`
  margin: 0;
  width: 80%;
`;

const StyledShoppingCartLink = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: inherit;
  text-decoration: inherit;
`;

const StyledShopHeaderLink = styled(Link)`
  width: 100%;
`;

const StyledShoppingCartCounter = styled.span`
  font-size: 18px;
`;
