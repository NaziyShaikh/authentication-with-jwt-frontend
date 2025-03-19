import React from 'react';
import ReactDOM from 'react-dom/client'; // Import from 'react-dom/client'
import App from './App';
import './styles.css';

const root = ReactDOM.createRoot(document.getElementById('root')); // Create a root
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);