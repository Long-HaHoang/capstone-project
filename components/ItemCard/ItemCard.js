// Import external resources and hooks
import styled from "styled-components";
import { useState } from "react";

// Import of styled components
import * as Styled from "@/components/ItemCard/ItemCard.styled.js";

// Import of SVG Icon Components
import * as Icon from "@/components/Icons";

export function ItemCard({ product, handleCartTotal }) {
  const [counter, setCounter] = useState(0);

  function increaseCounter(oldCounter) {
    const newCounter = oldCounter === 99 ? oldCounter : oldCounter + 1;
    setCounter(newCounter);
  }

  function decreaseCounter(oldCounter) {
    const newCounter = oldCounter === 0 ? oldCounter : oldCounter - 1;
    setCounter(newCounter);
  }

  function addToCart() {
    if (counter > 0) {
      handleCartTotal(counter);
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
          <div>
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
              <button type="button" onClick={() => addToCart}>
                <Icon.SmallCart />
              </button>
            </span>
          </div>
        </span>
      </Styled.ArticleCard>
    </li>
  );
}
