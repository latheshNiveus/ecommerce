import { createContext, useState } from "react";
import { PRODUCTS } from "./products";

export const ShopContext = createContext(null);

const getDefault = () => {
  let cart = {};
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefault());
  const [wishItems, setWishtems] = useState(getDefault());

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const addToWish = (itemId) => {
    setWishtems((prev) => ({ ...prev, [itemId]: 1 }));
  };

  const removeFromWish = (itemId) => {
    setWishtems((prev) => ({ ...prev, [itemId]: 0 }));
  };

  const checkout = () => {
    setCartItems(getDefault());
    setWishtems(getDefault());
  };

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    checkout,
    wishItems,
    addToWish,
    removeFromWish,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
