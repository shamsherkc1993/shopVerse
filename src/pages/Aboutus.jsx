import React from "react";
import Layout from "../layouts/Layout";
import "./Aboutus.css";
import whychooseus from "../assets/why-choose-us-img.jpg";
import truck from "../assets/truck.svg";
import bag from "../assets/bag.svg";
import support from "../assets/support.svg";
import returns from "../assets/return.svg";

const Aboutus = () => {
  return (
    <Layout>
      <div className="hero">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <div className="intro-excerpt">
                <h1 className="about">About Us</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="why-choose-section">
        <div class="container">
          <div class="row justify-content-between align-items-center">
            <div class="col-lg-6">
              <h2 class="section-title">Why Choose Us</h2>
              <p>
                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
              </p>

              <div class="row my-5">
                <div class="col-6 col-md-6">
                  <div class="feature">
                    <div class="icon">
                      <img src={truck} alt="Image" class="imf-fluid" />
                    </div>
                    <h3>Fast &amp; Free Shipping</h3>
                    <p>
                      Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                      aliquet velit. Aliquam vulputate.
                    </p>
                  </div>
                </div>

                <div class="col-6 col-md-6">
                  <div class="feature">
                    <div class="icon">
                      <img src={bag} alt="Image" class="imf-fluid" />
                    </div>
                    <h3>Easy to Shop</h3>
                    <p>
                      Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                      aliquet velit. Aliquam vulputate.
                    </p>
                  </div>
                </div>

                <div class="col-6 col-md-6">
                  <div class="feature">
                    <div class="icon">
                      <img src={support} alt="Image" class="imf-fluid" />
                    </div>
                    <h3>24/7 Support</h3>
                    <p>
                      Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                      aliquet velit. Aliquam vulputate.
                    </p>
                  </div>
                </div>

                <div class="col-6 col-md-6">
                  <div class="feature">
                    <div class="icon">
                      <img src={returns} alt="Image" class="imf-fluid" />
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

            <div class="col-lg-5">
              <div class="img-wrap">
                <img src={whychooseus} alt="Image" class="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Aboutus;
