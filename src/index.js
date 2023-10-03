import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./global.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/store";
import "./i18n.js";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <I18nextProvider i18n={i18next}>
    <Provider store={store}>
      <BrowserRouter>
      {/* <Suspense fallback='...loading'> */}
      <App />

      {/* </Suspense> */}
      </BrowserRouter>
    </Provider>
  // </I18nextProvider>
);
