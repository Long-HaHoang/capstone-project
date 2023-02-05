// Import external resources
import styled from "styled-components";

// Import internal resources
import CartItemCard from "@/components/CartItemCard";

// Import styled components
import * as Styled from "@/components/ShoppingCart.styled.js";
import * as Icon from "@/components/Icons";

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

  const shippingCost = 4.99;

  return (
    <Styled.MainContent>
      <Styled.TopInfoSection>
        <Styled.CartBackLink href={"/"}>
          <Icon.SmallArrowLeft />
        </Styled.CartBackLink>
        <Styled.TopInfoSectionHeader>Shopping Cart</Styled.TopInfoSectionHeader>
        <Styled.CartContentMetric>
          <p>Items: {sumOfAllItemAmount}</p>
          <p>Value: {formatNumberToDeCurrency(sumOfAllItemPrices)}</p>
        </Styled.CartContentMetric>
      </Styled.TopInfoSection>
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
      <Styled.SummerySection>
        <Styled.SummeryHeader>Summery</Styled.SummeryHeader>
        <Styled.SummeryCard>
          <Styled.SummeryParagraph>
            <span>Items: {sumOfAllItemAmount}</span>
            <span>{formatNumberToDeCurrency(sumOfAllItemPrices)}</span>
          </Styled.SummeryParagraph>
          <Styled.SummeryParagraph>
            <span>Shipping cost: </span>
            <span>{formatNumberToDeCurrency(shippingCost)}</span>
          </Styled.SummeryParagraph>
          <hr />
          <Styled.SummeryParagraph>
            <span>Total price: </span>
            <span>
              {formatNumberToDeCurrency(sumOfAllItemPrices + shippingCost)}
            </span>
          </Styled.SummeryParagraph>
        </Styled.SummeryCard>
      </Styled.SummerySection>
    </Styled.MainContent>
  );
}
