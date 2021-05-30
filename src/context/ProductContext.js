import React, { createContext, useState } from "react";

export const ProductContext = createContext();

function ProductContextProvider(props) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,
        loading,
        setLoading,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
}

export default ProductContextProvider;
