// Import of external resources
import styled from "styled-components";

// Import of styled components
import * as Styled from "@/components/ItemCard/ItemCard.styled.js";

// Import of SVG Components
import * as Icon from "@/components/Icons";

export function ItemCard({ product }) {
  return (
    <li>
      <Styled.ArticleCard>
        <span>
          <Styled.Thumbnail
            src={product.images[product.images.length - 1]}
            alt="no img"
            width={120}
            height={150}
          />
        </span>
        <span>
          <h2>{product.title}</h2>
          <p>{product.price}€</p>
          <form>
            <span>
              <button>
                <Icon.SmallMinus />
              </button>
              <input
                type="number"
                min="0"
                max="99"
                maxLength="2"
                defaultValue={0}
                placeholder={0}
                onKeyDown={(e) => {
                  if (e.target.value.length >= 2) {
                    e.target.value = 0;
                  }
                }}
              ></input>
              <button>
                <Icon.SmallPlus />
              </button>
            </span>
            <span>
              <button>
                <Icon.SmallCart />
              </button>
            </span>
          </form>
        </span>
      </Styled.ArticleCard>
    </li>
  );
}
