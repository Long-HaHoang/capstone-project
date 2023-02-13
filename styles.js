import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  

  body {
    --primary-color: #fcfcfc;
    --secondary-color: #0c0c0c;
    
    margin: 0;
    overflow-x: hidden;
    font-family: Roboto, sans-serif;
    display: flex;
    justify-content: center;
    background-color: var(--primary-color);
    color: var(--secondary-color);
  }

  input[type=number]::-webkit-inner-spin-button,
  input[type=number]::-webkit-outer-spin-button { 
	-webkit-appearance: none;
  
  } 
  input[type=number]{
    -moz-appearance: textfield;
  }
`;
