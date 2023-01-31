// Import of external resources
import styled from "styled-components";
// Import of internal resources
import Link from "next/link";
// Import of styled components
import * as Styled from "@/components/ShopFooter/ShopFooter.styled.js";
// Import of SVG Icons
import { SmallCart } from "../Icons";

export default function ShopFooter({ cartTotal }) {
  return (
    <Styled.ShopFooter>
      <Link href={"/"}>
        <SmallCart />
        <span>{cartTotal}</span>
      </Link>
    </Styled.ShopFooter>
  );
}

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
