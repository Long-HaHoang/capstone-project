// Import internal resources
import { formatNumberToDeCurrency } from "@/helpers/formatNumberToCurrency";
// Import styled components
import * as Styled from "@/components/CartItemCard/CartItemCard.styled.js";

export default function CartItemCard({ eachItem }) {
  return (
    <li>
      <Styled.CartItemArticle>
        <Styled.Thumbnail
          src={eachItem.thumbnail}
          alt="no img avaible"
          width={100}
          height={100}
        />
        <p>{eachItem.title}</p>
        <p>{formatNumberToDeCurrency(eachItem.price)}</p>
        <p>{`Amount: ${eachItem.amount}`}</p>
      </Styled.CartItemArticle>
    </li>
  );
}
