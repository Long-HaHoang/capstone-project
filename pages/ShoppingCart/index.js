// Import external resources
import styled from "styled-components";

// Import internal resources
import CartItemCard from "@/components/CartItemCard";
import useStore from "@/hooks/useStore";

// Import styled components
import * as Styled from "@/components/ShoppingCart.styled.js";
import * as Icon from "@/components/Icons";

// Import helper functions
import { formatNumberToDeCurrency } from "@/helpers/formatNumberToCurrency";

export default function ShoppingCartPage() {
  const [cartItems] = useStore((state) => [state.cartItems]);

  const sumUpArray = (accumulator, currentValue) => accumulator + currentValue;
  const amountOfAllCartItems = cartItems
    .map((item) => item.amount)
    .reduce(sumUpArray, 0);

  const priceOfAllCartItems = cartItems
    .map((item) => item.price * item.amount)
    .reduce(sumUpArray, 0);

  // Shipping Cost will dynamic fetch from the DB
  const shippingCost = 4.99;

  return (
    <>
      <Styled.TopInfoSection>
        <Styled.CartBackLink href={"/"}>
          <Icon.SmallArrowLeft />
        </Styled.CartBackLink>
        <Styled.TopInfoSectionHeader>Shopping Cart</Styled.TopInfoSectionHeader>
        <Styled.CartContentMetric>
          <p>Items: {amountOfAllCartItems}</p>
          <p>Value: {formatNumberToDeCurrency(priceOfAllCartItems)}</p>
        </Styled.CartContentMetric>
      </Styled.TopInfoSection>
      <Styled.CartItemList>
        {cartItems.length === 0 ? (
          <li>No items added</li>
        ) : (
          cartItems.map((element) => {
            return (
              <li key={element.id}>
                <CartItemCard cartItem={element} />
              </li>
            );
          })
        )}
      </Styled.CartItemList>
      {cartItems.length !== 0 && (
        <Styled.SummarySection>
          <Styled.SummaryHeader>Summary</Styled.SummaryHeader>
          <Styled.SummaryCard>
            <Styled.SummaryParagraph>
              <span>
                {`${
                  amountOfAllCartItems === 1 ? "Item" : "Items"
                } (${amountOfAllCartItems})`}
              </span>
              <span>{formatNumberToDeCurrency(priceOfAllCartItems)}</span>
            </Styled.SummaryParagraph>
            <Styled.SummaryParagraph>
              <span>Shipping cost: </span>
              <span>{formatNumberToDeCurrency(shippingCost)}</span>
            </Styled.SummaryParagraph>
            <hr />
            <Styled.SummaryParagraph>
              <span>Total price: </span>
              <span>
                {formatNumberToDeCurrency(priceOfAllCartItems + shippingCost)}
              </span>
            </Styled.SummaryParagraph>
          </Styled.SummaryCard>
        </Styled.SummarySection>
      )}
    </>
  );
}
