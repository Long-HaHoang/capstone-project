import styled from "styled-components";

import Gallery from "@/components/Gallery/Gallery";

export default function HomePage() {
  return (
    <AppContainer>
      <ShopName>Shop Name</ShopName>
      <Gallery />
    </AppContainer>
  );
}

const AppContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border: solid green;
  padding: 0 10px;
`;

const ShopName = styled.h1`
  position: sticky;
  top: 0;
  left: 0;
  background-color: white;
  width: 100%;
  margin: 0;
`;
