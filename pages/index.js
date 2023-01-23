import styled from "styled-components";

import ShopHeader from "@/components/ShopHeader";
import Gallery from "@/components/Gallery";

export default function HomePage() {
  return (
    <AppContainer>
      <ShopHeader />
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
