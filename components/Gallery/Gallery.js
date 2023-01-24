//Import external resources
import styled from "styled-components";

//Import internal resources
import products from "@/products.json";
import ItemCard from "../ItemCard";

// Import styles
import {
  GallerySection,
  GalleryList,
} from "@/components/Gallery/Gallery.styles.js";

export function Gallery() {
  return (
    <GallerySection>
      <GalleryList>
        {products.map((product) => {
          return <ItemCard key={product.id} product={product} />;
        })}
      </GalleryList>
    </GallerySection>
  );
}
