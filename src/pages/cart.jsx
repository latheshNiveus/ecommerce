import React, { useState, useContext } from "react";
import { ShopContext } from "../context";
import { PRODUCTS } from "../products";
import { CartItem } from "./cartItem";
import { Checkout } from "./checkout";
import emptyCart from "../imgs/emptyCart.png";

export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const [showAllModal, setshowModal] = useState(false);
  const handleModalClose = () => setshowModal(false);
  const oncheckout = () => {
    setshowModal(true);
  };
  return (
    <div className="cart">
      <div className="cart">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <h4> Subtotal: &#8377;{totalAmount} </h4>

          <button
            onClick={() => {
              oncheckout();
            }}
          >
            PLACE ORDER
          </button>
        </div>
      ) : (
        <div>
          <img className="fullscrn" src={emptyCart} />
        </div>
      )}

      <Checkout
        showAllModal={showAllModal}
        setshowModal={setshowModal}
        handleModalClose={handleModalClose}
        products={PRODUCTS}
        cartItems={cartItems}
        totalAmount={totalAmount}
        checkout={checkout}
      />
    </div>
  );
};
