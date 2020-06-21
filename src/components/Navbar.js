import React, { useState } from 'react';
import { Link } from "react-router-dom";
export default function Navbar() {
 const [isMenuOpen, setIsMenuOpen] = useState(false);
 return (
  <nav>
   <div className="navbar-brand">
    <Link to="#">Logo</Link>
   </div>
   <div className="menu">
    <button onClick={() => setIsMenuOpen(!isMenuOpen)} id="btn-menu-barras" className="btn-menu-barras"><i className="fas fa-bars"></i></button>
   </div>
   <ul className={isMenuOpen ? "main-nav isopen" : "main-nav"}>
    <li className="nav-item">
     <Link className="nav-link" to="/">
      Home
    </Link>
    </li>
    <li className="nav-item">
     <Link className="nav-link" to="/">
      About
    </Link>
    </li>
    <li className="nav-item">
     <Link className="nav-link" to="/">
      Contact
    </Link>
    </li>
   </ul>
  </nav>
 )
}
