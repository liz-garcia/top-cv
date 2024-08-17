// * Disable console methods in production
if (import.meta.env.VITE_NODE_ENV === "production") {
  // eslint-disable-next-line no-console
  console.log = function () {};
  // eslint-disable-next-line no-console
  console.warn = function () {};
  // eslint-disable-next-line no-console
  console.error = function () {};
}

import React from "react";
import ReactDOM from "react-dom/client";
import AppWrapper from "./AppWrapper.jsx";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppWrapper>
      <App />
    </AppWrapper>
  </React.StrictMode>
);
