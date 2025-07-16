import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import person1 from "../assets/person_1.jpg";
import person2 from "../assets/person_2.jpg";
import person3 from "../assets/person_3.jpg";

const Testimonial = () => {
  const options = {
    items: 1,
    autoplay: true,
    autoplayTimeout: "3000",
    animateOut: "slideOutUp",
    dots: true,
    margin: 10,
    nav: false,
  };
  return (
    <section>
      <div className="row" style={{ textAlign: "center" }}>
        <h2 className="section-title">Testimonials</h2>
      </div>

      <OwlCarousel className="owl-theme" {...options}>
        <div
          className="item"
          style={{
            textAlign: "center",
          }}
        >
          <p>
            “Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
            quis nisl dapibus lelit.
          </p>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              src={person3}
              alt="Maria Jones"
              style={{
                height: "100px",
                width: "100px",
                borderRadius: "50px",
              }}
            />
          </div>
        </div>

        <div
          className="item"
          style={{
            textAlign: "center",
          }}
        >
          <p>
            “Donec facilisis qutis. Donec vitae odio quis nisl dapibus male ac
            aliquet velit.
          </p>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              src={person2}
              alt="Maria Jones"
              style={{
                height: "100px",
                width: "100px",
                borderRadius: "50px",
              }}
            />
          </div>
        </div>

        <div
          className="item"
          style={{
            textAlign: "center",
          }}
        >
          <p>
            “Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
            quis nisl dapibus malesuada. us malesuada. Nullam ac aliq.
          </p>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              src={person1}
              alt="Maria Jones"
              style={{
                height: "100px",
                width: "100px",
                borderRadius: "50px",
              }}
            />
          </div>
        </div>
      </OwlCarousel>
    </section>
  );
};

export default Testimonial;
