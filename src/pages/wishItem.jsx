import React, { useContext } from "react";
import { ShopContext } from "../context";

export const WishItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { removeFromWish } = useContext(ShopContext);

  return (
    <div className="cartItem">
      <img src={productImage} />
      <div className="description ml-5">
        <p>
          <b>{productName}</b>
        </p>
        <p> Price: &#8377;{price}</p>
        <div className="countHandler">
          <button onClick={() => removeFromWish(id)}> Remove</button>
        </div>
      </div>
    </div>
  );
};
