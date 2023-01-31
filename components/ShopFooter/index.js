// Import of styled components
import * as Styled from "@/components/ShopFooter/ShopFooter.styled.js";

// Import of SVG Icons
import { SmallCart } from "../Icons";

export default function ShopFooter({ cartTotal }) {
  return (
    <Styled.ShopFooter>
      <Styled.CartParagraph>
        <SmallCart />
        {cartTotal}
      </Styled.CartParagraph>
    </Styled.ShopFooter>
  );
}
