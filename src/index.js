import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ProductContextProvider from "./context/ProductContext";
import CartContextProvider from "./context/CartContext";

ReactDOM.render(
  <React.StrictMode>
    <ProductContextProvider>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </ProductContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
