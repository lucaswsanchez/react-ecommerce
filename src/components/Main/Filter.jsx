import React from "react";
import "./Filter.css";

const Filter = ({ setCategory, setPriceOrder, onFilterChange }) => {
  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    onFilterChange();
  };

  const handlePriceOrderChange = (e) => {
    setPriceOrder(e.target.value);
    onFilterChange();
  };

  return (
    <div className="filter-container">
      <div className="category-filter">
        <label htmlFor="category">Category:</label>
        <select id="category" onChange={handleCategoryChange}>
          <option value="all">All</option>
          <option value="electronics">Electronics</option>
          <option value="jewelery">Jewelery</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="women's clothing">Women's Clothing</option>
        </select>
      </div>
      <div className="price-filter">
        <label htmlFor="priceOrder">Price:</label>
        <select id="priceOrder" onChange={handlePriceOrderChange}>
          <option value="none">None</option>
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
