import React, { createContext, useState, useEffect } from "react";

// Commerce instance
import { commerce } from "../lib/commerce";

export const CartContext = createContext();

function CartContextProvider(props) {
  const [cart, setCart] = useState([]);
  const [loadingCart, setLoadingCart] = useState(false);
  const [checkoutToken, setcheckoutToken] = useState(null);

  const fetchCart = async () => {
    try {
      setCart(await commerce.cart.retrieve());
      setLoadingCart(false);
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingCart(false);
    }
  };

  const handleAddToCart = async (productID, quantity) => {
    try {
      const { cart } = await commerce.cart.add(productID, quantity);
      setCart(cart);
      setLoadingCart(false);
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingCart(false);
    }
  };

  const handleUpdateCartQty = async (productID, quantity) => {
    try {
      const { cart } = await commerce.cart.update(productID, { quantity });
      setCart(cart);
      setLoadingCart(false);
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingCart(false);
    }
  };

  const handleRemoveFromCart = async (productID) => {
    try {
      const { cart } = await commerce.cart.remove(productID);
      setCart(cart);
      setLoadingCart(false);
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingCart(false);
    }
  };

  const handleEmptyCart = async () => {
    try {
      const { cart } = await commerce.cart.empty();
      setCart(cart);
      setLoadingCart(false);
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingCart(false);
    }
  };

  const generateToken = async () => {
    try {
      const token = await commerce.checkout.generateToken(cart.id, {
        type: "cart",
      });
      setcheckoutToken(token);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    generateToken();
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        loadingCart,
        setLoadingCart,
        fetchCart,
        handleAddToCart,
        handleUpdateCartQty,
        handleRemoveFromCart,
        handleEmptyCart,
        checkoutToken,
        setcheckoutToken,
        generateToken,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
