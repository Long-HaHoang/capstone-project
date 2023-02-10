// Import external resources
import styled from "styled-components";

// Import internal resources
import Link from "next/link";
import useStore from "@/hooks/useStore";

// Import of SVG Icon Component
import { SmallCart } from "@/components/Icons";

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
        <SmallCart />
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
  color: inherit;
  text-decoration: inherit;
`;

const StyledShoppingCartCounter = styled.span`
  font-size: 18px;
`;
