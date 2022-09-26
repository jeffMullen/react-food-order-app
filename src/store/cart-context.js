import React from "react";

const CartContext = React.createContext({
  cart: [],
});

export const CartContextProvider = (props) => {
  return (
    <CartContext.Provider value={{ cart: [] }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
