import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
   * {
      margin: 0;
      padding: 0;
      outline: 0;
      box-sizing: border-box;
   }

   html, body, #root {
      min-height: 100%;
   }

   body {
      @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&display=swap');
      font-family: 'Open Sans', sans-serif;
      background: #f0f0f0;
      -webkit-font-smoothing: antialiased !important;
   }

   body, input, button {
      color: #222;
      font-size: 14px;
   }
   
   button {
      cursor: pointer;
   }
`;