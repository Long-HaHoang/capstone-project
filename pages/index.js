import styled from "styled-components";

import Gallery from "@/components/Gallery";

export default function HomePage({ onHandleCartItem, handleCartTotal }) {
  return (
    <>
      <StyledMain>
        <Gallery
          onHandleCartTotal={handleCartTotal}
          onHandleCartItem={onHandleCartItem}
        />
      </StyledMain>
    </>
  );
}

const StyledMain = styled.main`
  position: relative;
  top: 45px;
  margin-bottom: 40px;
`;
