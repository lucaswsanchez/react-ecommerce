import React, { useState } from "react";
import ProductModal from "./ProductModal";
import "./Products.css";

const Products = ({ products, loading, addProductToCart }) => {
  const [detailsVisibility, setDetailVisible] = useState(false);
  const [productModal, setProductModal] = useState({});

  function openProductModal(el) {
    setProductModal(el);
    setDetailVisible(true);
  }

  if (loading) {
    return <h4 className="products-loading">Loading...</h4>;
  }

  return (
    <div>
      <div className="products-container">
        {products.map((el) => (
          <div id={el.id} key={el.id} className="products">
            <figure className="products-figure" onClick={() => openProductModal(el)}>
              <div>
                <img className="products-image" src={el.image} alt={el.title} />
              </div>
              <div className="products-title-price">
                <div className="title">
                  <p>{el.title}</p>
                </div>
                <div className="price">
                  <p>${el.price}</p>
                </div>
              </div>
            </figure>
            <ProductModal
              onClose={() => setDetailVisible(false)}
              isVisible={detailsVisibility}
              product={productModal}
              addProductToCart={addProductToCart}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
