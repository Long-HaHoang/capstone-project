// Import external resources
import styled from "styled-components";

// Import internal resources
import Link from "next/link";
import CartItemCard from "@/components/CartItemCard";

// Import helper functions
import { formatNumberToDeCurrency } from "@/helpers/formatNumberToCurrency";

// Import styled components
import * as Styled from "@/components/ShoppingCart.styled.js";

export default function ShoppingCartPage({ cartItems }) {
  console.log(cartItems);

  const sumUpArray = (accumulator, currentValue) => accumulator + currentValue;

  const sumOfAllItemPrices = cartItems
    .map((item) => item.price * item.amount)
    .reduce(sumUpArray, 0);

  const sumOfAllItemAmount = cartItems
    .map((item) => item.amount)
    .reduce(sumUpArray, 0);

  return (
    <Styled.AppContainer>
      <Styled.MainContent>
        <Styled.TopInfoSection>
          <Link href={"/"}>back</Link>
          <h2>Shopping Cart</h2>
          <p>{`Items: ${sumOfAllItemAmount}`}</p>
          <p>{`Cartvalue: ${formatNumberToDeCurrency(sumOfAllItemPrices)}`}</p>
        </Styled.TopInfoSection>
        <section>
          <Styled.CartItemList>
            {cartItems.length === 0 ? (
              <li>No item added</li>
            ) : (
              cartItems.map((eachItem) => {
                return <CartItemCard key={eachItem.id} eachItem={eachItem} />;
              })
            )}
          </Styled.CartItemList>
        </section>
      </Styled.MainContent>
      <footer>
        <p>&copy; 2023 by long ha hoang</p>
      </footer>
    </Styled.AppContainer>
  );
}
