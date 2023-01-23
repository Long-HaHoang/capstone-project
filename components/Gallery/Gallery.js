import products from "@/products.json";

import {
  GallerySection,
  GalleryList,
  StyledListItem,
  StyledArticle,
  StyledDiv,
  StyledH2,
  StyledParagraph,
  StyledThumbnail,
} from "@/components/Gallery/Gallery.styles.js";

export function Gallery() {
  return (
    <GallerySection>
      <GalleryList>
        {products.map((product) => {
          return (
            <StyledListItem key={product.id}>
              <StyledArticle>
                <StyledThumbnail
                  src={product.thumbnail}
                  alt={product.title}
                  width={120}
                  height={152}
                />
                <StyledDiv>
                  <StyledH2>{product.title}</StyledH2>
                  <StyledParagraph>{product.price}€</StyledParagraph>
                </StyledDiv>
              </StyledArticle>
            </StyledListItem>
          );
        })}
      </GalleryList>
    </GallerySection>
  );
}
