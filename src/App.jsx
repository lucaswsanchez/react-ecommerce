import React, { useState, useEffect } from "react";
import "./App.css";
import Products from "../src/components/Products";
import Pagination from "../src/components/Pagination";
import Header from "./components/Header";
import axios from "axios";
import ShoppingCart from "./components/ShoppingCart";
import Sliders from "./components/Sliders";
import Carrusel1 from "../src/assets/images/Carrusel1.png";
import Carrusel2 from "../src/assets/images/Carrusel2.png";
import Carrusel3 from "../src/assets/images/Carrusel3.png";
import Carrusel4 from "../src/assets/images/Carrusel4.png";
import Footer from "./components/Footer";
import Filter from "./components/Filter";

const slides = [Carrusel1, Carrusel2, Carrusel3, Carrusel4];

function App() {
  const [products, setProductsAxios] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(4);
  const [cartsVisibilty, setCartVisible] = useState(false);
  const [productsInCart, setProducts] = useState([]);
  const [category, setCategory] = useState("all");
  const [priceOrder, setPriceOrder] = useState("none");

  /* Llamada a la API */

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const res = await axios.get("https://fakestoreapi.com/products");
      setProductsAxios(res.data);
      setLoading(false);
    };

    fetchProducts();
  }, []);

  /*Shopping cart*/

  const addProductToCart = (product) => {
    const newProduct = {
      ...product,
      count: 1,
    };
    setProducts([...productsInCart, newProduct]);
  };

  const onQuantityChange = (productId, count) => {
    setProducts((oldState) => {
      const productsIndex = oldState.findIndex((item) => item.id === productId);
      if (productsIndex !== -1) {
        oldState[productsIndex].count = count;
      }
      return [...oldState];
    });
  };

  const onProductRemove = (product) => {
    setProducts((oldState) => {
      const productsIndex = oldState.findIndex(
        (item) => item.id === product.id
      );
      if (productsIndex !== -1) {
        oldState.splice(productsIndex, 1);
      }
      return [...oldState];
    });
  };

  /*Filtrado y ordenamiento*/

  let filteredProducts = products;
  if (category !== "all") {
    filteredProducts = filteredProducts.filter(
      (product) => product.category === category
    );
  }
  if (priceOrder === "asc") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (priceOrder === "desc") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  /*Paginacion*/

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="App">
      <ShoppingCart
        visibilty={cartsVisibilty}
        products={productsInCart}
        onClose={() => setCartVisible(false)}
        onQuantityChange={onQuantityChange}
        onProductRemove={onProductRemove}
      />
      <header>
        <Header
          setCartVisible={setCartVisible}
          productsInCart={productsInCart}
          addProductToCart={addProductToCart}
        />
      </header>
      <div style={{ maxWidth: "100%", margin: "auto" }}>
        <Sliders>
          {slides.map((s) => (
            <img
              src={s}
              style={{
                minWidth: "100%",
                width: "100%",
                height: "100%",
                padding: "0px",
                objectFit: "contain",
                backgroundColor: "#060413",
              }}
            />
          ))}
        </Sliders>
      </div>
      <main>
        <Filter setCategory={setCategory} setPriceOrder={setPriceOrder} />
        <Products
          products={currentProducts}
          loading={loading}
          addProductToCart={addProductToCart}
          onClick={() => setDetailVisible(true)}
        />
        <Pagination
          productsPerPage={productsPerPage}
          totalProducts={filteredProducts.length}
          paginate={paginate}
        />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
