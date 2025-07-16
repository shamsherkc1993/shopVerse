// import React, { useEffect, useState } from "react";
import "./PopularAndTrendingItems.css";
import { useContext } from "react";
import { ProductContext } from "../hooks/ProductContext";
import { Link } from "react-router";

const TrendingItems = () => {
  const { trending, crosssvgImage } = useContext(ProductContext);

  return (
    <section className="product-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-3 mb-5 mb-lg-0">
            <h2 className="mb-4 section-title">Trending Items</h2>
            <p className="mb-4">
              Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
              velit. Aliquam vulputate velit imperdiet dolor tempor tristique.{" "}
            </p>
            <p>
              <Link to="/shop" className="btn">
                Explore
              </Link>
            </p>
          </div>

          {trending.map((product) => (
            <div
              className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0"
              key={product.id}
            >
              <Link className="product-item" to="/shop">
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
    </section>
  );
};

export default TrendingItems;
