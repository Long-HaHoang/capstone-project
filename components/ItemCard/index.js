// Import external resources and hooks
import styled from "styled-components";
import { useImmerReducer } from "use-immer";

// Import internal resources
import { formatNumberToDeCurrency } from "@/helpers/formatNumberToCurrency";
import Link from "next/link";
import useStore from "@/hooks/useStore";
import Image from "next/image";

// Import of SVG Icon Components
import * as Icon from "@/components/Icons";

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
    <li>
      <StyledArticleCard>
        <Link href={`/Details/${product.id}`}>
          <StyledThumbnail
            src={product.thumbnail}
            alt="no img"
            width={120}
            height={150}
            priority
          />
        </Link>
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
              <Icon.SmallMinus />
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
              <Icon.SmallPlus />
            </StyledCounterButton>

            <StyledCartButton type="button" onClick={handleCartItem}>
              <Icon.SmallCart />
            </StyledCartButton>
          </StyledCounterContainer>
        </StyledCardInformationWrapper>
      </StyledArticleCard>
    </li>
  );
}

const StyledArticleCard = styled.article`
  border: solid lightgray;
  border-radius: 16px;

  height: fit-content;
  width: 97vw;

  display: grid;
  grid-template-columns: 50% 50%;
  place-items: center;
`;

const StyledThumbnail = styled(Image)`
  border: #d3d3d350 solid;
  border-radius: 8px;
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
