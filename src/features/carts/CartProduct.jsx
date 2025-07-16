import React from "react";
import { useContext } from "react";
import { ProductContext } from "../../hooks/ProductContext";
import Layout from "../../layouts/Layout";
import { Link } from "react-router";

const CartProduct = () => {
  const { qty, cart } = useContext(ProductContext);
  console.log(qty, cart);
  const flatCart = cart.flat();
  const subtotal = flatCart.reduce((sum, item) => sum + item.price, 0);
  const tenPercent = subtotal * 0.1;
  const total = subtotal + tenPercent;

  return (
    <Layout>
      <div className="untree_co-section before-footer-section">
        <div className="container">
          <div className="row mb-5">
            <form className="col-md-12" method="post">
              <div className="site-blocks-table">
                <table className="table">
                  <thead>
                    <tr>
                      <th className="product-thumbnail">Image</th>
                      <th className="product-name">Product</th>
                      <th className="product-price">Price</th>
                      <th className="product-quantity">Quantity</th>
                      <th className="product-total">Total</th>
                      <th className="product-remove">Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.flat().map((cartItem) => (
                      <tr key={cartItem.id}>
                        <td className="product-thumbnail">
                          <img
                            src={cartItem.thumbnail}
                            alt={cartItem.title}
                            className="img-fluid"
                            style={{ height: "100px" }}
                          />
                        </td>
                        <td className="product-name">
                          <h2 className="h5 text-black">{cartItem.title}</h2>
                        </td>
                        <td>${cartItem.price}</td>
                        <td>
                          <div
                            className="input-group mb-3 d-flex align-items-center quantity-container"
                            style={{ maxWidth: 120 }}
                          >
                            <div className="input-group-prepend">
                              <button className="" type="button">
                                −
                              </button>
                            </div>
                            <input
                              type="text"
                              className="form-control text-center quantity-amount"
                              defaultValue={1}
                              aria-label="Example text with button addon"
                              aria-describedby="button-addon1"
                            />
                            <div className="input-group-append">
                              <button className="" type="button">
                                +
                              </button>
                            </div>
                          </div>
                        </td>
                        <td>${cartItem.price}</td>
                        <td>
                          <Link to="/" className="btn btn-black btn-sm">
                            X
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </form>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="row mb-5">
                <div className="col-md-6 mb-3 mb-md-0">
                  <button className="btn btn-black btn-sm btn-block">
                    Update Cart
                  </button>
                </div>
                <div className="col-md-6">
                  <button className="btn btn-outline-black btn-sm btn-block">
                    Continue Shopping
                  </button>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <label className="text-black h4" htmlFor="coupon">
                    Coupon
                  </label>
                  <p>Enter your coupon code if you have one.</p>
                </div>
                <div className="col-md-8 mb-3 mb-md-0">
                  <input
                    type="text"
                    className="form-control py-3"
                    id="coupon"
                    placeholder="Coupon Code"
                  />
                </div>
                <div className="col-md-4">
                  <button className="btn btn-black">Apply Coupon</button>
                </div>
              </div>
            </div>
            <div className="col-md-6 pl-5">
              <div className="row justify-content-end">
                <div className="col-md-7">
                  <div className="row">
                    <div className="col-md-12 text-right border-bottom mb-5">
                      <h3 className="text-black h4 text-uppercase">
                        Cart Totals
                      </h3>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <span className="text-black">Subtotal</span>
                    </div>
                    <div className="col-md-6 text-right">
                      <strong className="text-black">
                        ${subtotal.toFixed(2)}
                      </strong>
                    </div>
                  </div>
                  <div className="row mb-5">
                    <div className="col-md-6">
                      <span className="text-black">Tax(10%)</span>
                    </div>
                    <div className="col-md-6 text-right">
                      <strong className="text-black">
                        ${tenPercent.toFixed(2)}
                      </strong>
                    </div>
                  </div>
                  <div className="row mb-5">
                    <div className="col-md-6">
                      <span className="text-black">Total</span>
                    </div>
                    <div className="col-md-6 text-right">
                      <strong className="text-black">
                        ${total.toFixed(2)}
                      </strong>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <button
                        className="btn btn-black btn-lg py-3 btn-block"
                        // onClick="window.location='checkout.html'"
                      >
                        Proceed To Checkout
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CartProduct;
