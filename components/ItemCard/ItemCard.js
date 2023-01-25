// Import external resources and hooks
import styled from "styled-components";
import { useState } from "react";

// Import of styled components
import * as Styled from "@/components/ItemCard/ItemCard.styled.js";

// Import of SVG Icon Components
import * as Icon from "@/components/Icons";

export function ItemCard({ product, setCartTotal, cartTotal }) {
  const [counter, setCounter] = useState(0);

  function increaseCounter(oldCounter) {
    const newCounter = oldCounter === 99 ? oldCounter : oldCounter + 1;
    setCounter(newCounter);
  }

  function decreaseCounter(oldCounter) {
    const newCounter = oldCounter === 0 ? oldCounter : oldCounter - 1;
    setCounter(newCounter);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (counter > 0) {
      setCartTotal(cartTotal + counter);
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
          />
        </span>
        <span>
          <h2>{product.title}</h2>
          <p>{product.price}€</p>
          <form onSubmit={handleSubmit}>
            <span>
              <button type="button" onClick={() => decreaseCounter(counter)}>
                <Icon.SmallMinus />
              </button>
              <p>{counter}</p>
              <button type="button" onClick={() => increaseCounter(counter)}>
                <Icon.SmallPlus />
              </button>
            </span>
            <span>
              <button type="submit">
                <Icon.SmallCart />
              </button>
            </span>
          </form>
        </span>
      </Styled.ArticleCard>
    </li>
  );
}
