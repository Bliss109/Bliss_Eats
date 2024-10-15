import React, { useState } from 'react'; // Import React and useState hook

const RecipeIndex = ({ alphaIndex }) => { // Accepting alphaIndex as a prop
    const [activeLetter, setActiveLetter] = useState(null); // State to track the active letter
    // Create an array of letters A-Z
    const alpha = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));

    // Function to handle letter click
    const handleClick = (item) => {
        setActiveLetter(item); // Set the clicked letter as active
        alphaIndex(item); // Call the alphaIndex function with the clicked letter
    };

    return (
        <>
            {alpha.map((item, index) => (
                <div
                    className={`numBox ${activeLetter === item ? "active" : ""}`} // Apply active class conditionally
                    key={index} // Use index as key for the mapped items
                    onClick={() => handleClick(item)} // Call handleClick when clicked
                >
                    <h3>{item}</h3>
                </div>
            ))}
        </>
    );
}

export default RecipeIndex; // Export the RecipeIndex component




