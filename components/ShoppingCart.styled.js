import styled from "styled-components";

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
`;

export { AppContainer, MainContent, CartItemList, TopInfoSection };
