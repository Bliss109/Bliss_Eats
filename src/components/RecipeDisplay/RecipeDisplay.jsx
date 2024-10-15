import React, { useContext } from 'react';
import './RecipeDisplay.css'; // Import styles for RecipeDisplay component
import { StoreContext } from '../../context/StoreContext'; // Import context for global state
import RecipeItem from '../RecipeItem/RecipeItem'; // Import RecipeItem component

const RecipeDisplay = () => {
  // Accessing recipe_list from StoreContext
  const { recipe_list } = useContext(StoreContext);
  const category = "All"; // Default category to display all recipes

  return (
    <div className='recipe-display' id='recipe-display'>
      <h2>Irresistible Plates For You</h2>
      <div className="recipe-display-list">
        {recipe_list.map((item, index) => {
          console.log(category, item.category); // Debugging category filtering

          // Render RecipeItem if category matches or 'All' is selected
          if (category === "All" || category === item.category) {
            return (
              <RecipeItem
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                image={item.image}
                price={item.price}
                category={item.category}
              />
            );
          }
          return null; // Skip rendering if item does not match category
        })}
      </div>
    </div>
  );
};

export default RecipeDisplay;


