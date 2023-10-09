import React from 'react';
import Pantry from 'pages/Pantry.js'

const IngredientList = ({ ingredient, onAddIngredient, onRemoveIngredient }) => {

  //Amount needs to be dynamic
  return (
    <li class="foodList" key={ingredient.id}>
      {ingredient.name} (Amt: {ingredient.quantity})
  
      <button onClick={() => onAddIngredient(ingredient)}>Add</button>
      <button onClick={() => onRemoveIngredient(ingredient)}>Remove</button>
    </li>
  );
};
export default IngredientList;