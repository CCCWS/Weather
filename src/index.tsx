import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyle from "./GlobalStyle";

import Weather from "./Weather";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
    <GlobalStyle />
    <Weather />
  </>
);
