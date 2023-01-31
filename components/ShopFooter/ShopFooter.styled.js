import styled from "styled-components";
import Link from "next/link";

const ShopFooter = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;

  width: 100%;
  height: 8%;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  background-color: white;
  border-top: solid;
`;

const CartParagraph = styled.p`
  width: fit-content;
  text-align: right;

  padding-right: 10px;

  display: flex;
  flex-direction: row;
  justify-content: center;
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
