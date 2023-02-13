// Import external resources
import styled from "styled-components";

// Import internal resources
import CartItemCard from "@/components/CartItemCard";
import useStore from "@/hooks/useStore";
import Link from "next/link";
import Image from "next/image";

// Import styled components
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
      <StyledTopInfoSection>
        <StyledCartBackLink href={"/"}>
          <Icon.SmallArrowLeft />
        </StyledCartBackLink>
        <StyledTopInfoSectionHeader>Shopping Cart</StyledTopInfoSectionHeader>
        <StyledCartContentMetric>
          <p>Items: {amountOfAllCartItems}</p>
          <p>Value: {formatNumberToDeCurrency(priceOfAllCartItems)}</p>
        </StyledCartContentMetric>
      </StyledTopInfoSection>
      <StyledCartItemList>
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
      </StyledCartItemList>
      {cartItems.length !== 0 && (
        <StyledSummarySection>
          <StyledSummaryHeader>Summary</StyledSummaryHeader>
          <StyledSummaryCard>
            <StyledSummaryParagraph>
              <span>
                {`${
                  amountOfAllCartItems === 1 ? "Item" : "Items"
                } (${amountOfAllCartItems})`}
              </span>
              <span>{formatNumberToDeCurrency(priceOfAllCartItems)}</span>
            </StyledSummaryParagraph>
            <StyledSummaryParagraph>
              <span>Shipping cost: </span>
              <span>{formatNumberToDeCurrency(shippingCost)}</span>
            </StyledSummaryParagraph>
            <hr />
            <StyledSummaryParagraph>
              <span>Total price: </span>
              <span>
                {formatNumberToDeCurrency(priceOfAllCartItems + shippingCost)}
              </span>
            </StyledSummaryParagraph>
          </StyledSummaryCard>
        </StyledSummarySection>
      )}
    </>
  );
}

const StyledCartItemList = styled.ul`
  display: flex;
  flex-direction: column;

  list-style: none;
  gap: 10px;
  margin: 0;
  padding: 0;
`;

const StyledTopInfoSection = styled.section`
  position: relative;
  border-bottom: solid lightgray;
  width: 100%;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledWrapperLinkHeader = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 10% 90%;
  place-items: center;
`;

const StyledCartBackLink = styled(Link)`
  position: absolute;
  bottom: 60px;
  width: fit-content;
  align-self: flex-start;
`;

const StyledTopInfoSectionHeader = styled.h2`
  width: fit-content;
  margin: 0;
`;

const StyledCartContentMetric = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

const StyledSummarySection = styled.div`
  position: relative;
  width: 100%;
  padding: 0 10px;
  border-top: solid lightgray;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledSummaryHeader = styled.h2`
  justify-self: flex-start;
  align-self: flex-start;
  color: darkgray;
  padding: 10px;
  margin: 0;
  font-size: 20px;
`;

const StyledSummaryCard = styled.div`
  width: 100%;
  padding: 10px;

  display: flex;
  flex-direction: column;

  hr {
    height: 3px;
    width: 100%;
    background-color: lightgray;
    border: none;
  }
`;

const StyledSummaryParagraph = styled.p`
  width: 80%;
  justify-self: center;
  align-self: center;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;
