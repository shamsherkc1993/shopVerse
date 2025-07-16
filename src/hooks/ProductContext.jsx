import { createContext, useEffect, useState } from "react";
export const ProductContext = createContext();
import crosssvgImage from "../assets/cross.svg";

export const ProductProvider = ({ children }) => {
  const URL = "https://dummyjson.com/products";
  const [products, setProducts] = useState([]);
  const [trending, setTrending] = useState([]);
  const [allproduct, setAllproducts] = useState([]);
  const [qty, setQty] = useState(0);
  const [cart, setCart] = useState([]);

  const handleAddtocart = () => {
    setCart((prevCart) => [...prevCart, products]);
    setQty((prevQty) => prevQty + 1);
  };

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        const lastThree = data.products.slice(-3);
        setProducts(lastThree);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        const firstThree = data.products.slice(0, 3);
        setTrending(firstThree);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        const allPrd = data.products;
        setAllproducts(allPrd);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <ProductContext.Provider
      value={{
        products,
        trending,
        allproduct,
        crosssvgImage,
        handleAddtocart,
        cart,
        qty,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
