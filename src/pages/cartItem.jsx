import React, { useContext } from "react";
import { ShopContext } from "../context";

export const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart } = useContext(ShopContext);

  return (
    <div className="cartItem">
      <img src={productImage} />
      <div className="description ml-5">
        <p>
          <b>{productName}</b>
        </p>
        <p> Price: &#8377;{price}</p>
        <div className="countHandler">
          <button className="btn-danger" onClick={() => removeFromCart(id)}>
            -
          </button>
          <input value={cartItems[id]} disabled />
          <button className="btn-success" onClick={() => addToCart(id)}>
            {" "}
            +{" "}
          </button>
        </div>
      </div>
    </div>
  );
};
