import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  @media (max-width: 1080px) {
    font-size: 93.75%; // 15px
  }
  @media (max-width: 1080px) {
    font-size: 87.5%; // 14px
  }

  scroll-behavior: smooth;
}

:root {
  --color-primary: #263143;
  --color-secondary: #ea5b13;

  --color-background: #f5f5f5;
  --color-gray-200: #c1c8cc;
  --color-gray-400: #c1bccc;
  --color-gray-500: #a6adad;
}

body,
input,
textarea,
button {
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
}

h1,
h2,
h3,
h4,
h5,
h6,
strong {
  font-weight: 600;
}

button {
  cursor: pointer;
  border: none;
  outline: none;
}

[disabled] {
  opacity: 0.6;
  cursor: not-allowed;
}
`;
