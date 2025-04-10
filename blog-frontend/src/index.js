// src/index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './index.css';
import axios from 'axios'; // ✅ Import axios to use token globally

// ✅ Get token from localStorage and apply it to all axios requests
const token = localStorage.getItem('token');
if (token) {
  axios.defaults.headers.common['Authorization'] = `Token ${token}`;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
      <App />
   
  </React.StrictMode>
);
