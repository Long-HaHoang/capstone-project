// Import external resources
import styled from "styled-components";

// Import internal resources
import Link from "next/link";
import useStore from "@/hooks/useStore";
import { useRouter } from "next/router";

// Import of SVG Icon Component
import { SmallCart } from "@/components/Icons";

export default function ShopHeader() {
  const [cartItems, role] = useStore((state) => [state.cartItems, state.role]);
  const router = useRouter();
  const [resetSession, updateRole, updatePosition] = useStore((state) => [
    state.resetSession,
    state.updateRole,
    state.updatePosition,
  ]);
  const sumUpArray = (accumulator, currentValue) => accumulator + currentValue;
  const cartTotalAmount = cartItems
    .map((item) => item.amount)
    .reduce(sumUpArray, 0);

  function handleLogout() {
    updateRole("guest");
    updatePosition("Login");
    resetSession();
    router.push("/Login");
  }

  return (
    <StyledShopHeader>
      <StyledShopHeaderLink aria-label="Link to homepage" href={"/"}>
        <StyledShopH1>Shop Name</StyledShopH1>
      </StyledShopHeaderLink>

      {role === "buyer" && (
        <StyledShoppingCartLink
          aria-label="Checkout link"
          href={"/ShoppingCart"}
        >
          <SmallCart />
          {cartTotalAmount && (
            <StyledShoppingCartCounter>
              {cartTotalAmount}
            </StyledShoppingCartCounter>
          )}
        </StyledShoppingCartLink>
      )}
      <button type="button" onClick={handleLogout}>
        logout
      </button>
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
