import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    /* box sizing exprime conteudo para continuar alinhado o layout(sem quebra) */
  }

  html, body, #root {
    min-height: 100%;
    /* faz ocupar toda altura e nao apenas o tamanho do conteudo */
  }

  body {
    background: #7159c1;
    -webkit-font-smooting: antialiased !important;
  }

  body, input, button {
    color: #222;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
