import React from "react";
import logo from "../assets/logo.png";
import shirt from "../assets/shirt.png";

function Landing() {
  return (
    <section id="landing">
      <header>
        <div className="header_container">
          <div className="header_description">
            <h1>Women</h1>
          </div>
          <div className="card-container">
            <div className="card">
              <img src={logo} alt="" />
              <div className="card-content">
                <h3>First Item</h3>
                <p>$9.99</p>
              </div>
            </div>
            <div className="card">
              <img src={logo} alt="" />
              <div className="card-content">
                <h3>First Item</h3>
                <p>$9.99</p>
              </div>
            </div>
            <div className="card">
              <img src={logo} alt="" />
              <div className="card-content">
                <h3>First Item</h3>
                <p>$9.99</p>
              </div>
            </div>
            <div className="card">
              <img src={shirt} alt="" />
              <div className="card-content">
                <h3>First Item</h3>
                <p>$9.99</p>
              </div>
            </div>
            <div className="card">
              <img src={shirt} alt="" />
              <div className="card-content">
                <h3>First Item</h3>
                <p>$9.99</p>
              </div>
            </div>
            <div className="card">
              <img src={logo} alt="" />
              <div className="card-content">
                <h3>First Item</h3>
                <p>$9.99</p>
              </div>
            </div>
          </div>
        </div>
      </header>
    </section>
  );
}

export default Landing;
