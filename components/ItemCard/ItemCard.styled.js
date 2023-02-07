// Import of external resources
import styled from "styled-components";

// Import of internal resources
import Image from "next/image";
import Link from "next/link";

//temporary style
export const ArticleCard = styled.article`
  border: solid lightgray;
  border-radius: 16px;

  height: fit-content;
  width: 97vw;

  display: grid;
  grid-template-columns: 50% 50%;
  place-items: center;
`;

export const Thumbnail = styled(Image)`
  border: #d3d3d350 solid;
  border-radius: 8px;
  object-fit: cover;
`;

export const CounterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 15px;

  width: 100%;
`;

export const CardInformationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export const ProductTitle = styled.h2`
  text-align: center;
`;

export const CounterButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  height: 28px;
  aspect-ratio: 1;
`;

export const CartButton = styled(CounterButton)`
  height: 35px;
`;

export const ProductHeaderLink = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: inherit;
  text-decoration: inherit;
`;
