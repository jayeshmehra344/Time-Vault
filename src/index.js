import React from 'react';
import ReactDOM from 'react-dom/client';  // Import the correct method for React 18
  // Global styles (if you have index.css, otherwise remove this line)
import App from './App';  // Import the App component

const root = ReactDOM.createRoot(document.getElementById('root'));  // Create the root element
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
