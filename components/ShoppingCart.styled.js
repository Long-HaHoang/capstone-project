import styled from "styled-components";
import Link from "next/link";

const MainContent = styled.main`
  margin-top: 60px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const CartItemList = styled.ul`
  display: flex;
  flex-direction: column;

  list-style: none;
  gap: 10px;
  margin: 0;
  padding: 0;
`;

const TopInfoSection = styled.section`
  border: solid black;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CartBackLink = styled(Link)`
  align-self: flex-start;
`;

const CartContentMetric = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const CartHR = styled.hr`
  width: 100%;
`;

export {
  MainContent,
  CartItemList,
  TopInfoSection,
  CartBackLink,
  CartContentMetric,
  CartHR,
};
