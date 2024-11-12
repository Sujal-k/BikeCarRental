import React from 'react';
import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">Rent-a-Ride</div>
      <nav>
        <a href="#home">Home</a>
        <a href="#ride">Ride</a>
        <a href="#services">Services</a>
        <a href="#about">About</a>
        <a href="#reviews">Reviews</a>
      </nav>
      <div className="auth-buttons">
        <button className="signup-btn">Sign Up</button>
        <button className="signin-btn">Sign In</button>
      </div>
    </header>
  );
}

export default Header;
