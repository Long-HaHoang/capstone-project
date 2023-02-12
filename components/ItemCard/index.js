// Import external resources and hooks
import styled from "styled-components";
import { useImmerReducer } from "use-immer";

// Import internal resources
import { formatNumberToDeCurrency } from "@/helpers/formatNumberToCurrency";
import Link from "next/link";
import useStore from "@/hooks/useStore";

// Import of styled components
import * as Styled from "@/components/ItemCard/ItemCard.styled.js";

// Import of SVG Icon Components
import * as Icon from "@/components/Icons";

export default function ItemCard({ product }) {
  const [role, cartItems, addToCart, updateCartItems] = useStore((state) => [
    state.role,
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
      <Styled.ArticleCard>
        <Link href={`/Details/${product.id}`}>
          <Styled.Thumbnail
            src={product.thumbnail}
            alt="no img"
            width={120}
            height={150}
            priority
          />
        </Link>
        <Styled.CardInformationWrapper>
          <Styled.ProductHeaderLink href={`/Details/${product.id}`}>
            <Styled.ProductTitle>{product.title}</Styled.ProductTitle>
          </Styled.ProductHeaderLink>
          <p>{formatNumberToDeCurrency(product.price)}</p>
          {role === "buyer" && (
            <Styled.CounterContainer>
              <Styled.CounterButton
                type="button"
                onClick={() => {
                  if (countState.count > 0) {
                    return dispatch({ type: "decrement" });
                  }
                }}
              >
                <Icon.SmallMinus />
              </Styled.CounterButton>
              <p>{countState.count}</p>
              <Styled.CounterButton
                type="button"
                onClick={() => {
                  if (countState.count < 99) {
                    return dispatch({ type: "increment" });
                  }
                }}
              >
                <Icon.SmallPlus />
              </Styled.CounterButton>

              <Styled.CartButton type="button" onClick={handleCartItem}>
                <Icon.SmallCart />
              </Styled.CartButton>
            </Styled.CounterContainer>
          )}
        </Styled.CardInformationWrapper>
      </Styled.ArticleCard>
    </li>
  );
}
