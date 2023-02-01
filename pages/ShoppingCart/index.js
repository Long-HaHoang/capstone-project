// Import internal resources
import Link from "next/link";
import CartItemCard from "@/components/CartItemCard";

// Import styled components
import * as Styled from "@/pages/ShoppingCart/ShoppingCart.styled.js";

export default function ShoppingCartPage({ cartItems }) {
  console.log(cartItems);

  const sumPrices = (accumulator, currentValue) => accumulator + currentValue;

  const sumOfAllItems = cartItems
    .map((item) => item.price * item.amount)
    .reduce(sumPrices, 0);

  console.log(sumOfAllItems);

  return (
    <Styled.AppContainer>
      <Styled.MainContent>
        <section>
          <Link href={"/"}>back</Link>
          <h2>Shopping Cart</h2>
        </section>
        <section>
          <ul>
            {cartItems.length === 0 ? (
              <li>No item added</li>
            ) : (
              cartItems.map((eachItem) => {
                return <CartItemCard key={eachItem.id} eachItem={eachItem} />;
              })
            )}
          </ul>
        </section>
      </Styled.MainContent>
      <footer>
        <p>&copy; 2023 by long ha hoang</p>
      </footer>
    </Styled.AppContainer>
  );
}
