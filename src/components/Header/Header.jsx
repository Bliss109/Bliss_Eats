import React from 'react';
import './Header.css';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate(); // Hook to navigate programmatically

  // Function to navigate to the TrendyRecipes page on button click
  const handleExploreClick = () => {
    navigate('/TrendyRecipes');
  };

  return (
    <div className="header"> {/* Header container */}
      <div className="header-content"> {/* Content within the header */}
        <h2>From Kitchen To Table! Your Recipe Haven</h2> {/* Title */}
        <p>Unleash your inner chef and transform everyday meals into extraordinary experiences with just a few taps!</p> {/* Description */}
        <button onClick={handleExploreClick}>Explore</button> {/* Explore button */}
      </div>
    </div>
  );
};

export default Header;

