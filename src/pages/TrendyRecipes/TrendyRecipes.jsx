import React, { useState, useEffect } from 'react'; // Import React and hooks
import './TrendyRecipes.css'; // Import CSS for styling
import TrendyRecipeItem from './TrendyRecipeItem'; // Import TrendyRecipeItem component
import RecipeIndex from './RecipeIndex'; // Import RecipeIndex component

const TrendyRecipes = () => {
  // Initialize state variables
  const [url, setUrl] = useState('https://www.themealdb.com/api/json/v1/1/search.php?f=a'); // Default API URL
  const [item, setItem] = useState([]); // State to store fetched recipe items
  const [search, setSearch] = useState(""); // State for search input

  useEffect(() => {
    // Fetch data from the API when the URL changes
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.meals); // Log fetched meals
        setItem(data.meals || []); // Store fetched meals or set to empty array if undefined
      })
      .catch((err) => console.error('Error fetching data:', err)); // Log any errors
  }, [url]); // Dependency array to refetch data when URL changes

  const setIndex = (alpha) => {
    // Update URL based on selected alphabet index
    setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?f=${alpha}`); // Use backticks for string interpolation
  };

  const searchRecipe = (evt) => {
    // Search for a recipe when Enter key is pressed
    if (evt.key === "Enter") {
      setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`); // Corrected URL with backticks
    }
  };

  return (
    <div className='main'>
      <div className="heading">
        <h1>What's Cooking?</h1>
        <h4>
          Discover a world of flavors with our collection of handpicked recipes. We've got something for everyone!
        </h4>
      </div>

      <div className="searchBox">
        <input
          type="search"
          className="search-bar"
          placeholder="Search..."
          onChange={e => setSearch(e.target.value)} // Update search state on input change
          onKeyPress={searchRecipe} // Search for recipes on Enter key press
        />
      </div>

      <div className="container">
        {item.length > 0 ? (
          item.map((recipe, index) => (
            <TrendyRecipeItem key={index} recipe={recipe} /> // Render TrendyRecipeItem for each recipe
          ))
        ) : (
          <p>No recipes found</p> // Display message if no recipes are found
        )}
      </div>

      <div className="indexContainer">
        <RecipeIndex alphaIndex={setIndex} /> {/* Pass the setIndex function to RecipeIndex */}
      </div>
    </div>
  );
};

export default TrendyRecipes; // Export the TrendyRecipes component






