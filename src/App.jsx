import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import { BrowserRouter, Route, Routes } from "react-router";
import Shop from "./pages/Shop";
import SingleProduct from "./components/SingleProduct";
import CartProduct from "./features/carts/CartProduct";
import Aboutus from "./pages/Aboutus";
import Services from "./pages/Services";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/single-product/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<CartProduct />} />
        <Route path="/about-us" element={<Aboutus />} />
        <Route path="/service" element={<Services />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
