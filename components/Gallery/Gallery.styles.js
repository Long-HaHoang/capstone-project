import styled from "styled-components";
import Image from "next/image";

const GallerySection = styled.section`
  display: flex;
  flex-direction: column;
  place-items: center;
  margin-top: 20px;
`;

const GalleryList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  gap: 10px;
  margin: 0;
  padding: 0;
`;

const Card = styled.li`
  width: 95%;
  height: 25%;
  border-radius: 16px;
  background-color: lightgray;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  place-items: center;
  padding: 10px;
  gap: 10px;
`;

const ItemInformation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ItemName = styled.h2`
  font-size: 16px;
  font-weight: bold;
  text-align: center;
`;

const ItemPrice = styled.h3`
  font-size: 14px;
  font-weight: 500;
`;

const StyedThumbnail = styled(Image)`
  border-radius: 8px;
  object-fit: cover;
`;

export {
  GallerySection,
  GalleryList,
  Card,
  ItemInformation,
  ItemName,
  ItemPrice,
  StyedThumbnail,
};
