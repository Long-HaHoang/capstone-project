// Import of external resources
import styled from "styled-components";
import Link from "next/link";

const ShopHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;

  width: 100%;
  padding: 10px 25px;

  background-color: var(--secondary-color);
  color: var(--primary-color);
  border-bottom: solid lightgray;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ShopH1 = styled.h1`
  margin: 0;
  width: 80%;
`;

const ShoppingCartLink = styled(Link)`
  width: 13%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: inherit;
  text-decoration: inherit;
`;

const ShoppingCartCounter = styled.span`
  font-size: 18px;
`;

export { ShopHeader, ShopH1, ShoppingCartLink, ShoppingCartCounter };
