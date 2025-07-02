import React from 'react';
import './Navbar.css';
import logoImg      from '../../assets/logo_website-removebg-preview.png';
import shoppingCart from '../../assets/shopping.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logoImg}      alt="Logo"    className="logo" />
      <ul>
        <li>Home</li>
        <li>Shop</li>
        <li>Pages</li>
        <li>Blog</li>
        <li>Contact</li>
      </ul>
      <div className="search-box">
        <input type="text" placeholder="Search…" />
      </div>
      <img src={shoppingCart} alt="Shopping cart" className="pannel" />
      <button className="signIn-btn">Sign In</button>
    </nav>
  );
};

export default Navbar;
