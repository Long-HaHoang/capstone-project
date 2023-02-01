// Import external resources
import styled from "styled-components";
import ItemCard from "@/components/ItemCard";

// Import internal resources
import Link from "next/link";
import ShopHeader from "@/components/ShopHeader";

export default function CartOverviewPage({ cartItems }) {
  console.log(cartItems);
  return (
    <AppContainer>
      <StyledMain>
        <Link href={"/"}>back</Link>
        <h2>Shopping Cart</h2>
        <ul>
          {cartItems.length === 0 ? (
            <li>No item added</li>
          ) : (
            cartItems.map((eachItem) => {
              return <ItemCard key={eachItem.id} product={eachItem} />;
            })
          )}
        </ul>
      </StyledMain>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: solid green;
  padding: 0 10px;
  width: 90vw;
`;

const StyledMain = styled.main`
  margin-top: 60px;
  width: 100%;
`;
