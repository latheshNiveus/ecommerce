import React, { useContext } from "react";
import { ShopContext } from "../context";
import { ShoppingCart ,Heart} from "phosphor-react";

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems,addToWish, wishItems,removeFromWish } = useContext(ShopContext);

  const cartItemCount = cartItems[id];
  const wishItemCount = wishItems[id];

  return (
    <div className="product">
      <img src={productImage} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p> &#8377;{price}</p>
      </div>
      <div>
        <button className="icon" onClick={() => addToCart(id)}>
        <ShoppingCart size={25} />
         {cartItemCount > 0 && <span class="badge badge-info"> ({cartItemCount})</span>}
        </button>
        <button className="icon" onClick={() =>wishItemCount?removeFromWish(id): addToWish(id)}>
        {wishItemCount?<Heart size={25} color="red" weight="fill"/>:<Heart size={25}/> }
        </button>
      </div>
      
    </div>
  );
};
