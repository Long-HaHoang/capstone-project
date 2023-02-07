// Import external resources
import styled from "styled-components";
import useSWR from "swr";

// Import internal resources
import ItemCard from "../ItemCard";

// Import styled components
import * as Styled from "@/components/Gallery/Gallery.styles.js";
import LoadingCube from "../LoadingCube";

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
            <LoadingCube />
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
