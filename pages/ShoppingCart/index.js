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

  // Shipping Cost will dynamic fetch from the DB
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
      {cartItems.length !== 0 ? (
        <Styled.SummarySection>
          <Styled.SummaryHeader>Summary</Styled.SummaryHeader>
          <Styled.SummaryCard>
            <Styled.SummaryParagraph>
              <span>
                {`${
                  sumOfAllItemAmount === 1 ? "Item" : "Items"
                } (${sumOfAllItemAmount})`}
              </span>
              <span>{formatNumberToDeCurrency(sumOfAllItemPrices)}</span>
            </Styled.SummaryParagraph>
            <Styled.SummaryParagraph>
              <span>Shipping cost: </span>
              <span>{formatNumberToDeCurrency(shippingCost)}</span>
            </Styled.SummaryParagraph>
            <hr />
            <Styled.SummaryParagraph>
              <span>Total price: </span>
              <span>
                {formatNumberToDeCurrency(sumOfAllItemPrices + shippingCost)}
              </span>
            </Styled.SummaryParagraph>
          </Styled.SummaryCard>
        </Styled.SummarySection>
      ) : null}
    </Styled.MainContent>
  );
}
