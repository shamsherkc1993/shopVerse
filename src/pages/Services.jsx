import React from "react";
import Layout from "../layouts/Layout";
import truck from "../assets/truck.svg";
import bag from "../assets/bag.svg";
import supports from "../assets/truck.svg";
import returns from "../assets/return.svg";

const Services = () => {
  return (
    <Layout>
      <div>
        <div className="hero">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-lg-5">
                <div className="intro-excerpt">
                  <h1 style={{ padding: "5rem 0" }}>Services</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="why-choose-section">
          <div className="container">
            <div className="row my-5">
              <div className="col-6 col-md-6 col-lg-3 mb-4">
                <div className="feature">
                  <div className="icon">
                    <img src={truck} alt="Image" className="imf-fluid" />
                  </div>
                  <h3>Fast &amp; Free Shipping</h3>
                  <p>
                    Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                    aliquet velit. Aliquam vulputate.
                  </p>
                </div>
              </div>
              <div className="col-6 col-md-6 col-lg-3 mb-4">
                <div className="feature">
                  <div className="icon">
                    <img src={bag} alt="Image" className="imf-fluid" />
                  </div>
                  <h3>Easy to Shop</h3>
                  <p>
                    Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                    aliquet velit. Aliquam vulputate.
                  </p>
                </div>
              </div>
              <div className="col-6 col-md-6 col-lg-3 mb-4">
                <div className="feature">
                  <div className="icon">
                    <img src={supports} alt="Image" className="imf-fluid" />
                  </div>
                  <h3>24/7 Support</h3>
                  <p>
                    Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                    aliquet velit. Aliquam vulputate.
                  </p>
                </div>
              </div>
              <div className="col-6 col-md-6 col-lg-3 mb-4">
                <div className="feature">
                  <div className="icon">
                    <img src={returns} alt="Image" className="imf-fluid" />
                  </div>
                  <h3>Hassle Free Returns</h3>
                  <p>
                    Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                    aliquet velit. Aliquam vulputate.
                  </p>
                </div>
              </div>
              <div className="col-6 col-md-6 col-lg-3 mb-4">
                <div className="feature">
                  <div className="icon">
                    <img src={truck} alt="Image" className="imf-fluid" />
                  </div>
                  <h3>Fast &amp; Free Shipping</h3>
                  <p>
                    Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                    aliquet velit. Aliquam vulputate.
                  </p>
                </div>
              </div>
              <div className="col-6 col-md-6 col-lg-3 mb-4">
                <div className="feature">
                  <div className="icon">
                    <img src={bag} alt="Image" className="imf-fluid" />
                  </div>
                  <h3>Easy to Shop</h3>
                  <p>
                    Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                    aliquet velit. Aliquam vulputate.
                  </p>
                </div>
              </div>
              <div className="col-6 col-md-6 col-lg-3 mb-4">
                <div className="feature">
                  <div className="icon">
                    <img src={supports} alt="Image" className="imf-fluid" />
                  </div>
                  <h3>24/7 Support</h3>
                  <p>
                    Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                    aliquet velit. Aliquam vulputate.
                  </p>
                </div>
              </div>
              <div className="col-6 col-md-6 col-lg-3 mb-4">
                <div className="feature">
                  <div className="icon">
                    <img src={returns} alt="Image" className="imf-fluid" />
                  </div>
                  <h3>Hassle Free Returns</h3>
                  <p>
                    Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                    aliquet velit. Aliquam vulputate.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Services;
