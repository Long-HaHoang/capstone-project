import styled from "styled-components";

import Gallery from "@/components/Gallery";
import HeroSection from "@/components/HeroSection";

export default function HomePage() {
  return (
    <>
      <StyledSearchBar>
        <input type="text" placeholder="Search item..." />
      </StyledSearchBar>
      <HeroSection />
      <Gallery />
    </>
  );
}

const StyledSearchBar = styled.div`
  height: 60px;
  text-align: center;
  background-color: var(--secondary-color);
  color: var(--primary-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
