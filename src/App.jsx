import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Components/Navbar";
import ProductList from "./Components/Productlist";
import CartModal from "./Components/Cartmodal";


const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [ModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (error) {
        console.log("Error fetching products:", error);
        
      }
    };

    fetchProducts();
  }, []);

  const addToCart = (product) => {
    const InCart = cart.find((item) => item.id === product.id);
    if (InCart) {
      alert("Item already added to the cart");
    } else {
      setCart([...cart, product]);
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar
        cartCount={cart.length}
        onCartClick={() => setModalOpen(true)}
      />
      <ProductList products={products} addToCart={addToCart} />
      <CartModal
        Open={ModalOpen}
        onClose={() => setModalOpen(false)}
        cart={cart}
        removeFromCart={removeFromCart}
      />
    </div>
  );
};

export default App;
