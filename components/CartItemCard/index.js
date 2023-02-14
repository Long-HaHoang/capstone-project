// Import internal resources
import { formatNumberToDeCurrency } from "@/helpers/formatNumberToCurrency";
import Link from "next/link";
import useStore from "@/hooks/useStore";
import styled from "styled-components";
import Image from "next/image";

export default function CartItemCard({ cartItem }) {
  const [removeCartItem] = useStore((state) => [state.removeCartItem]);
  return (
    <StyledCartItemArticle>
      <StyledCartItemLeft>
        <Link href={`/Details/${cartItem.id}`}>
          <StyledThumbnail
            src={cartItem.thumbnail}
            alt={
              cartItem.thumbnail ? "Thumbnail of item" : "no image available"
            }
            width={80}
            height={80}
          />
        </Link>

        <StyledCartItemParagraph>
          {formatNumberToDeCurrency(cartItem.price)}
        </StyledCartItemParagraph>
      </StyledCartItemLeft>
      <StyledCartItemRight>
        <StyledShoppingCartLink href={`/Details/${cartItem.id}`}>
          <StyledCartItemParagraph>{cartItem.title}</StyledCartItemParagraph>
        </StyledShoppingCartLink>
        <StyledCartItemParagraph>
          Amount: {cartItem.amount}
        </StyledCartItemParagraph>
        <StyledCartItemDeleteButton
          type="button"
          onClick={() => removeCartItem(cartItem.id)}
        >
          Delete
        </StyledCartItemDeleteButton>
      </StyledCartItemRight>
    </StyledCartItemArticle>
  );
}

const StyledThumbnail = styled(Image)`
  border-radius: 8px;
  object-fit: cover;
`;

const StyledCartItemArticle = styled.article`
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  border-radius: 16px;
  width: 80vw;
  padding: 10px;

  display: grid;
  grid-template-columns: 50% 50%;
  place-items: center;
`;

const StyledCartItemLeft = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

const StyledCartItemRight = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
`;

const StyledCartItemParagraph = styled.p`
  margin: 0;
  text-align: center;
`;

const StyledCartItemDeleteButton = styled.button`
  align-self: flex-end;
  cursor: pointer;
  border: 1px solid #f84a4a;
  font-size: 0.8rem;
  border-radius: 5px;
  color: #f84a4a;
  background-color: var(--primary-color);
  &:active {
    transform: scale(0.9);
  }
`;

const StyledShoppingCartLink = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: inherit;
  text-decoration: inherit;
`;
