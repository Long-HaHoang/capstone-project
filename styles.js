import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* noto-sans-regular - vietnamese_latin */
@font-face {
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 400;
  src: url('./fonts/noto-sans-v27-vietnamese_latin-regular.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('./fonts/noto-sans-v27-vietnamese_latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('./fonts/noto-sans-v27-vietnamese_latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
       url('./fonts/noto-sans-v27-vietnamese_latin-regular.woff') format('woff'), /* Modern Browsers */
       url('./fonts/noto-sans-v27-vietnamese_latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
       url('./fonts/noto-sans-v27-vietnamese_latin-regular.svg#NotoSans') format('svg'); /* Legacy iOS */
}
/* noto-sans-italic - vietnamese_latin */
@font-face {
  font-family: 'Noto Sans';
  font-style: italic;
  font-weight: 400;
  src: url('./fonts/noto-sans-v27-vietnamese_latin-italic.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('./fonts/noto-sans-v27-vietnamese_latin-italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('./fonts/noto-sans-v27-vietnamese_latin-italic.woff2') format('woff2'), /* Super Modern Browsers */
       url('./fonts/noto-sans-v27-vietnamese_latin-italic.woff') format('woff'), /* Modern Browsers */
       url('./fonts/noto-sans-v27-vietnamese_latin-italic.ttf') format('truetype'), /* Safari, Android, iOS */
       url('./fonts/noto-sans-v27-vietnamese_latin-italic.svg#NotoSans') format('svg'); /* Legacy iOS */
}
/* noto-sans-600 - vietnamese_latin */
@font-face {
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 600;
  src: url('./fonts/noto-sans-v27-vietnamese_latin-600.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('./fonts/noto-sans-v27-vietnamese_latin-600.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('./fonts/noto-sans-v27-vietnamese_latin-600.woff2') format('woff2'), /* Super Modern Browsers */
       url('./fonts/noto-sans-v27-vietnamese_latin-600.woff') format('woff'), /* Modern Browsers */
       url('./fonts/noto-sans-v27-vietnamese_latin-600.ttf') format('truetype'), /* Safari, Android, iOS */
       url('./fonts/noto-sans-v27-vietnamese_latin-600.svg#NotoSans') format('svg'); /* Legacy iOS */
}
/* noto-sans-600italic - vietnamese_latin */
@font-face {
  font-family: 'Noto Sans';
  font-style: italic;
  font-weight: 600;
  src: url('./fonts/noto-sans-v27-vietnamese_latin-600italic.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('./fonts/noto-sans-v27-vietnamese_latin-600italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('./fonts/noto-sans-v27-vietnamese_latin-600italic.woff2') format('woff2'), /* Super Modern Browsers */
       url('./fonts/noto-sans-v27-vietnamese_latin-600italic.woff') format('woff'), /* Modern Browsers */
       url('./fonts/noto-sans-v27-vietnamese_latin-600italic.ttf') format('truetype'), /* Safari, Android, iOS */
       url('./fonts/noto-sans-v27-vietnamese_latin-600italic.svg#NotoSans') format('svg'); /* Legacy iOS */
}
/* noto-sans-800 - vietnamese_latin */
@font-face {
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 800;
  src: url('./fonts/noto-sans-v27-vietnamese_latin-800.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('./fonts/noto-sans-v27-vietnamese_latin-800.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('./fonts/noto-sans-v27-vietnamese_latin-800.woff2') format('woff2'), /* Super Modern Browsers */
       url('./fonts/noto-sans-v27-vietnamese_latin-800.woff') format('woff'), /* Modern Browsers */
       url('./fonts/noto-sans-v27-vietnamese_latin-800.ttf') format('truetype'), /* Safari, Android, iOS */
       url('./fonts/noto-sans-v27-vietnamese_latin-800.svg#NotoSans') format('svg'); /* Legacy iOS */
}
/* noto-sans-800italic - vietnamese_latin */
@font-face {
  font-family: 'Noto Sans';
  font-style: italic;
  font-weight: 800;
  src: url('./fonts/noto-sans-v27-vietnamese_latin-800italic.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('./fonts/noto-sans-v27-vietnamese_latin-800italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('./fonts/noto-sans-v27-vietnamese_latin-800italic.woff2') format('woff2'), /* Super Modern Browsers */
       url('./fonts/noto-sans-v27-vietnamese_latin-800italic.woff') format('woff'), /* Modern Browsers */
       url('./fonts/noto-sans-v27-vietnamese_latin-800italic.ttf') format('truetype'), /* Safari, Android, iOS */
       url('./fonts/noto-sans-v27-vietnamese_latin-800italic.svg#NotoSans') format('svg'); /* Legacy iOS */
}

/* roboto-regular - vietnamese_latin */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  src: url('./fonts/roboto-v30-vietnamese_latin-regular.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('./fonts/roboto-v30-vietnamese_latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('./fonts/roboto-v30-vietnamese_latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
       url('./fonts/roboto-v30-vietnamese_latin-regular.woff') format('woff'), /* Modern Browsers */
       url('./fonts/roboto-v30-vietnamese_latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
       url('./fonts/roboto-v30-vietnamese_latin-regular.svg#Roboto') format('svg'); /* Legacy iOS */
}

body {
  margin: 0;
    
  display: flex;
  justify-content: center;
  border: solid red;

  font-family: "Noto Sans", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: normal;
  letter-spacing: 0.18px;
  line-height: 27px;
  text-transform: none;
  color: #000;
}

h1, h2, h3{
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 2px;
  line-height: 35px;
  text-transform: none;
  color: #000;
}

input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button { 
	-webkit-appearance: none;
  } 

input[type=number]{
    -moz-appearance: textfield;
  }
`;
