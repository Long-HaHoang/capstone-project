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
  position: relative;
  border-bottom: solid lightgray;
  width: 100%;
  padding: 0px 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const WrapperLinkHeader = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 10% 90%;
  place-items: center;
`;

const CartBackLink = styled(Link)`
  position: absolute;
  bottom: 60px;
  width: fit-content;
  align-self: flex-start;
`;

const TopInfoSectionHeader = styled.h2`
  width: fit-content;
  margin: 0;
`;

const CartContentMetric = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

const SummarySection = styled.div`
  position: relative;
  width: 100%;
  padding: 0 10px;
  border-top: solid lightgray;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SummaryHeader = styled.h2`
  justify-self: flex-start;
  align-self: flex-start;
  color: darkgray;
  padding: 10px;
  margin: 0;
  font-size: 20px;
`;

const SummaryCard = styled.div`
  width: 100%;
  padding: 10px;

  display: flex;
  flex-direction: column;

  hr {
    height: 3px;
    width: 100%;
    background-color: lightgray;
    border: none;
  }
`;

const SummaryParagraph = styled.p`
  width: 80%;
  justify-self: center;
  align-self: center;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export {
  MainContent,
  CartItemList,
  TopInfoSection,
  CartBackLink,
  CartContentMetric,
  WrapperLinkHeader,
  TopInfoSectionHeader,
  SummarySection,
  SummaryHeader,
  SummaryCard,
  SummaryParagraph,
};
