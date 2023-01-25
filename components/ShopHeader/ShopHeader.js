import {
  StyledHeader,
  StyledH1,
} from "@/components/ShopHeader/ShopHeader.styled";

import { SmallCart } from "@/components/Icons";

export function ShopHeader({ cartTotal }) {
  return (
    <StyledHeader>
      <StyledH1>Shop Name</StyledH1>
      <p>
        <SmallCart />
        <span>{cartTotal}</span>
      </p>
    </StyledHeader>
  );
}
