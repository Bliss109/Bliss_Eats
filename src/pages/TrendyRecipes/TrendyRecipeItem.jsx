import React from 'react';
import { useNavigate } from 'react-router-dom';

const TrendyRecipeItem = ({ recipe }) => {
  // Log the recipe object for debugging
  console.log(recipe);
  let navigate = useNavigate();

  // Return null if recipe is undefined or null
  if (!recipe) return null;

  return (
    <div 
      className="card" 
      key={recipe.idMeal} // Use `recipe.idMeal` instead of `RecipeItem.idMeal`
      onClick={() => navigate(`/${recipe.idMeal}`)} // Use backticks for template literals
    >
      <img src={recipe.strMealThumb} alt={recipe.strMeal} />
      <h3>{recipe.strMeal}</h3>
    </div>
  );
};

export default TrendyRecipeItem;



