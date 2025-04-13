import React from "react";
import '../css/nav.css'

function Nav() {
  return (
    <nav className="navbar">
      <h2 className="logo">📱 Mobile Store</h2>
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Mobiles</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Nav;
