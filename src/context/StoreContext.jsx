import React, { createContext, useEffect, useState } from "react"; // Importing necessary React hooks
import { recipe_list } from "../assets/assets"; // Importing the recipe list from assets

// Creating a context for the store
export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {
    // State to manage cart items
    const [cartItems, setCartItems] = useState({});

    // Function to add an item to the cart
    const addtoCart = (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({ ...prev, [itemId]: 1 })); // If item is not in cart, add it with quantity 1
        } else {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 })); // Increment quantity if item already in cart
        }
    };

    // Function to remove an item from the cart
    const removefromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 })); // Decrement quantity of item
    };

    // Effect to log cart items whenever they change
    useEffect(() => {
        console.log(cartItems);
    }, [cartItems]);

    // Context value to be provided to components
    const ContextValue = {
        recipe_list, // List of recipes
        cartItems, // Current items in the cart
        setCartItems, // Function to update cart items
        addtoCart, // Function to add items to the cart
        removefromCart, // Function to remove items from the cart
    };

    return (
        <StoreContext.Provider value={ContextValue}>
            {children} {/* Rendering child components */}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider; // Exporting StoreContextProvider for use in other parts of the application

