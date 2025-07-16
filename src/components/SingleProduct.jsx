import React, { useContext } from "react";
import { ProductContext } from "../hooks/ProductContext";
import { Link, useParams } from "react-router";
import Layout from "../layouts/Layout";

const SingleProduct = () => {
  const { id } = useParams(); // get product id from URL
  const { allproduct, handleAddtocart } = useContext(ProductContext);
  const product = allproduct.find((item) => item.id === parseInt(id));

  if (!product) {
    return (
      <Layout>
        <div className="container py-5 text-center">
          <h4>Product not found.</h4>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="py-5">
        <div className="container">
          <div className="row g-5">
            {/* Product Image */}
            <div className="col-md-5 text-center">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="img-fluid rounded shadow-sm"
                style={{ maxHeight: "400px", objectFit: "cover" }}
              />
            </div>

            {/* Product Details */}
            <div className="col-md-7">
              <h2 className="fw-bold mb-3">{product.title}</h2>
              <p className="text-muted mb-1">SKU: {product.sku || "N/A"}</p>
              <h4 className="text-success mb-3">${product.price}</h4>
              <p className="mb-4">{product.description}</p>

              <ul className="list-group list-group-flush mb-4">
                <li className="list-group-item">
                  <strong>Category:</strong> {product.category}
                </li>
                <li className="list-group-item">
                  <strong>Brand:</strong> {product.brand}
                </li>
                <li className="list-group-item">
                  <strong>Rating:</strong> ⭐ {product.rating}
                </li>

                <li className="list-group-item">
                  <strong>Tags:</strong> {product.tags?.join(", ")}
                </li>

                <li className="list-group-item">
                  <strong>Weight:</strong> {product.weight} g
                </li>
                <li className="list-group-item">
                  <strong>Availability:</strong>{" "}
                  {product.availabilityStatus || "In Stock"}
                </li>
                <li className="list-group-item">
                  <strong>Warranty:</strong>{" "}
                  {product.warrantyInformation || "N/A"}
                </li>
                <li className="list-group-item">
                  <strong>Shipping:</strong>{" "}
                  {product.shippingInformation || "Ships soon"}
                </li>
              </ul>
              <Link
                className="btn btn-primary btn-lg w-100"
                to=""
                onClick={() => handleAddtocart(product)}
              >
                🛒 Add to Cart
              </Link>
            </div>
          </div>

          {/* Reviews */}
          {product.reviews && product.reviews.length > 0 && (
            <div className="mt-5">
              <h4 className="mb-4">Customer Reviews</h4>
              {product.reviews.map((review, index) => (
                <div key={index} className="card mb-3 shadow-sm">
                  <div className="card-body">
                    <div className="d-flex justify-content-between">
                      <h6 className="mb-1">{review.reviewerName}</h6>
                      <span>⭐ {review.rating}</span>
                    </div>
                    <p
                      className="mb-1 text-muted"
                      style={{ fontSize: "0.9rem" }}
                    >
                      {new Date(review.date).toLocaleDateString()}
                    </p>
                    <p className="mb-0">{review.comment}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default SingleProduct;
