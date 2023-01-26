import styled from "styled-components";

const ShopHeader = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  background-color: white;
  width: 100%;
  padding: 10px;
  border-bottom: solid lightgray;

  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

const ShopH1 = styled.h1`
  margin: 0;
  width: 80%;
`;

const CartParagraph = styled.p`
  width: 20%;
  text-align: right;

  padding-right: 10px;

  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
`;

const CartIndicator = styled.div`
  height: 1.5em;
  aspect-ratio: 1;
  border-radius: 50%;
  background-color: black;
  color: white;
  font-size: 13px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export { ShopHeader, ShopH1, CartParagraph, CartIndicator };
