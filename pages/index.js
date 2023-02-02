import styled from "styled-components";

import Gallery from "@/components/Gallery";

export default function HomePage({ onCartItem }) {
  return (
    <StyledMain>
      <Gallery onCartItem={onCartItem} />
    </StyledMain>
  );
}

const StyledMain = styled.main`
  position: relative;
  top: 45px;
  margin-bottom: 40px;
`;
