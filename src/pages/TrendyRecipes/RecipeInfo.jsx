import React, { useState, useEffect } from 'react'; // Import useState and useEffect hooks
import { useParams } from 'react-router-dom'; // Import useParams for URL parameters

const RecipeInfo = () => {
    const [item, setItem] = useState(null); // Initialize state to store the fetched recipe item
    const { MealId } = useParams(); // Get MealId from URL parameters

    useEffect(() => {
        // Fetch recipe details when MealId changes
        if (MealId) {
            fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${MealId}`) // API call to fetch recipe details
                .then(res => {
                    if (!res.ok) {
                        throw new Error(`HTTP error! status: ${res.status}`); // Error handling for non-200 responses
                    }
                    return res.json(); // Parse the response as JSON
                })
                .then(data => {
                    console.log(data.meals[0]); // Log the fetched meal data
                    setItem(data.meals[0]); // Set the fetched meal data to state
                })
                .catch(err => console.error('Error fetching recipe:', err)); // Catch and log any errors
        }
    }, [MealId]); // Dependency array to re-run effect when MealId changes

    // Extract video ID from the recipe's YouTube link
    let vId = ""; // Initialize video ID variable
    if (item && item.strYoutube) {
        const url = item.strYoutube; // Get YouTube URL from item
        const str = url.split("="); // Split URL to extract the video ID
        vId = str[str.length - 1]; // Get the last segment as the video ID
    } else {
        console.warn("YouTube URL is not available.");
    }

    return (
        <>
            {!item ? ( // Conditional rendering based on item state
                <p>Loading...</p> // Display loading text while fetching
            ) : (
                <div className="content">
                    <img src={item.strMealThumb} alt={item.strMeal} /> {/* Display meal thumbnail */}
                    <div className="inner-content">
                        <h1>{item.strMeal}</h1> {/* Display meal name */}
                        <h2>{item.strArea} Food</h2> {/* Display meal area */}
                        <h3>Category: {item.strCategory}</h3> {/* Display meal category */}
                    </div>
                    <div className="recipe-details">
                        <div className="ingredients">
                            <h2>Ingredients</h2>
                            {/* Loop through ingredients and measures */}
                            {[...Array(20)].map((_, index) => {
                                const ingredient = item[`strIngredient${index + 1}`]; // Get ingredient
                                const measure = item[`strMeasure${index + 1}`]; // Get measurement
                                return ingredient ? (
                                    <h4 key={index}>{ingredient}: {measure}</h4> // Display ingredient and measure
                                ) : null;
                            })}
                        </div>
                    </div>
                    <div className="instructions">
                        <h2>Instructions</h2> <br />
                        {item.strInstructions ? (
                            <h4>{item.strInstructions}</h4> // Display instructions if available
                        ) : (
                            <h4>No instructions available.</h4> // Fallback message if no instructions
                        )}
                    </div>
                    <div className="video">
                        <h2>Video Tutorial</h2>
                        <iframe
                            width="560"
                            height="315"
                            src={`https://www.youtube.com/embed/${vId}`} // Embed video using the extracted video ID
                            title="YouTube video tutorial"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                </div>
            )}
        </>
    );
};

export default RecipeInfo; // Export the RecipeInfo component

