import React, { useState } from 'react'; // Import React and useState hook
import Header from "../../components/Header/Header"; // Import Header component
import Explore from '../../components/Explore/Explore'; // Import Explore component
import RecipeDisplay from '../../components/RecipeDisplay/RecipeDisplay'; // Import RecipeDisplay component
import Footer from '../../components/Footer/Footer'; // Import Footer component
import AppDownload from '../../components/AppDownload/AppDownload'; // Import AppDownload component
import Navbar from '../../components/navbar/Navbar'; // Import Navbar component (if used, otherwise can be removed)

const Home = () => {
  const [category, setCategory] = useState("All"); // State for the selected recipe category, default is "All"

  return (
    <div>
      
      <Header /> 
      <Explore category={category} setCategory={setCategory} /> 
      <RecipeDisplay category={category} /> 
      <AppDownload />
      <Footer /> 
    </div>
  );
}

export default Home; // Export the Home component
