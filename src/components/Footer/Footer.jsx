import React from 'react';
import './Footer.css'; // Importing CSS for Footer styling
import { assets } from '../../assets/assets'; // Importing assets for the footer
import { Link } from 'react-router-dom'; // Importing Link for navigation

const Footer = () => {
  return (
    <div className='footer' id='footer'> {/* Main footer container */}
      <div className="footer-content"> {/* Container for footer content */}

        <div className="footer-content-left"> {/* Left section of the footer */}
          <img src={assets.logo_icon} alt="" id="logo" /> {/* Logo image */}
          <p>
            Explore new flavors, share your culinary creations, and connect with a vibrant community of food lovers.
            Join us on a journey of taste, creativity, and joy—because at Bliss Eats, every meal is a moment to savor!
          </p>
          <div className="footer-social-icons"> {/* Social media icons */}
            <img src={assets.facebook} alt="Facebook" />
            <img src={assets.instagram} alt="Instagram" />
            <img src={assets.twitter} alt="Twitter" />
          </div>
        </div>

        <div className="footer-content-center"> {/* Center section of the footer */}
          <h2>Bliss Eats</h2>
          <ul>
            <li><Link to='/'>Home</Link></li> {/* Navigation links */}
            <li><a href='#explore_recipe'>About Us</a></li>
            <li><Link to="/TrendyRecipes">Trendy Recipes</Link></li>
            <li><a href='#footer'>Contact Us</a></li>
          </ul>
        </div>

        <div className="footer-content-right"> {/* Right section of the footer */}
          <h2>Get In Touch</h2>
          <ul>
            <li id='no'>+254792268399</li> {/* Contact number */}
            <li>cindy.ogutu@strathmore.edu</li> {/* Contact email */}
          </ul>
        </div>

        <hr /> {/* Horizontal line separating footer sections */}
      </div>

      <p className="footer-copyright">
        Copyright 2024 &copy; BlissEats.com - All Rights Reserved.
      </p>
    </div>
  );
}

export default Footer; // Exporting Footer component for use in other parts of the application


