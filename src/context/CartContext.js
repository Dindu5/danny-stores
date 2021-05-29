import React, { createContext, useState, useEffect } from "react";
// import { useAlert } from "react-alert";

// Commerce instance
import { commerce } from "../lib/commerce";

export const CartContext = createContext();

function CartContextProvider(props) {
  const [cart, setCart] = useState([]);
  const [loadingCart, setLoadingCart] = useState(false);
  const [checkoutToken, setcheckoutToken] = useState(null);
  // const alert = useAlert();

  const fetchCart = async () => {
    try {
      setCart(await commerce.cart.retrieve());
      setLoadingCart(false);
      // alert.show("Cart fetched succesfully!");
    } catch (error) {
      console.log(error);
      // alert.error("Something went wrong fetching your cart!");
    } finally {
      setLoadingCart(false);
    }
  };

  const handleAddToCart = async (productID, quantity) => {
    try {
      const { cart } = await commerce.cart.add(productID, quantity);
      setCart(cart);
      setLoadingCart(false);
      // alert.success("Successfully added item to cart");
    } catch (error) {
      console.log(error);
      // alert.error("Something went wrong adding itwm to cart");
    } finally {
      setLoadingCart(false);
    }
  };

  const handleUpdateCartQty = async (productID, quantity) => {
    try {
      const { cart } = await commerce.cart.update(productID, { quantity });
      setCart(cart);
      setLoadingCart(false);
      // alert.success("Updated your product quantity");
    } catch (error) {
      console.log(error);
      // alert.error("Something went wrong updating product quantity, try again");
    } finally {
      setLoadingCart(false);
    }
  };

  const handleRemoveFromCart = async (productID) => {
    try {
      const { cart } = await commerce.cart.remove(productID);
      setCart(cart);
      setLoadingCart(false);
      //alert.success("Item successfully removed from cart");
    } catch (error) {
      console.log(error);
      //alert.error(
      //"Something went wrong while removing item from cart, try again"
      //);
    } finally {
      setLoadingCart(false);
    }
  };

  const handleEmptyCart = async () => {
    try {
      const { cart } = await commerce.cart.empty();
      setCart(cart);
      setLoadingCart(false);
      // alert.success("You have successfully emptied your shopping cart");
    } catch (error) {
      console.log(error);
      // alert.error("Could not empty cart, could you try again");
    } finally {
      setLoadingCart(false);
    }
  };

  const generateToken = async () => {
    try {
      const token = await commerce.checkout.generateToken(cart.id, {
        type: "cart",
      });
      // setcheckoutToken(token);
    } catch (error) {
      console.log(error);
      // alert.error("Something went wrong processing your checkout");
    }
  };
  useEffect(() => {
    generateToken();
  }, [cart, generateToken]);

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
