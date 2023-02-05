// Import external resources
import Image from "next/image";
// Import internal resources
import styled from "styled-components";

const Thumbnail = styled(Image)`
  border-radius: 8px;
  object-fit: cover;
`;

const CartItemArticle = styled.article`
  border: solid lightgray;
  border-radius: 16px;
  width: 80vw;
  padding: 10px;

  display: grid;
  grid-template-columns: 50% 50%;
  place-items: center;
`;

const CartItemLeft = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

const CartItemRight = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
`;

const CartItemParagraph = styled.p`
  margin: 0;
  text-align: center;
`;

const CartItemDeleteButton = styled.button`
  align-self: flex-end;
`;

export {
  Thumbnail,
  CartItemArticle,
  CartItemLeft,
  CartItemRight,
  CartItemParagraph,
  CartItemDeleteButton,
};
