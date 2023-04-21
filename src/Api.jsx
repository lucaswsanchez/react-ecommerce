import React, { useState, useEffect } from "react";
import axios from "axios";
import App from "./App";

const Api = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const res = await axios.get("https://fakestoreapi.com/products");
        setProducts(res.data);
      } catch (error) {
        console.log(error);
        setError("Ocurrió un error al obtener los productos");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <React.StrictMode>
      <App products={products} loading={loading} />
    </React.StrictMode>
  );
};

export default Api;
