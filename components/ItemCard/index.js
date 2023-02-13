// Import external resources and hooks
import styled from "styled-components";
import { useImmerReducer } from "use-immer";

// Import internal resources
import { formatNumberToDeCurrency } from "@/helpers/formatNumberToCurrency";
import Link from "next/link";
import useStore from "@/hooks/useStore";
import Image from "next/image";

// Import of SVG Icon Components
import SVGIcon from "../Icons";

export default function ItemCard({ product }) {
  const [cartItems, addToCart, updateCartItems] = useStore((state) => [
    state.cartItems,
    state.addToCart,
    state.updateCartItems,
  ]);

  const initalState = { count: 0 };
  const [countState, dispatch] = useImmerReducer(reducer, initalState);

  function reducer(draft, action) {
    switch (action.type) {
      case "reset":
        return initalState;
      case "increment":
        return void draft.count++;
      case "decrement":
        return void draft.count--;
    }
  }

  function handleCartItem() {
    const isItemAvaiable =
      cartItems.find((element) => element.id === product.id) !== undefined;

    if (isItemAvaiable) {
      const newCartItems = cartItems.map((element) => {
        if (element.id === product.id) {
          return {
            ...element,
            amount: element.amount + countState.count,
          };
        } else {
          return element;
        }
      });
      updateCartItems(newCartItems);
    } else {
      addToCart({ ...product, amount: countState.count });
    }
    dispatch({ type: "reset" });
  }

  return (
    <>
      <StyledArticleCard>
        <StyledImageContainer href={`/Details/${product.id}`}>
          <StyledThumbnail src={product.thumbnail} alt="no img" fill priority />
        </StyledImageContainer>
        <StyledCardInformationWrapper>
          <StyledProductHeaderLink href={`/Details/${product.id}`}>
            <StyledProductTitle>{product.title}</StyledProductTitle>
          </StyledProductHeaderLink>
          <p>{formatNumberToDeCurrency(product.price)}</p>
          <StyledCounterContainer>
            <StyledCounterButton
              type="button"
              onClick={() => {
                if (countState.count > 0) {
                  return dispatch({ type: "decrement" });
                }
              }}
            >
              <SVGIcon variant="minus" width="25px" />
            </StyledCounterButton>
            <p>{countState.count}</p>
            <StyledCounterButton
              type="button"
              onClick={() => {
                if (countState.count < 99) {
                  return dispatch({ type: "increment" });
                }
              }}
            >
              <SVGIcon variant="plus" width="25px" />
            </StyledCounterButton>

            <StyledCartButton type="button" onClick={handleCartItem}>
              <SVGIcon variant="cart" width="25px" />
            </StyledCartButton>
          </StyledCounterContainer>
        </StyledCardInformationWrapper>
      </StyledArticleCard>
    </>
  );
}

const StyledArticleCard = styled.article`
  border: solid lightgray;
  border-radius: 16px;
  height: 30vh;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(6, 1fr);
  grid-template-areas:
    "ProductImage ProductImage ProductImage ProductName ProductName ProductName"
    "ProductImage ProductImage ProductImage ProductName ProductName ProductName"
    "ProductImage ProductImage ProductImage ProductPrice ProductPrice ProductPrice"
    "ProductImage ProductImage ProductImage Counter Counter Counter"
    "ProductImage ProductImage ProductImage Cartbutton Cartbutton Cartbutton"
    "ProductImage ProductImage ProductImage . . .";
`;

const StyledImageContainer = styled(Link)`
  position: relative;
  grid-area: ProductImage;
  height: 100%;
  width: 100%;
`;

const StyledThumbnail = styled(Image)`
  object-fit: cover;
`;

const StyledCounterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 15px;

  width: 100%;
`;

const StyledCardInformationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

const StyledProductTitle = styled.h2`
  text-align: center;
`;

const StyledCounterButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  height: 28px;
  aspect-ratio: 1;
`;

const StyledCartButton = styled(StyledCounterButton)`
  height: 35px;
`;

const StyledProductHeaderLink = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: inherit;
  text-decoration: inherit;
`;
