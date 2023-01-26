import styled from "styled-components";

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

export { GallerySection, GalleryList };
