import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Heart } from "phosphor-react";
const navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">
          <Link to="/">Laz Mobiles</Link>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto"></ul>
          <form class="form-inline my-2 my-lg-0">
            <Link to="/wishlist">
              {" "}
              <Heart size={32} />{" "}
            </Link>
            &nbsp;
            <Link to="/cart">
              <ShoppingCart size={32} />
            </Link>
          </form>
        </div>
      </nav>
    </>
  );
};

export default navbar;
