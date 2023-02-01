// Import of external resources
import styled from "styled-components";

const ShopHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  background-color: white;
  width: 100%;
  padding: 10px 25px;
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

export { ShopHeader, ShopH1 };
