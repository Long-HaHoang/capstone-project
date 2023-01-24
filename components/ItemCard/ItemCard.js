import {
  StyledListItem,
  StyledArticle,
  StyledDiv,
  StyledH2,
  StyledParagraph,
  StyledThumbnail,
  WrapperDiv,
  StyledForm,
  StyledInput,
  StyledButton,
  StyledSVG,
} from "@/components/ItemCard/ItemCard.styled.js";

export function ItemCard({ product }) {
  return (
    <StyledListItem>
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
          <WrapperDiv>
            <StyledForm>
              <StyledButton>
                <StyledSVG
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 12H6"
                  />
                </StyledSVG>
              </StyledButton>
              <StyledInput
                type={"number"}
                defaultValue={0}
                placeholder={0}
                min={"0"}
                max={"99"}
              />
              <StyledButton>
                <StyledSVG
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v12m6-6H6"
                  />
                </StyledSVG>
              </StyledButton>
              <StyledButton>
                <StyledSVG
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </StyledSVG>
              </StyledButton>
            </StyledForm>
          </WrapperDiv>
        </StyledDiv>
      </StyledArticle>
    </StyledListItem>
  );
}
