import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: system-ui;
    display: flex;
    justify-content: center;
    border: solid red;
  }

  input[type=number]::-webkit-inner-spin-button,
  input[type=number]::-webkit-outer-spin-button { 
	-webkit-appearance: none;
  
  } 
  input[type=number]{
    -moz-appearance: textfield;
  }
`;
