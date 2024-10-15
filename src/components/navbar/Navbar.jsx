import React from 'react'; // Import React
import './Navbar.css'; // Import Navbar CSS styles
import { assets } from '../../assets/assets'; // Import asset images
import { Link, useLocation } from 'react-router-dom'; // Import Link and useLocation from React Router

const Navbar = ({ setShowLogin }) => {
    const location = useLocation(); // Get the current location
    const currentPath = location.pathname; // Get the current path

    // Function to check if a link is active based on the current path
    const isActive = (path) => (currentPath === path ? "active" : "");

    return (
        <div className='navbar'>
            <Link to='/'><img src={assets.logo_icon} alt="" className="logo" /> </Link> {/* Logo linking to Home */}
            <ul className="navbar-menu">
                {/* Navigation links */}
                <Link to='/'>Home</Link>
                <a href='#explore_recipe'>About Us</a>
                <Link to="/TrendyRecipes" >Trendy Recipes</Link>
                <a href='#footer' onClick={() => setRecipes("Contact Us")} className={isActive("#footer")}>Contact Us</a>
            </ul>
            <div className="navbar-right">
                {/* Link to Cart page with notification dot */}
                <Link to="/Cart" className="search-icon">
                    <img src={assets.list} alt="Saved Recipes" /> {/* Icon for Saved Recipes */}
                    <div className="dot"></div> {/* Notification dot */}
                </Link>
                {/* Button to show the login/signup modal */}
                <button onClick={() => setShowLogin(true)}>Sign In</button>
            </div>
        </div>
    );
}

export default Navbar; // Export Navbar component



