// Import external resources
import styled from "styled-components";

// Import internal resources
import Link from "next/link";

export default function HeroSection() {
  return (
    <Link href={`/Details/${id}`}>
      <HeroContainer></HeroContainer>
    </Link>
  );
}

const HeroContainer = styled.div`
  width: 100%;
  height: 20%;
  background-color: red;
`;
