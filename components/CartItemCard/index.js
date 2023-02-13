// Import internal resources
import { formatNumberToDeCurrency } from "@/helpers/formatNumberToCurrency";
import Link from "next/link";
import useStore from "@/hooks/useStore";
import styled from "styled-components";

export default function CartItemCard({ cartItem }) {
  const [removeCartItem] = useStore((state) => [state.removeCartItem]);
  return (
    <CartItemArticle>
      <CartItemLeft>
        <Link href={`/Details/${cartItem.id}`}>
          <Thumbnail
            src={cartItem.thumbnail}
            alt={
              cartItem.thumbnail ? "Thumbnail of item" : "no image available"
            }
            width={80}
            height={80}
          />
        </Link>

        <CartItemParagraph>
          {formatNumberToDeCurrency(cartItem.price)}
        </CartItemParagraph>
      </CartItemLeft>
      <CartItemRight>
        <ShoppingCartLink href={`/Details/${cartItem.id}`}>
          <CartItemParagraph>{cartItem.title}</CartItemParagraph>
        </ShoppingCartLink>
        <CartItemParagraph>Amount: {cartItem.amount}</CartItemParagraph>
        <CartItemDeleteButton
          type="button"
          onClick={() => removeCartItem(cartItem.id)}
        >
          Delete
        </CartItemDeleteButton>
      </CartItemRight>
    </CartItemArticle>
  );
}

export const Thumbnail = styled(Image)`
  border-radius: 8px;
  object-fit: cover;
`;

export const CartItemArticle = styled.article`
  border: solid lightgray;
  border-radius: 16px;
  width: 80vw;
  padding: 10px;

  display: grid;
  grid-template-columns: 50% 50%;
  place-items: center;
`;

export const CartItemLeft = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

export const CartItemRight = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
`;

export const CartItemParagraph = styled.p`
  margin: 0;
  text-align: center;
`;

export const CartItemDeleteButton = styled.button`
  align-self: flex-end;
`;

export const ShoppingCartLink = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: inherit;
  text-decoration: inherit;
`;
