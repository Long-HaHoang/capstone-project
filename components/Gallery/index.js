// Import external resources
import styled from "styled-components";
import useSWR from "swr";

// Import internal resources
import ItemCard from "../ItemCard";

// Import styles
import * as Styled from "@/components/Gallery/Gallery.styles.js";

export default function Gallery({ onCartItem }) {
  const { data: products, isLoading, error } = useSWR("/api/products");

  if (error) {
    return <h2>{error.message}</h2>;
  }

  return (
    <Styled.GallerySection>
      <Styled.GalleryList>
        {isLoading ? (
          <>
            <br />
            <Styled.LoadingCube />
            <br />
          </>
        ) : (
          products.map((product) => {
            return (
              <ItemCard
                key={product.id}
                product={product}
                onCartItem={onCartItem}
              />
            );
          })
        )}
      </Styled.GalleryList>
    </Styled.GallerySection>
  );
}
