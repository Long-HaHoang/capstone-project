import styled from "styled-components";

const MainContent = styled.main`
  position: relative;
  margin-top: 60px;
  padding: 20px 0;
  width: 100%;

  border: solid green;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const Footer = styled.footer`
  position: relative;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #0c0c0c;
  color: #fcfcfc;

  @media (min-width: 997px) {
    position: fixed;
    width: 100%;
  }
`;

export { MainContent, Footer };
