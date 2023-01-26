import * as Styled from "@/components/ShopHeader/ShopHeader.styled.js";

import { SmallCart } from "@/components/Icons";

export default function ShopHeader({ cartTotal }) {
  return (
    <Styled.ShopHeader>
      <Styled.ShopH1>Shop Name</Styled.ShopH1>
      <Styled.CartParagraph>
        <SmallCart />
        {cartTotal}
      </Styled.CartParagraph>
    </Styled.ShopHeader>
  );
}
