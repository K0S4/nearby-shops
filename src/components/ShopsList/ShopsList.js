import React from "react";
import "./shops-list.css";
import Shop from "../Shop/Shop";

function ShopsList() {
  return (
    <ul className="shops-list">
      <Shop name="Delikatesy Centrum" distance="2km" closingHour="21:00" />
    </ul>
  );
}

export default ShopsList;
