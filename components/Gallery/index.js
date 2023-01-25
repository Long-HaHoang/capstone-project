//Import external resources
import styled from "styled-components";

//Import internal resources
import products from "@/products.json";
import ItemCard from "../ItemCard";

// Import styles
import * as Styled from "@/components/Gallery/Gallery.styles.js";

export default function Gallery({ handleCartTotal }) {
  return (
    <Styled.GallerySection>
      <Styled.GalleryList>
        {products.map((product) => {
          return (
            <ItemCard
              key={product.id}
              product={product}
              handleCartTotal={handleCartTotal}
            />
          );
        })}
      </Styled.GalleryList>
    </Styled.GallerySection>
  );
}
