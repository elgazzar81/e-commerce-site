import React, { useState } from 'react';
import './Navbar.css';
import logoImg      from '../../assets/logo_website-removebg-preview.png';
import shoppingCart from '../../assets/shopping.png';
import { FaSearch, FaBars, FaTimes } from 'react-icons/fa';
const Navbar = () => {
  const [menuOpen, setmenuOpen]=useState(false);
  return (
    <nav className="navbar">
      <img src={logoImg}      alt="Logo"    className="logo" />
      <button className='hamburger'
      onClick={()=>setmenuOpen(open => !open)}
      aria-label='Toggle Navigation'>
       {menuOpen ?<FaTimes size={24}/> :<FaBars size={24}/>}
      </button>
      <ul className={menuOpen ? 'nav-links open': 'nav-links'}>
        <li>Home</li>
        <li>Shop</li>
        <li>Pages</li>
        <li>Blog</li>
        <li>Contact</li>
      </ul>
      <div className="search-box">
        <FaSearch className='search-icon'/>
        <input type="text" placeholder="Search…" />
      </div>
      <img src={shoppingCart} alt="Shopping cart" className="pannel" />
      <button className="signIn-btn">Sign In</button>
    </nav>
  );
};

export default Navbar;
