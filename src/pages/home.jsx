import React from 'react'
import { PRODUCTS } from "../products";
import { Product } from "./product";

const home = () => {
  return (
    <div className="shop">
      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  )
}

export default home
