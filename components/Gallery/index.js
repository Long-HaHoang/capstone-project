// Import external resources
import styled from "styled-components";
import useSWR from "swr";

// Import internal resources
import ItemCard from "../ItemCard";

// Import styled components
import LoadingCube from "../LoadingCube";

export default function Gallery({ onCartItem }) {
  const { data: products, isLoading, error } = useSWR("/api/products");

  if (error) {
    return <h2>{error.message}</h2>;
  }

  return (
    <GallerySection>
      <GalleryList>
        {isLoading ? (
          <>
            <LoadingCube />
          </>
        ) : (
          products.map((product) => {
            return <ItemCard key={product.id} product={product} />;
          })
        )}
      </GalleryList>
    </GallerySection>
  );
}

const GallerySection = styled.section`
  display: flex;
  flex-direction: column;
  place-items: center;
`;

const GalleryList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  gap: 10px;
  margin: 0;
  padding: 0;
`;
