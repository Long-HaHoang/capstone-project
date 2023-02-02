// Import internal resources
import { formatNumberToDeCurrency } from "@/helpers/formatNumberToCurrency";
// Import styled components
import * as Styled from "@/components/CartItemCard/CartItemCard.styled.js";

export default function CartItemCard({ cartItem }) {
  return (
    <Styled.CartItemArticle>
      <Styled.Thumbnail
        src={cartItem.thumbnail}
        alt="no img avaible"
        width={100}
        height={100}
      />
      <p>{cartItem.title}</p>
      <p>{formatNumberToDeCurrency(cartItem.price)}</p>
      <p>{`Amount: ${cartItem.amount}`}</p>
    </Styled.CartItemArticle>
  );
}
