import styled from "styled-components";

import Gallery from "@/components/Gallery/Gallery";

export default function HomePage() {
  return (
    <AppContainer>
      <StyledHeader>
        <ShopName>Shop Name</ShopName>
      </StyledHeader>

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

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  background-color: white;
  width: 100%;
  padding: 10px;
  border-bottom: solid lightgray;
`;

const ShopName = styled.h1`
  margin: 0;
`;
