// Import external resources
import styled from "styled-components";
import useSWR from "swr";

// Import internal resources
import ItemCard from "../ItemCard";

// Import styled components
import LoadingCube from "../LoadingCube";

export default function Gallery() {
  const { data: products, isLoading, error } = useSWR("/api/products");

  if (error) {
    return <h2>{error.message}</h2>;
  }

  return (
    <StyledGallerySection>
      <StyledGalleryList>
        {isLoading ? (
          <>
            <LoadingCube />
          </>
        ) : (
          products.map((product) => {
            return (
              <StyledGalleryListItem key={product.id}>
                <ItemCard product={product} />
              </StyledGalleryListItem>
            );
          })
        )}
      </StyledGalleryList>
    </StyledGallerySection>
  );
}

const StyledGallerySection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  place-items: center;
`;

const StyledGalleryList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  gap: 10px;
  margin: 0;
  padding: 0;
`;

const StyledGalleryListItem = styled.li`
  width: 100%;
  padding: 10px;
`;
