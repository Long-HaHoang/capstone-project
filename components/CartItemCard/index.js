// Import internal resources
import { formatNumberToDeCurrency } from "@/helpers/formatNumberToCurrency";
import Link from "next/link";
import useStore from "@/hooks/useStore";
// Import styled components
import * as Styled from "@/components/CartItemCard/CartItemCard.styled.js";

export default function CartItemCard({ cartItem }) {
  const [removeCartItem] = useStore((state) => [state.removeCartItem]);
  return (
    <Styled.CartItemArticle>
      <Styled.CartItemLeft>
        <Link href={`/Details/${cartItem.id}`}>
          <Styled.Thumbnail
            src={cartItem.thumbnail}
            alt={
              cartItem.thumbnail ? "Thumbnail of item" : "no image available"
            }
            width={80}
            height={80}
          />
        </Link>

        <Styled.CartItemParagraph>
          {formatNumberToDeCurrency(cartItem.price)}
        </Styled.CartItemParagraph>
      </Styled.CartItemLeft>
      <Styled.CartItemRight>
        <Styled.ShoppingCartLink href={`/Details/${cartItem.id}`}>
          <Styled.CartItemParagraph>{cartItem.title}</Styled.CartItemParagraph>
        </Styled.ShoppingCartLink>
        <Styled.CartItemParagraph>
          Amount: {cartItem.amount}
        </Styled.CartItemParagraph>
        <Styled.CartItemDeleteButton
          type="button"
          onClick={() => removeCartItem(cartItem.id)}
        >
          Delete
        </Styled.CartItemDeleteButton>
      </Styled.CartItemRight>
    </Styled.CartItemArticle>
  );
}
