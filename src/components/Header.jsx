import React from "react";
import { useContext } from "react";
import { ProductContext } from "../hooks/ProductContext";
import { useState } from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import headerUserImage from "../assets/user.svg";
import headerCartImage from "../assets/cart.svg";
import "./Header.css";

const Header = () => {
  const [expanded, setExpanded] = useState(false);
  const { qty } = useContext(ProductContext);
  // console.log(qty, cart);

  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="md"
      expanded={expanded}
      className="custom-navbar"
    >
      <Container>
        <Navbar.Brand>
          <Link to="/">
            ShopVerse<span>.</span>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="navbarsFurni"
          onClick={() => setExpanded(!expanded)}
        />
        <Navbar.Collapse id="navbarsFurni">
          <Nav className="ms-auto mb-2 mb-md-0 custom-navbar-nav">
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/about-us">About Us</Link>
            <Link to="/service">Service</Link>
            <Link to="/contactus">Contact Us</Link>
          </Nav>

          <Nav className="ms-5 mb-2 mb-md-0 custom-navbar-cta">
            <Link to="/cart">
              <img src={headerUserImage} alt="User" />
            </Link>
            <Link to="/cart">
              <span>
                <img src={headerCartImage} alt="Cart" />
                <span
                  style={{
                    color: "#fff",
                    fontSize: "16px",
                    paddingLeft: "5px",
                    marginTop: "10px",
                    textDecoration: "none",
                  }}
                >
                  {qty}
                </span>
              </span>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
