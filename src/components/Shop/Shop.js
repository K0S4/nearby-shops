import React from "react";
import "./shop.css";

function Shop(props) {
  return (
    <li className={`shop ${props.isOpen ? "open" : "close"} `}>
      <div className="container">
        <p className="shop-name">{props.name}</p>
        <p className="distance">{props.distance}</p>
      </div>
      <p className="closing-hour">{props.closingHour}</p>
      <div>
        <a>
          <img
            className="google-maps-icon"
            alt="Go"
            src="/images/google-maps-icon.png"
          />
        </a>
      </div>
    </li>
  );
}

export default Shop;
