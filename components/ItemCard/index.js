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
          <StyledThumbnail
            src={product.thumbnail}
            alt="no img"
            fill
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
            priority
          />
        </StyledImageContainer>

        <StyledProductHeaderLink href={`/Details/${product.id}`}>
          <StyledProductTitle>{product.title}</StyledProductTitle>
        </StyledProductHeaderLink>
        <StyledProductPrice>
          {formatNumberToDeCurrency(product.price)}
        </StyledProductPrice>
        <StyledCounterContainer>
          <StyledCounterButton
            type="button"
            variant="Minus"
            onClick={() => {
              if (countState.count > 0) {
                return dispatch({ type: "decrement" });
              }
            }}
          >
            <SVGIcon variant="minus" width="25px" />
          </StyledCounterButton>
          <StyledCounterNumber>{countState.count}</StyledCounterNumber>
          <StyledCounterButton
            type="button"
            variant="Plus"
            onClick={() => {
              if (countState.count < 99) {
                return dispatch({ type: "increment" });
              }
            }}
          >
            <SVGIcon variant="plus" width="25px" />
          </StyledCounterButton>
        </StyledCounterContainer>
        <StyledCartButton
          type="button"
          variant="Cartbutton"
          onClick={handleCartItem}
        >
          <SVGIcon variant="cart" width="25px" />
        </StyledCartButton>
      </StyledArticleCard>
    </>
  );
}

const StyledArticleCard = styled.article`
  box-shadow: 12px 11px 29px -8px rgba(69, 69, 69, 0.39),
    -23px -18px 34px -28px rgba(45, 45, 45, 0.49);
  -webkit-box-shadow: 12px 11px 29px -8px rgba(69, 69, 69, 0.39),
    -23px -18px 34px -28px rgba(45, 45, 45, 0.49);
  -moz-box-shadow: 12px 11px 29px -8px rgba(69, 69, 69, 0.39),
    -23px -18px 34px -28px rgba(45, 45, 45, 0.49);
  border-radius: 16px;
  height: 30vh;
  padding: 10px;
  display: grid;
  grid-gap: 10px 10px;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(6, 1fr);
  grid-template-areas:
    "ProductImage ProductImage ProductImage ProductName ProductName ProductName"
    "ProductImage ProductImage ProductImage . . ."
    "ProductImage ProductImage ProductImage ProductPrice ProductPrice ProductPrice"
    "ProductImage ProductImage ProductImage Counter Counter Counter"
    "ProductImage ProductImage ProductImage Counter Counter Counter"
    "ProductImage ProductImage ProductImage Cartbutton Cartbutton Cartbutton";
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

const StyledProductHeaderLink = styled(Link)`
  grid-area: ProductName;
  align-self: stretch;
  justify-self: stretch;
  color: inherit;
  text-decoration: none;
`;

const StyledProductTitle = styled.h2`
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: 1.3rem;
  overflow: hidden;
  white-space: nowrap;
`;

const StyledProductPrice = styled.p`
  grid-area: ProductPrice;
  width: 100%;
  margin: 0;
  align-self: end;
  justify-self: center;
  text-align: center;
`;

const StyledCounterContainer = styled.div`
  width: 100%;
  display: grid;
  grid-area: Counter;
  align-self: center;
  justify-self: center;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas: "Minus CounterNumber Plus";
`;

const StyledCounterNumber = styled.p`
  grid-area: CounterNumber;
  align-self: center;
  justify-self: center;
`;

const StyledCounterButton = styled.button`
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 5px;
  background-color: #2b2b2b;
  color: var(--primary-color);
  grid-area: ${(props) => props.variant};
  align-self: center;
  justify-self: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const StyledCartButton = styled(StyledCounterButton)`
  width: 90%;
  height: 100%;
  border: none;
  border-radius: 16px;
`;
