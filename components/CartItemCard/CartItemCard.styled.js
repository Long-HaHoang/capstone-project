// Import external resources
import Image from "next/image";
// Import internal resources
import styled from "styled-components";

const Thumbnail = styled(Image)`
  border-radius: 8px;
  object-fit: cover;
`;

const CartItemArticle = styled.article`
  border: solid;
`;

export { Thumbnail, CartItemArticle };
