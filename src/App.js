import React, { useState } from "react";
import NewFoodInput from "./NewFoodInput";
import Food from "./Food";
import "./styles.css";

export default function App() {

  const [foodsToTry, setFoodsToTry] = useState([]); // Initiates foodsToTry state
  const addFoodItem = (foodItem) => setFoodsToTry([...foodsToTry, foodItem]); // Adds food item to foodsToTry array

  return (
    <div className="App">
      <h1>New Foods to Try</h1>
      <NewFoodInput addFoodItem={addFoodItem} setFoodsToTry={setFoodsToTry} />
      <ul className="food-list">
        {foodsToTry.map((food, index) =>(
          <Food key={index} food={food}/>
        ))}
      </ul>
    </div>
  );
}
