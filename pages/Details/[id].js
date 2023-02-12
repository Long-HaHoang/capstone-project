// Import external resources
import useSWR from "swr";
import styled from "styled-components";
import { useImmerReducer } from "use-immer";

// Import internal resources
import { useRouter } from "next/router";
import useStore from "@/hooks/useStore";
import LoadingCube from "@/components/LoadingCube";
import { StyledImage } from "@/components/StyledImage";
import * as Icon from "@/components/Icons";
import { formatNumberToDeCurrency } from "@/helpers/formatNumberToCurrency";

export default function DetailsPage() {
  const router = useRouter();
  const { isReady } = router;
  const { id } = router.query;

  const initalState = { count: 0 };
  const [countState, dispatch] = useImmerReducer(reducer, initalState);

  const { data: product, isLoading, error } = useSWR(`/api/products/${id}`);
  const [role, cartItems, addToCart, updateCartItems] = useStore((state) => [
    state.role,
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
      <button type="button" onClick={() => router.back()}>
        <Icon.SmallArrowLeft />
      </button>
      <h2>{product.title}</h2>
      <p>{product.category}</p>

      <ImageContainer>
        <StyledImage
          src={product.images[0]}
          alt={`${product.title} image`}
          priority
          fill
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        />
      </ImageContainer>

      <section>
        <h3>Description</h3>
        <p>{product.description}</p>
      </section>

      {role === "buyer" && (
        <CounterContainer>
          <p>{formatNumberToDeCurrency(product.price)}</p>
          <CounterButton
            type="button"
            onClick={() => {
              if (countState.count > 0) {
                return dispatch({ type: "decrement" });
              }
            }}
          >
            <Icon.SmallMinus />
          </CounterButton>
          <p>{countState.count}</p>
          <CounterButton
            type="button"
            onClick={() => {
              if (countState.count < 99) {
                return dispatch({ type: "increment" });
              }
            }}
          >
            <Icon.SmallPlus />
          </CounterButton>

          <CartButton type="button" onClick={handleCartItem}>
            <Icon.SmallCart />
          </CartButton>
        </CounterContainer>
      )}
    </DetailsContainer>
  );
}

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 30%;
`;

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 10px;
  width: 100%;
  height: 100vh;
  margin: 0;
`;

const CounterButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  height: 28px;
  aspect-ratio: 1;
`;

const CartButton = styled(CounterButton)`
  height: 35px;
`;

const CounterContainer = styled.div`
  align-self: center;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 15px;

  width: 80%;
  height: 50px;
  background-color: lightgray;
  border-radius: 8px;
`;
