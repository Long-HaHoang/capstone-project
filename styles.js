import { createGlobalStyle, css } from "styled-components";

// Gets formatted by Prettier
const prettierStyles = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
  }

  html,
  body {
    width: 100%;
  }

  body {
    --primary-color: #fcfcfc;
    --secondary-color: #0c0c0c;

    font-family: Roboto, sans-serif;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    background-color: var(--primary-color);
    color: var(--secondary-color);
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
  input[type="number"] {
    -moz-appearance: textfield;
  }
`;

export default createGlobalStyle`
  ${prettierStyles};
`;
