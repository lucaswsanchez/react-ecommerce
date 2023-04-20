import React from "react";
import "./ShoppingCart.css";
import { AiFillCloseCircle } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";

function ShoppingCart({
  visibilty,
  products,
  setProductsInCart,
  onClose,
}) {
  const onQuantityChange = (productId, count) => {
    setProductsInCart((oldState) => {
      const productsIndex = oldState.findIndex((item) => item.id === productId);
      if (productsIndex !== -1) {
        oldState[productsIndex].count = count;
      }
      return [...oldState];
    });
  };

  const onProductRemove = (product) => {
    setProductsInCart((oldState) => {
      const productsIndex = oldState.findIndex(
        (item) => item.id === product.id
      );
      if (productsIndex !== -1) {
        oldState.splice(productsIndex, 1);
      }
      return [...oldState];
    });
  };

  return (
    <div
      className="shopping-cart-modal"
      style={{
        display: visibilty ? "block" : "none",
      }}
    >
      <div className="shopping-cart">
        <div className="shopping-cart-header">
          <div className="shopping-cart-header-title-cart">
            <h4>SHOPPING CART</h4>
          </div>
          <div className="shopping-cart-header-close-btn">
            <button className="btn close-btn" onClick={onClose}>
              <AiFillCloseCircle size={26} />
            </button>
          </div>
        </div>
        <div className="shopping-cart-products">
          {products.length === 0 && (
            <span className="empty-text">Your basket is currently empty</span>
          )}
          {products.map((product) => (
            <div className="shopping-cart-product" key={product.id}>
              <div className="shopping-cart-product-image">
                <img src={product.image} alt={product.title} />
              </div>
              <div className="shopping-cart-product-info">
                <div className="shopping-cart-product-info-1">
                  <p>{product.title}</p>
                  <span className="shopping-cart-product-price">
                    {product.price * product.count}$
                  </span>
                </div>
                <div className="shopping-cart-product-info-2">
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
