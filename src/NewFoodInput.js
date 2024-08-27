import React, { useState } from "react";

const NewFoodInput = () => {

  const [food, setFood] = useState(""); // Initiates food state
  const updateFood = (e) => setFood(e.target.value); // Allows state to be changed with user input

  return (
    <form className="food-form">
      <input type="text" value={food} onChange={updateFood} />
      <button>Add to the list!</button>
    </form>
  );
};

export default NewFoodInput;
