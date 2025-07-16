import React from "react";
import { useContext } from "react";
import { ProductContext } from "../hooks/ProductContext";
import { Link } from "react-router";
import Layout from "../layouts/Layout";

const Shop = () => {
  const { allproduct, crosssvgImage } = useContext(ProductContext);

  return (
    <Layout>
      <div className="hero">
        <h1
          style={{
            paddingTop: "100px",
            paddingBottom: "100px",
            paddingLeft: "10px",
          }}
        >
          Shop
        </h1>
      </div>
      <div className="untree_co-section product-section before-footer-section">
        <div className="container">
          <div className="row">
            {allproduct.map((product) => (
              <div className="col-12 col-md-4 col-lg-3 mb-5" key={product.id}>
                <Link
                  className="product-item"
                  to={`/single-product/${product.id}`}
                >
                  <img
                    src={product.thumbnail}
                    className="img-fluid product-thumbnail"
                  />
                  <h3 className="product-title">{product.title}</h3>
                  <strong className="product-price">${product.price}</strong>
                  <span className="icon-cross">
                    <img src={crosssvgImage} className="img-fluid" />
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Shop;
