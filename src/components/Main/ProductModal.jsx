import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import "./ProductModal.css";

function ProductModal({ onClose, isVisible, product, addProductToCart }) {
  return (
    <div
      className="product-modal"
      id={product.id}
      style={{
        display: isVisible ? "block" : "none",
      }}
    >
      <div className="modal-container" >
        <div className="modal-header">
          <AiFillCloseCircle
            className="close-icon"
            fontSize={30}
            onClick={onClose}
          />
        </div>
        <div className="modal-main">
          <div className="modal-main-1">
            <img
              className="modal-product-image"
              src={product.image}
              alt={product.title}
            />
          </div>
          <div className="modal-main-2">
            <p className="modal-product-title">{product.title}</p>
            <p className="modal-product-description">{product.description}</p>
            <p className="modal-product-price">${product.price}</p>
            <button
              className="add-cart-btn"
              onClick={() => {
                addProductToCart(product);
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductModal;
