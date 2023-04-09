import "../components/SearchBar.css";
import { AiOutlineSearch } from "react-icons/ai";
import React, { useState, useEffect } from "react";
import ProductModal from "./ProductModal";

function SearchBar({ addProductToCart }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    async function search() {
      setLoading(true);
      const response = await fetch(
        `https://fakestoreapi.com/products?title=${searchTerm}`
      );
      const data = await response.json();
      setResults(data);
      setLoading(false);
      setSelectedProduct(null);
    }

    if (searchTerm !== "") {
      search();
    }
  }, [searchTerm]);

  const filteredResults = results.filter((result) =>
    result.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="search-container">
      <div className="search-bar">
        <div className="search-input-icon">
          <input
            className="search-input"
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <AiOutlineSearch size={40} className="search-icon" />
        </div>
        <div className="search-results">
          {loading && <p>Loading...</p>}
          {searchTerm !== "" ? (
            <ul>
              {filteredResults.map((result) => (
                <li key={result.id} onClick={() => setSelectedProduct(result)}>
                  {result.title}
                </li>
              ))}
            </ul>
          ) : (
            <p></p>
          )}
        </div>
      </div>
      {selectedProduct && (
        <ProductModal
          onClose={() => setSelectedProduct(null)}
          isVisible={true}
          product={selectedProduct}
          addProductToCart={addProductToCart}
        />
      )}
    </div>
  );
}

export default SearchBar;
