import React from "react";
import "./FoodItem.css";

export default function FoodItem(props) {
  const { dishName, currency, price } = props;
  return (
    <div className="food-container">
      {/* dish name */}
      <span className="dish-name">{dishName}</span>

      {/* currency & price */}
      <span className="dish-price">
        {currency}
        {price}
      </span>
    </div>
  );
}
