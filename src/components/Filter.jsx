import React from "react";
import "./Filter.css";

const Filter = ({ setCategory, setPriceOrder }) => {
  return (
    <div className="filter-container">
      <div className="category-filter">
        <label htmlFor="category">Category:</label>
        <select id="category" onChange={(e) => setCategory(e.target.value)}>
          <option value="all">All</option>
          <option value="electronics">Electronics</option>
          <option value="jewelery">Jewelery</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="women's clothing">Women's Clothing</option>
        </select>
      </div>
      <div className="price-filter">
        <label htmlFor="priceOrder">Price:</label>
        <select id="priceOrder" onChange={(e) => setPriceOrder(e.target.value)}>
          <option value="none">None</option>
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
