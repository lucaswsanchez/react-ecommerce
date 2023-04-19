import React, { useState, useMemo } from "react";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Products from "../src/components/Products";
import Pagination from "../src/components/Pagination";
import Header from "./components/Header";
import ShoppingCart from "./components/ShoppingCart";
import Sliders from "./components/Sliders";
import Footer from "./components/Footer";
import Filter from "./components/Filter";

function App({ products, loading }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(4);
  const [cartsVisibilty, setCartVisible] = useState(false);
  const [productsInCart, setProductsInCart] = useState([]);
  const [category, setCategory] = useState("all");
  const [priceOrder, setPriceOrder] = useState("none");

  /*Shopping cart*/

  const addProductToCart = (product) => {
    const productExists = productsInCart.find((p) => p.id === product.id);

    if (productExists) {
      toast.error("This product is already in the cart", {
        position: "bottom-right",
        autoClose: 500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      const newProduct = {
        ...product,
        count: 1,
      };
      setProductsInCart((productsInCart) => [...productsInCart, newProduct]);
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
    }
  };

  /*Filtrado y ordenamiento*/

  const filteredProducts = useMemo(() => {
    let filtered = products;
    if (category !== "all") {
      filtered = filtered.filter((product) => product.category === category);
    }
    if (priceOrder === "asc") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (priceOrder === "desc") {
      filtered.sort((a, b) => b.price - a.price);
    }
    return filtered;
  }, [products, category, priceOrder]);

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
        setProductsInCart={setProductsInCart}
        onClose={() => setCartVisible(false)}
      />
      <ToastContainer />
      <header>
        <Header
          setCartVisible={setCartVisible}
          productsInCart={productsInCart}
          addProductToCart={addProductToCart}
        />
      </header>
      <section>
        <Sliders />
      </section>
      <main>
        <section>
          <Filter setCategory={setCategory} setPriceOrder={setPriceOrder} />
        </section>
        <section>
          <Products
            products={currentProducts}
            loading={loading}
            addProductToCart={addProductToCart}
            onClick={() => setDetailVisible(true)}
          />
        </section>
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
