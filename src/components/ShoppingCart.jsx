import React from "react";
import "../components/ShoppingCart.css";
import { AiFillCloseCircle } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";

function ShoppingCart({
  visibilty,
  products,
  onProductRemove,
  onClose,
  onQuantityChange,
}) {
  return (
    <div
      className="modal"
      style={{
        display: visibilty ? "block" : "none",
      }}
    >
      <div className="shoppingCart">
        <div className="header">
          <div className="header-title-cart">
            <h4>SHOPPING CART</h4>
          </div>
          <div className="header-close-btn">
            <button className="btn close-btn" onClick={onClose}>
              <AiFillCloseCircle size={26} />
            </button>
          </div>
        </div>
        <div className="cart-products">
          {products.length === 0 && (
            <span className="empty-text">Your basket is currently empty</span>
          )}
          {products.map((product) => (
            <div className="cart-product" key={product.id}>
              <div className="product-image">
                <img src={product.image} alt={product.title} />
              </div>
              <div className="product-info">
                <div className="product-info-1">
                  <p>{product.title}</p>
                  <span className="product-price">
                    {product.price * product.count}$
                  </span>
                </div>
                <div className="product-info-2">
                  <select
                    className="count"
                    value={product.count}
                    onChange={(event) => {
                      onQuantityChange(product.id, event.target.value);
                    }}
                  >
                    {[...Array(10).keys()].map((number) => {
                      const num = number + 1;
                      return (
                        <option value={num} key={num}>
                          {num}
                        </option>
                      );
                    })}
                  </select>
                  <button
                    className="btn remove-btn"
                    onClick={() => onProductRemove(product)}
                  >
                    <RiDeleteBin6Line size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
          {products.length > 0 && (
            <button className="checkout-btn">Proceed to checkout</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
