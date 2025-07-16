import React from "react";
import "./Hero.css";
import heroImage from "../assets/couch.png";
import { Link } from "react-router";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-5">
            <div className="intro-excerpt">
              <h1>
                Modern Shopping <span clsas="d-block">User Friendly</span>
              </h1>
              <p className="mb-4">
                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
              </p>
              <p>
                <Link to="/shop" className="btn btn-secondary me-2">
                  Shop Now
                </Link>
                <Link to="/contactus" className="btn btn-white-outline">
                  Explore
                </Link>
              </p>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="hero-img-wrap">
              <img src={heroImage} className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
