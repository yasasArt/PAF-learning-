// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Feeds from './components/Feeds'; // Updated to match the correct name
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Feeds /> {/* This should render the Feeds component */}
    </div>
  );
}

export default App;
