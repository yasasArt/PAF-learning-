import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">Logo</div>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="right-icons">
        <span>🔔</span> {/* Notifications Icon */}
        <span>👤</span> {/* Profile Icon */}
      </div>
    </div>
  );
};

export default Navbar;
