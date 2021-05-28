import React, { createContext, useState } from "react";
// Commerce instance
import { commerce } from "../lib/commerce";

export const ProductContext = createContext();

function ProductContextProvider(props) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchProducts = async () => {
    setLoading(true);
    const { data } = await commerce.products.list();
    setProducts(data);
    setLoading(false);
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,
        loading,
        setLoading,
        fetchProducts,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
}

export default ProductContextProvider;
