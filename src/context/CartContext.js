import React, { createContext, useState } from "react";

// Commerce instance
import { commerce } from "../lib/commerce";

export const CartContext = createContext();

function CartContextProvider(props) {
  const [cart, setCart] = useState([]);
  const [response, setResponse] = useState([]);
  const [loadingCart, setLoadingCart] = useState(false);

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productID, quantity) => {
    setResponse(await commerce.cart.add(productID, quantity));
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        loadingCart,
        setLoadingCart,
        fetchCart,
        handleAddToCart,
        response,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
