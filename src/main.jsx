import React from 'react'; // Import React
import ReactDOM from 'react-dom/client'; // Import the createRoot function from React DOM
import App from './App.jsx'; // Import the main App component
import './index.css'; // Import the global CSS styles
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter for routing
import StoreContextProvider from './context/StoreContext.jsx'; // Import context provider for state management

// Render the application
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter> {/* Wrap the application in BrowserRouter for routing */}
    <StoreContextProvider> {/* Wrap the application in StoreContextProvider for global state management */}
      <App /> {/* Main application component */}
    </StoreContextProvider>
  </BrowserRouter>
);
