import styled from "styled-components";

const ContentContainer = styled.div`
  height: fit-content;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: solid green;
  padding: 20px 0;
`;

const Footer = styled.footer`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #0c0c0c;
  color: #fcfcfc;
`;

export { ContentContainer, Footer };
