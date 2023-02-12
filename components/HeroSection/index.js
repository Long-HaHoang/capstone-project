// Import external resources
import styled from "styled-components";
import useSWR from "swr";

// Import internal resources
import Link from "next/link";
import Image from "next/image";
import LoadingCube from "../LoadingCube";
import { StyledImage } from "../StyledImage";

export default function HeroSection() {
  const id = "e7628694-2371-4dbe-a5da-859e21dca690";
  const { data: product, isLoading, error } = useSWR(`/api/products/${id}`);

  if (isLoading) return <h2>Loading...</h2>;
  if (error) {
    return <h2>The Hero Is Down</h2>;
  }
  return (
    <>
      <HeroWrapper>
        <HeroLink href={`/Details/${id}`} aria-label="Hero Link">
          <HeroLeftSide>
            <p>{product.title}</p>
            <p>Lorem Ipsum</p>
            <HeroFakebutton>Discover</HeroFakebutton>
          </HeroLeftSide>

          <HeroRightSide>
            <HeroImage
              src={product.images[1]}
              alt={product.title}
              fill
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
            />
          </HeroRightSide>
        </HeroLink>
      </HeroWrapper>
    </>
  );
}

const HeroWrapper = styled.div`
  height: 25vh;
  width: 100vw;
  margin-top: -20px;
  background-color: white;
  border-bottom: solid lightgray;
  @media (min-width: 500px) {
    height: 40vh;
  }
`;

const HeroLink = styled(Link)`
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: inherit;
  text-decoration: none;
`;

const HeroRightSide = styled.div`
  position: relative;
  height: 100%;
  width: 50%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const HeroLeftSide = styled(HeroRightSide)`
  padding: 20px;
  margin: 0;
`;

const HeroFakebutton = styled.div`
  height: 50px;
  width: 90px;
  background-color: lightgray;
  border-radius: 5px;

  padding: 3px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const HeroImage = styled(StyledImage)`
  padding: 10px;
  object-fit: cover;
`;
