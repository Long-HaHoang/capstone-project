// Import external resources
import styled from "styled-components";

// Import internal resources
import Link from "next/link";
import useStore from "@/hooks/useStore";

// Import of SVG Icon Component
import SVGIcon from "../Icons";

export default function ShopHeader() {
  const [cartItems] = useStore((state) => [state.cartItems]);

  const sumUpArray = (accumulator, currentValue) => accumulator + currentValue;
  const cartTotalAmount = cartItems
    .map((item) => item.amount)
    .reduce(sumUpArray, 0);

  return (
    <StyledShopHeader>
      <StyledShopHeaderLink aria-label="Link to homepage" href={"/"}>
        <StyledShopH1>Shop Name</StyledShopH1>
      </StyledShopHeaderLink>

      <StyledShoppingCartLink aria-label="Checkout link" href={"/ShoppingCart"}>
        <SVGIcon variant="cart" width="25px" />
        {cartTotalAmount && (
          <StyledShoppingCartCounter>
            {cartTotalAmount}
          </StyledShoppingCartCounter>
        )}
      </StyledShoppingCartLink>
    </StyledShopHeader>
  );
}

// Styled components
const StyledShopHeader = styled.header`
  grid-area: Header;
  height: 60px;
  background-color: #1a1a1a;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const StyledShopH1 = styled.h1`
  width: 80%;
  color: var(--primary-color);
`;

const StyledShoppingCartLink = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: var(--primary-color);
  text-decoration: inherit;
`;

const StyledShopHeaderLink = styled(Link)`
  width: 100%;
  color: inherit;
  text-decoration: inherit;
`;

const StyledShoppingCartCounter = styled.span`
  font-size: 18px;
`;
