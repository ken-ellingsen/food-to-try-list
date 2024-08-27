import React, { useState } from "react";
import NewFoodInput from "./NewFoodInput";
import "./styles.css";

export default function App() {

  const [foodsToTry, setFoodsToTry] = useState([]);
  const addFoodItem = (foodItem) => setFoodsToTry(...foodsToTry.push(foodItem));

  return (
    <div className="App">
      <h1>New Foods to Try</h1>
      <NewFoodInput />
      <ul className="food-list">
        {foodsToTry.map((food, index) =>(
            <li key={index}>{food}</li>
        ))}
      </ul>
    </div>
  );
}
