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
    <section>
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
    </section>
  );
}

const StyledGalleryList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  list-style: none;
  gap: 10px;
  padding: 0;
`;

const StyledGalleryListItem = styled.li`
  width: clamp(15rem, 100%, 25rem);
  padding: 10px;
`;
