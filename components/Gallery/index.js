// Import external resources
import styled from "styled-components";
import useSWR from "swr";

// Import internal resources
import ItemCard from "../ItemCard";

// Import styles
import * as Styled from "@/components/Gallery/Gallery.styles.js";

export default function Gallery({ onHandleCartTotal, onHandleCartItem }) {
  const { data: products, isLoading, error } = useSWR("/api/products");

  if (error) {
    return <h2>{error.message}</h2>;
  }

  return (
    <Styled.GallerySection>
      <Styled.GalleryList>
        {isLoading ? (
          <p>Is Loading...</p>
        ) : (
          products.map((product) => {
            return (
              <ItemCard
                key={product.id}
                product={product}
                onHandleCartTotal={onHandleCartTotal}
                onHandleCartItem={onHandleCartItem}
              />
            );
          })
        )}
      </Styled.GalleryList>
    </Styled.GallerySection>
  );
}
