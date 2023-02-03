// Import internal resources
import { formatNumberToDeCurrency } from "@/helpers/formatNumberToCurrency";
// Import styled components
import * as Styled from "@/components/CartItemCard/CartItemCard.styled.js";

export default function CartItemCard({ cartItem, onDeleteItem }) {
  return (
    <Styled.CartItemArticle>
      <Styled.Thumbnail
        src={cartItem.thumbnail}
        alt={cartItem.thumbnail ? "Thumbnail of item" : "no image available"}
        width={100}
        height={100}
      />
      <p>{cartItem.title}</p>
      <p>{formatNumberToDeCurrency(cartItem.price)}</p>
      <p>{`Amount: ${cartItem.amount}`}</p>
      <button type="button" onClick={() => onDeleteItem(cartItem.id)}>
        Delete
      </button>
    </Styled.CartItemArticle>
  );
}
