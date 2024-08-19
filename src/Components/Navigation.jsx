import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"; // Import the specific icon
import logo from "../assets/logo.png";

function Navigation() {
  return (
    <nav>
      <div className="nav_container">

        <ul className="nav_links">
          <a href="/women">
            <li className="nav_list">WOMEN</li>
          </a>
          <a href="/men">
            <li className="nav_list">MEN</li>
          </a>
          <a href="/kids">
            <li className="nav_list">KIDS</li>
          </a>
        </ul>

        <a href="/">
          {" "}
          <img src={logo} alt="" />{" "}
        </a>

        <ul>
          <li className="nav_icon">
            <a href="/cart" className="nav_link">
              <FontAwesomeIcon
                icon={faCartShopping}
                className="navigation-cart"
              />{" "}
            </a>
          </li>
        </ul>
        
      </div>
    </nav>
  );
}

export default Navigation;
