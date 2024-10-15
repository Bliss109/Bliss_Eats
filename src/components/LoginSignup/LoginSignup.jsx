import React, { useState } from 'react';
import './LoginSignup.css';
import { assets } from '../../assets/assets';

const LoginSignup = ({ setShowLogin }) => {
    const [currState, setCurrState] = useState("Sign Up");
    const [isChecked, setIsChecked] = useState(false); // State for checkbox
    const [name, setName] = useState(''); // State for name input
    const [email, setEmail] = useState(''); // State for email input
    const [password, setPassword] = useState(''); // State for password input

    // Function to toggle between Sign Up and Login
    const toggleState = () => {
        setCurrState(currState === "Sign Up" ? "Login" : "Sign Up");
        setIsChecked(false); // Reset checkbox when toggling states
        setName(''); // Reset name field
        setEmail(''); // Reset email field
        setPassword(''); // Reset password field
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission

        if (isChecked) {
            const userData = { email, password, name: currState === "Sign Up" ? name : undefined };

            if (currState === "Sign Up") {
                // Add signup logic here (e.g., API call)
                console.log("Signing up with:", userData);
            } else {
                // Add login logic here (e.g., API call)
                console.log("Logging in with:", { email, password });
            }
            setShowLogin(false); // Close the login popup after submission
        } else {
            alert("You must agree to the terms of use and privacy policy.");
        }
    };

    return (
        <div className='login-signup'>
            <form onSubmit={handleSubmit} className="login-signup-form">
                <div className="login-signup-title">
                    <h2>{currState}</h2>
                    <img
                        onClick={() => setShowLogin(false)} // Close the form when icon is clicked
                        src={assets.cross_icon}
                        alt="Close"
                        className="close-icon"
                    />
                </div>
                <div className="login-signup-inputs">
                    {currState === "Login" ? null : (
                        <input
                            type="text"
                            placeholder='Your name'
                            required
                            aria-label="Your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)} // Update name state
                        />
                    )}
                    <input
                        type="email"
                        placeholder='Your email'
                        required
                        aria-label="Your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} // Update email state
                    />
                    <input
                        type="password"
                        placeholder='Password'
                        required
                        aria-label="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} // Update password state
                    />
                </div>
                <button type="submit">
                    {currState === "Sign Up" ? "Create account" : "Login"}
                </button>
                <p onClick={toggleState} className="toggle-state">
                    {currState === "Sign Up" ? "Already have an account? Login" : "Don't have an account? Sign Up"}
                </p>
                <div className="login-signup-condition">
                    <input
                        type="checkbox"
                        className="checkbox"
                        checked={isChecked}
                        onChange={() => setIsChecked(!isChecked)} // Toggle checkbox state
                        required
                        aria-label="Agree to terms"
                    />
                    <label htmlFor="terms-checkbox">
                        By continuing, I agree to the terms of use and privacy policy
                    </label>
                </div>
            </form>
        </div>
    );
};

export default LoginSignup;



