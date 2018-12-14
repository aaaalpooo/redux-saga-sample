import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import configure from "./store/configure";
import * as serviceWorker from "./serviceWorker";

const rootElement = document.getElementById("root");

if (rootElement) {
  const store = configure();
  const app = (
    <Provider store={store}>
      <App />
    </Provider>
  );
  ReactDOM.render(app, rootElement);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
