// Import external resources
import useSWR from "swr";
import styled from "styled-components";
import { useImmerReducer } from "use-immer";

// Import internal resources
import { useRouter } from "next/router";
import useStore from "@/hooks/useStore";
import LoadingCube from "@/components/LoadingCube";
import { StyledImage } from "@/components/StyledImage";
import SVGIcon from "@/components/Icons";
import { formatNumberToDeCurrency } from "@/helpers/formatNumberToCurrency";

export default function DetailsPage() {
  const router = useRouter();
  const { isReady } = router;
  const { id } = router.query;

  const initalState = { count: 0 };
  const [countState, dispatch] = useImmerReducer(reducer, initalState);

  const { data: product, isLoading, error } = useSWR(`/api/products/${id}`);
  const [cartItems, addToCart, updateCartItems] = useStore((state) => [
    state.cartItems,
    state.addToCart,
    state.updateCartItems,
  ]);

  if (!isReady || isLoading) return <LoadingCube />;
  if (error) {
    return <h2>Seems like this product is not avaiable!</h2>;
  }

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
    <DetailsContainer>
      <StyledBackButton type="button" onClick={() => router.back()}>
        <SVGIcon variant="arrowleft" width="25px" />
      </StyledBackButton>
      <h2>{product.title}</h2>
      <p>{product.category}</p>

      <StyledImageContainer>
        <StyledImage
          src={product.images[0]}
          alt={`${product.title} image`}
          priority
          fill
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        />
      </StyledImageContainer>

      <StyledDescriptionSection>
        <h3>Description</h3>
        <p>{product.description}</p>
      </StyledDescriptionSection>

      <CounterContainer>
        <StyledProductPrice>
          {formatNumberToDeCurrency(product.price)}
        </StyledProductPrice>
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
        <StyledCounterNumber>{countState.count}</StyledCounterNumber>
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

        <StyledCounterButton type="button" onClick={handleCartItem}>
          <SVGIcon variant="cart" width="25px" />
        </StyledCounterButton>
      </CounterContainer>
    </DetailsContainer>
  );
}

const DetailsContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 15px;
  padding: 10px;

  margin: 0;
`;

const StyledBackButton = styled.div`
  border: none;
  background-color: none;
  cursor: pointer;
`;

const StyledImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 12rem;
`;

const StyledDescriptionSection = styled.section`
  width: 80%;
  align-self: center;
`;

const StyledCounterButton = styled.button`
  min-width: 42px;
  min-height: 42px;
  border: none;
  border-radius: 5px;
  background-color: #2b2b2b;
  color: var(--primary-color);
  align-self: center;
  justify-self: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:active {
    transform: scale(0.9);
  }
`;

const StyledProductPrice = styled.p`
  font-size: 1.3rem;
`;

const StyledCounterNumber = styled.p`
  font-size: large;
  font-weight: 550;
`;

const CounterContainer = styled.div`
  align-self: center;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 15px;

  padding: 10px;

  width: 90%;
  height: 10%;
  box-shadow: rgba(99, 99, 99, 0.28) 0px 2px 8px 0px;
  border-radius: 8px;
`;
