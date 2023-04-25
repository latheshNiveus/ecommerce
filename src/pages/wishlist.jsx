import React, { useContext } from "react";
import { ShopContext } from "../context";
import { PRODUCTS } from "../products";
import { WishItem } from "./wishItem";
import emptyCart from "../imgs/emptyCart.png";

export const Wishlist = () => {
  const { wishItems } = useContext(ShopContext);
  let found = false;
  return (
    <div className="cart">
      <div className="cart">
        {PRODUCTS.map((product) => {
          if (wishItems[product.id] !== 0) {
            found = true;
            return <WishItem data={product} />;
          }
        })}
      </div>
      {!found && (
        <div>
          <img className="fullscrn" src={emptyCart} />
        </div>
      )}
    </div>
  );
};
