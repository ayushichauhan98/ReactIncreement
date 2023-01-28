import React from "react";
import ReactDOM from "react-dom/client";
import Use_hooks from "./components/Use_hooks";

import App from "./App";
import { Synthesis, Prem } from "./components/Synthesis";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.Fragment>
    <App />,
    <Use_hooks />
    <Synthesis />
    <Prem />
  </React.Fragment>
);
