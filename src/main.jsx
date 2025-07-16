import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App.jsx";
import { ProductProvider } from "./hooks/ProductContext.jsx";

createRoot(document.getElementById("root")).render(
  <ProductProvider>
    <App />
  </ProductProvider>
);
