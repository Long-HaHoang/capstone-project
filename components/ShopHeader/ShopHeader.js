import {
  StyledHeader,
  StyledH1,
} from "@/components/ShopHeader/ShopHeader.styled";

import * as Icon from "@/components/Icons";

export function ShopHeader({ cartTotal }) {
  return (
    <StyledHeader>
      <StyledH1>Shop Name</StyledH1>
      <p>
        <Icon.SmallCart />
        <span>{cartTotal}</span>
      </p>
    </StyledHeader>
  );
}
