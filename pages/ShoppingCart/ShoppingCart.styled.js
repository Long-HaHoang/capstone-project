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
`;

export { AppContainer, MainContent };
