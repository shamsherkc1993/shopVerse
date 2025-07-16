import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import { BrowserRouter, Route, Routes } from "react-router";
import Shop from "./pages/Shop";
import SingleProduct from "./components/SingleProduct";
import CartProduct from "./features/carts/CartProduct";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/single-product/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<CartProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
