// Import external resources and hooks
import styled from "styled-components";
import { useState } from "react";

// Import internal resources
import { formatNumberToDeCurrency } from "@/helpers/formatNumberToCurrency";

// Import of styled components
import * as Styled from "@/components/ItemCard/ItemCard.styled.js";

// Import of SVG Icon Components
import * as Icon from "@/components/Icons";

export default function ItemCard({ product, onCartItem }) {
  const [counter, setCounter] = useState(0);

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
        id: product.id,
        title: product.title,
        price: product.price,
        thumbnail: product.thumbnail,
        amount: counter,
      });

      setCounter(0);
    }
  }

  return (
    <li>
      <Styled.ArticleCard>
        <span>
          <Styled.Thumbnail
            src={product.thumbnail}
            alt="no img"
            width={120}
            height={150}
            priority
          />
        </span>
        <Styled.CardInformationWrapper>
          <Styled.ProductTitle>{product.title}</Styled.ProductTitle>
          <p>{formatNumberToDeCurrency(product.price)}</p>
          <Styled.CounterContainer>
            <Styled.CounterButton type="button" onClick={decreaseCounter}>
              <Icon.SmallMinus />
            </Styled.CounterButton>
            <p>{counter}</p>
            <Styled.CounterButton type="button" onClick={increaseCounter}>
              <Icon.SmallPlus />
            </Styled.CounterButton>

            <Styled.CartButton type="button" onClick={addToCart}>
              <Icon.SmallCart />
            </Styled.CartButton>
          </Styled.CounterContainer>
        </Styled.CardInformationWrapper>
      </Styled.ArticleCard>
    </li>
  );
}
