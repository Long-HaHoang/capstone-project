// Import external resources
import styled from "styled-components";

// Import internal resources
import Link from "next/link";
import CartItemCard from "@/components/CartItemCard";

// Import styled components
import * as Styled from "@/components/ShoppingCart.styled.js";

// Import helper functions
import { formatNumberToDeCurrency } from "@/helpers/formatNumberToCurrency";

export default function ShoppingCartPage({ cartItems, onDeleteItem }) {
  const sumUpArray = (accumulator, currentValue) => accumulator + currentValue;

  const sumOfAllItemPrices = cartItems
    .map((item) => item.price * item.amount)
    .reduce(sumUpArray, 0);

  const sumOfAllItemAmount = cartItems
    .map((item) => item.amount)
    .reduce(sumUpArray, 0);

  return (
    <Styled.MainContent>
      <Styled.TopInfoSection>
        <Styled.CartBackLink href={"/"}>back</Styled.CartBackLink>
        <h2>Shopping Cart</h2>
        <Styled.CartContentMetric>
          <p>Items: {sumOfAllItemAmount}</p>
          <p>Cartvalue: {formatNumberToDeCurrency(sumOfAllItemPrices)}</p>
        </Styled.CartContentMetric>
      </Styled.TopInfoSection>
      <Styled.CartHR />
      <Styled.CartItemList>
        {cartItems.length === 0 ? (
          <li>No items added</li>
        ) : (
          cartItems.map((eachItem) => {
            return (
              <li key={eachItem.id}>
                <CartItemCard cartItem={eachItem} onDeleteItem={onDeleteItem} />
              </li>
            );
          })
        )}
      </Styled.CartItemList>
    </Styled.MainContent>
  );
}
