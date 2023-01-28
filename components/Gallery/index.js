//Import external resources
import styled from "styled-components";
import useSWR from "swr";

//Import internal resources
// import products from "@/products.json";
import ItemCard from "../ItemCard";

// Import styles
import * as Styled from "@/components/Gallery/Gallery.styles.js";

export default function Gallery({ onhandleCartTotal }) {
  const { data: products, isLoading, error } = useSWR("@/pages/api/products");

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <Styled.GallerySection>
      {isLoading ? (
        <li>Is Loading...</li>
      ) : (
        <Styled.GalleryList>
          {products.map((product) => {
            return (
              <ItemCard
                key={product.id}
                product={product}
                onhandleCartTotal={onhandleCartTotal}
              />
            );
          })}
        </Styled.GalleryList>
      )}
    </Styled.GallerySection>
  );
}
