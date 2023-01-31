// Import of external resources
import styled from "styled-components";

// Import of internal resources
import Image from "next/image";

//temporary style
export const ArticleCard = styled.article`
  border: solid black;
  border-radius: 16px;

  width: 90vw;

  display: grid;
  grid-template-columns: 50% 50%;
  place-items: center;
`;

export const Thumbnail = styled(Image)`
  border-radius: 8px;
  object-fit: cover;
`;
