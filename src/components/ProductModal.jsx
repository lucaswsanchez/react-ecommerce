import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../components/ProductModal.css";

function ProductModal({ onClose, isVisible, product, addProductToCart }) {
  return (
    <div
      className="productModal"
      id={product.id}
      style={{
        display: isVisible ? "block" : "none",
      }}
    >
      <div className="modalMain">
        <div className="modalHeader">
          <AiFillCloseCircle
            className="close-icon"
            font-size={30}
            onClick={onClose}
          />
        </div>
        <div className="modalMainContainer">
          <div className="modalMainContainer1">
            <img
              className="modalProductImage"
              src={product.image}
              alt={product.title}
            />
          </div>
          <div className="modalMainContainer2">
            <p className="modalProductTitle">{product.title}</p>
            <p className="modalProductDescription">{product.description}</p>
            <p className="modalProductPrice">${product.price}</p>
            <button
              className="addCartBtn"
              onClick={() => {
                addProductToCart(product);
                toast.success("Product added to cart!", {
                  position: "bottom-right",
                  autoClose: 200,
                  hideProgressBar: true,
                  closeOnClick: true,
                  pauseOnHover: false,
                  draggable: true,
                  progress: undefined,
                  theme: "dark",
                });
              }}
            >
              Add to Cart
            </button>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductModal;
