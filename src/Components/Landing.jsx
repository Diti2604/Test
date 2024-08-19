import React from "react";
import logo from "../assets/logo.png";

function Landing() {
  return (
    <section id="landing">
      <header>
        <div className="header_container">
          <div className="header_description">
            <h1>Women</h1>
          </div>
          <div className="product-card">
              <img className="product-card__image" alt="logo" src={logo} />
              <p className="product-card__name">Name</p>
              <p className="product-card__price">Price</p>
          </div>
        </div>
      </header>
    </section>
  );
}

export default Landing;
