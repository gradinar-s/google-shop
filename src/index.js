import React from "react";
import ReactDOM from "react-dom";
import store from "./store/store";

import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";

import App from "./App";

ReactDOM.render(
  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>,
  document.getElementById("root")
);
