import React, { useState } from 'react'; // Import React and useState hook
import Navbar from './components/navbar/Navbar'; // Import Navbar component
import { Route, Routes } from 'react-router-dom'; // Import Route and Routes from react-router-dom
import Home from './pages/Home/Home'; // Import Home page component
import TrendyRecipes from './pages/TrendyRecipes/TrendyRecipes'; // Import TrendyRecipes page component
import RecipeInfo from './pages/TrendyRecipes/RecipeInfo'; // Import RecipeInfo component for detailed recipe view
import LoginSignup from './components/LoginSignup/LoginSignup'; // Import LoginSignup component
import Cart from './pages/Cart/Cart'; // Import Cart page component

const App = () => {
  // State to control the visibility of the login/signup modal
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className='app'>
      {/* Render LoginSignup component if showLogin is true */}
      {showLogin && <LoginSignup setShowLogin={setShowLogin} />}
      {/* Pass setShowLogin to LoginSignup for closing the modal */}

      <Navbar setShowLogin={setShowLogin} /> {/* Pass setShowLogin to Navbar to control login visibility */}

      <Routes>
        {/* Define the application's routes */}
        <Route path='/' element={<Home />} /> {/* Home page route */}
        <Route path='/TrendyRecipes' element={<TrendyRecipes />} /> {/* TrendyRecipes page route */}
        <Route path='/Cart' element={<Cart />} /> {/* Cart page route */}
        <Route path="/:MealId" element={<RecipeInfo />} /> {/* Dynamic route for RecipeInfo with MealId */}
      </Routes>
    </div>
  );
};

export default App; // Export the App component


