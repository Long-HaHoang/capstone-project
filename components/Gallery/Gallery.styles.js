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

const StyledListItem = styled.li`
  width: 95%;
  height: 25%;
`;

const StyledArticle = styled.article`
  border-radius: 16px;
  background-color: lightgray;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  place-items: center;
  padding: 10px;
  gap: 10px;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledH2 = styled.h2`
  font-size: 16px;
  font-weight: bold;
  text-align: center;
`;

const StyledParagraph = styled.p`
  font-size: 14px;
  font-weight: 500;
`;

const StyledThumbnail = styled(Image)`
  border-radius: 8px;
  object-fit: cover;
`;

export {
  GallerySection,
  GalleryList,
  StyledListItem,
  StyledArticle,
  StyledDiv,
  StyledH2,
  StyledParagraph,
  StyledThumbnail,
};
