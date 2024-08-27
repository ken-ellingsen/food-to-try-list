import React, { useState } from "react";

const NewFoodInput = (props) => {

  const [food, setFood] = useState(""); // Initiates food state
  const updateFood = (e) => setFood(e.target.value); // Allows state to be changed with user input

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addFoodItem(food);
    setFood("");
  };

  return (
    <form className="food-form" onSubmit={handleSubmit}>
      <input type="text" value={food} onChange={updateFood} />
      <button>Add to the list!</button>
    </form>
  );
};

export default NewFoodInput;
