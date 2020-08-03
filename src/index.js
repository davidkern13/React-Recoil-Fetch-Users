import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { RecoilRoot } from "recoil";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <RecoilRoot>
    <Suspense fallback={"Loading..."}>
      <App />
    </Suspense>
  </RecoilRoot>,
  rootElement
);
