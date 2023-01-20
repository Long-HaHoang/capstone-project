import styled from "styled-components";
import Image from "next/image";

import products from "@/products.json";

export default function HomePage() {
  return (
    <AppContainer>
      <ShopName>Shop Name</ShopName>
      <GallerySection>
        <GalleryList>
          {products.map((product) => {
            return (
              <Card key={product.id}>
                <StyedThumbnail
                  src={product.thumbnail}
                  alt={product.title}
                  width={120}
                  height={152}
                />
                <ItemInformation>
                  <ItemName>{product.title}</ItemName>
                  <ItemPrice>{product.price}€</ItemPrice>
                </ItemInformation>
              </Card>
            );
          })}
        </GalleryList>
      </GallerySection>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border: solid blue;
  height: auto;
  width: 375px;
  padding: 10px;
`;

const ShopName = styled.h1`
  position: absolute;
  top: 10px;
  left: 25px;
`;

const GallerySection = styled.section`
  display: flex;
  flex-direction: column;
  place-items: center;
  margin-top: 100px;
`;

const GalleryList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  list-style: none;
  gap: 10px;
  margin: 0;
  padding: 0;
`;

const Card = styled.li`
  width: 328px;
  height: 192px;
  border-radius: 16px;
  background-color: lightgray;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  place-items: center;
  padding: 10px;
  gap: 10px;
`;

const ItemInformation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ItemName = styled.h2`
  font-size: 16px;
  font-weight: bold;
  text-align: center;
`;

const ItemPrice = styled.h3`
  font-size: 14px;
  font-weight: 500;
`;

const StyedThumbnail = styled(Image)`
  border-radius: 8px;
  object-fit: cover;
`;
