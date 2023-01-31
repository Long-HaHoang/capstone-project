import styled from "styled-components";

const ShopFooter = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;

  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: center;

  background-color: white;
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

export { ShopFooter, CartParagraph, CartIndicator };
