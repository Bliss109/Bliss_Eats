import React from 'react';
import './Explore.css';
import { explore } from '../../assets/assets'; // Import explore data from assets

const Explore = ({ category, setCategory }) => {
  return (
    <div className='explore_recipe' id='explore_recipe'>
      <h1>Food For Thought</h1>
      <p className='explore_recipe_text'>
        {/* Description paragraph for the section */}
        Craving something more than just a meal? Dive into our culinary cosmos where every dish is a journey of flavor and inspiration.
        From comforting classics to bold and innovative creations, our recipes will tantalize your taste buds and ignite your imagination.
      </p>

      <div className="explore-recipe-list">
        {explore.map((item, index) => (
          <div
            key={index}
            onClick={() => setCategory(prev => prev === item.recipe_name ? "All" : item.recipe_name)}
            className='explore-recipe-list-item'
          >
            {/* Image and recipe name for each item */}
            <img
              className={category === item.recipe_name ? "active" : ""}
              src={item.recipe_image}
              alt={item.recipe_name}
            />
            <p>{item.recipe_name}</p>
          </div>
        ))}
      </div>

      <hr id='hr' /> {/* Horizontal line at the end */}
    </div>
  );
}

export default Explore;

