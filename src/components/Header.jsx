import React from "react";
import "../components/Header.css";
import { FiShoppingCart } from "react-icons/fi";
import SearchBar from "./SearchBar";

function Header({ setCartVisible, productsInCart, addProductToCart }) {
  return (
    <div className="header-header">
      <div className="header-one">
        <div>
          <p className="header-title">E-COMMERCE</p>
        </div>
        <div>
          <button
            className="shopping-cart-btn"
            onClick={() => setCartVisible(true)}
          >
            <FiShoppingCart className="cart-btn" font-size={30} />
            {productsInCart.length > 0 && (
              <span className="product-count">{productsInCart.length}</span>
            )}
          </button>
        </div>
      </div>
      <div className="header-two">
        <div className="searching-bar">
          <p style={{ color: "white", textAlign: "center", fontSize: "20px" }}>
            Search for our best products!
          </p>
          <SearchBar addProductToCart={addProductToCart} />
        </div>
      </div>
    </div>
  );
}

export default Header;
