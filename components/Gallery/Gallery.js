import products from "@/products.json";

import {
  GallerySection,
  GalleryList,
  Card,
  ItemInformation,
  ItemName,
  ItemPrice,
  StyedThumbnail,
} from "@/components/Gallery/Gallery.styles.js";

export function Gallery() {
  return (
    <GallerySection>
      <GalleryList>
        {products.map((product) => {
          return (
            <Card key={product.id}>
              <StyedThumbnail
                src={product.thumbnail}
                alt={product.title}
                width={120}
                height={152}
              />
              <ItemInformation>
                <ItemName>{product.title}</ItemName>
                <ItemPrice>{product.price}€</ItemPrice>
              </ItemInformation>
            </Card>
          );
        })}
      </GalleryList>
    </GallerySection>
  );
}
