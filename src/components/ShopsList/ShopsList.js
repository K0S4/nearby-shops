import React from "react";
import "./shops-list.css";
import Shop from "../Shop/Shop";
import {ClipLoader} from "react-spinners";

function ShopsList(props) {
  const loading = props.shops == null;
  function displayShop(name, distance, openingHours) {
    return (
      <Shop
        key={name}
        name={name}
        distance={distance}
        isOpen={openingHours.open_now}
      />
    );
  }
  if (loading) {
    return (
      <div className="loader">
      <ClipLoader
        size={100}
        color={"#123abc"}
        loading={loading}
      />
      </div>
    );
  }

  return (
    <ul className="shops-list">
      {props.shops.map(shop => displayShop(shop.name, 0, shop.openingHours))}
    </ul>
  );
}

export default ShopsList;
