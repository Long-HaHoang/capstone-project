// Import external resources
import styled from "styled-components";

// Import internal resources
import Link from "next/link";
import CartItemCard from "@/components/CartItemCard";

// Import helper functions
import { formatNumberToDeCurrency } from "@/helpers/formatNumberToCurrency";

export default function ShoppingCartPage({ cartItems }) {
  const sumUpArray = (accumulator, currentValue) => accumulator + currentValue;

  const sumOfAllItemPrices = cartItems
    .map((item) => item.price * item.amount)
    .reduce(sumUpArray, 0);

  const sumOfAllItemAmount = cartItems
    .map((item) => item.amount)
    .reduce(sumUpArray, 0);

  return (
    <StyledMainContent>
      <StyledTopInfoSection>
        <Link href={"/"}>back</Link>
        <h2>Shopping Cart</h2>
        <p>Items: {sumOfAllItemAmount}</p>
        <p>Cartvalue: {formatNumberToDeCurrency(sumOfAllItemPrices)}</p>
      </StyledTopInfoSection>

      <StyledCartItemList>
        {cartItems.length === 0 ? (
          <li>No items added</li>
        ) : (
          cartItems.map((eachItem) => {
            return (
              <li key={eachItem.id}>
                <CartItemCard cartItem={eachItem} />
              </li>
            );
          })
        )}
      </StyledCartItemList>
    </StyledMainContent>
  );
}

const StyledMainContent = styled.main`
  margin-top: 60px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const StyledCartItemList = styled.ul`
  display: flex;
  flex-direction: column;

  list-style: none;
  gap: 10px;
  margin: 0;
  padding: 0;
`;

const StyledTopInfoSection = styled.section`
  border: solid black;
`;
