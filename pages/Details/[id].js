// Import external resources
import useSWR from "swr";
import styled from "styled-components";

// Import internal resources
import { useRouter } from "next/router";
import { useState } from "react";
import LoadingCube from "@/components/LoadingCube";
import { StyledImage } from "@/components/StyledImage";
import * as Icon from "@/components/Icons";
import { formatNumberToDeCurrency } from "@/helpers/formatNumberToCurrency";

export default function DetailsPage({ onCartItem }) {
  const router = useRouter();
  const { isReady } = router;
  const { id } = router.query;
  const [counter, setCounter] = useState(0);

  const { data: product, isLoading, error } = useSWR(`/api/products/${id}`);

  if (!isReady || isLoading || error) return <LoadingCube />;

  function increaseCounter() {
    const newCounter = counter === 99 ? counter : counter + 1;
    setCounter(newCounter);
  }

  function decreaseCounter() {
    const newCounter = counter === 0 ? counter : counter - 1;
    setCounter(newCounter);
  }

  function addToCart() {
    if (counter > 0) {
      onCartItem({
        ...product,
        amount: counter,
      });

      setCounter(0);
    }
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

      <CounterContainer>
        <p>{formatNumberToDeCurrency(product.price)}</p>
        <CounterButton type="button" onClick={decreaseCounter}>
          <Icon.SmallMinus />
        </CounterButton>
        <p>{counter}</p>
        <CounterButton type="button" onClick={increaseCounter}>
          <Icon.SmallPlus />
        </CounterButton>

        <CartButton type="button" onClick={addToCart}>
          <Icon.SmallCart />
        </CartButton>
      </CounterContainer>
    </DetailsContainer>
  );
}

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 30vh;
`;

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  width: 100%;
  height: 31rem;
  margin: 0;

  h2,
  p {
    margin: 10px 0;
  }
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
