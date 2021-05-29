import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ProductContextProvider from "./context/ProductContext";
import CartContextProvider from "./context/CartContext";

import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

const options = {
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: "30px",
  transition: transitions.FADE,
};

ReactDOM.render(
  <React.StrictMode>
    <ProductContextProvider>
      <CartContextProvider>
        <AlertProvider template={AlertTemplate} {...options}>
          <App />
        </AlertProvider>
      </CartContextProvider>
    </ProductContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
