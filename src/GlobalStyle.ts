import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'BMJUA';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/BMJUA.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}


*{
    box-sizing: border-box;
    font-family : BMJUA;
    margin: 0;
    /* overflow: overlay; */
}


body{
  overflow-x: hidden;
}

button{
  cursor: pointer;
}

::-webkit-scrollbar {
    display: none;
  }

::-webkit-scrollbar {
  width: 5px;
}



::-webkit-scrollbar-track {
  border-radius: 10px;
}


::-webkit-scrollbar-thumb {
  background: linear-gradient(45deg, #ff444462, #ff932db7);
  border-radius: 100px;
}

`;

export default GlobalStyle;
