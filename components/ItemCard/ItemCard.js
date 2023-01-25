// Import external resources and hooks
import styled from "styled-components";
import { useState } from "react";

// Import of styled components
import * as Styled from "@/components/ItemCard/ItemCard.styled.js";

// Import of SVG Icon Components
import * as Icon from "@/components/Icons";

export function ItemCard({ product }) {
  const [counter, setCounter] = useState("");

  function increaseCounter() {
    console.log("You clicked increasedCounter");
    const newCounter = counter === 99 ? Number(counter) : Number(counter) + 1;
    setCounter(newCounter);
  }

  function decreaseCounter() {
    console.log("You clicked decreasedCounter");
    const newCounter =
      counter === 0 || counter === "" ? counter : Number(counter) - 1;
    setCounter(newCounter);
  }

  function onChange(event) {
    const validDigit = new RegExp("^[0-9]{0,1}");
    if (event.target.value.length <= 2) {
      setCounter(event.target.value);
    } else {
      setCounter("");
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
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
              <button type="button" onClick={() => decreaseCounter()}>
                <Icon.SmallMinus />
              </button>
              <input
                type="number"
                min="0"
                max="99"
                maxLength="2"
                placeholder="0"
                value={counter}
                onChange={onChange}
              ></input>
              <button type="button" onClick={() => increaseCounter()}>
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
