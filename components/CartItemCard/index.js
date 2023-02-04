// Import internal resources
import { formatNumberToDeCurrency } from "@/helpers/formatNumberToCurrency";
// Import styled components
import * as Styled from "@/components/CartItemCard/CartItemCard.styled.js";

export default function CartItemCard({ cartItem, onDeleteItem }) {
  return (
    <Styled.CartItemArticle>
      <Styled.CartItemLeft>
        <Styled.Thumbnail
          src={cartItem.thumbnail}
          alt={cartItem.thumbnail ? "Thumbnail of item" : "no image available"}
          width={100}
          height={100}
        />
        <Styled.CartItemParagraph>
          {formatNumberToDeCurrency(cartItem.price)}
        </Styled.CartItemParagraph>
      </Styled.CartItemLeft>
      <Styled.CartItemRight>
        <Styled.CartItemParagraph>{cartItem.title}</Styled.CartItemParagraph>
        <Styled.CartItemParagraph>{`Amount: ${cartItem.amount}`}</Styled.CartItemParagraph>
        <button type="button" onClick={() => onDeleteItem(cartItem.id)}>
          Delete
        </button>
      </Styled.CartItemRight>
    </Styled.CartItemArticle>
  );
}
