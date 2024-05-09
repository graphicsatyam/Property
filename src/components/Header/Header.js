import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCalendarAlt, faProjectDiagram, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './Header.css'; // You can define your styles in a separate CSS file
import { Link } from "react-router-dom";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header>
      <div className="container">
        <div className="logo"> <img src="images/logo.png" alt="" /> </div>
        <button className="menu-toggle" onClick={toggleMenu}>
        <i class="fa-solid fa-circle-arrow-left" ></i>
        </button>
        <nav className={`menu ${showMenu ? 'open' : ''}`}>
          <ul>
            <li><Link to="/"><FontAwesomeIcon icon={faHome} /> Home</Link> </li>
            <li><Link to="/profile"><FontAwesomeIcon icon={faCalendarAlt} /> Company Profile </Link></li>
            <li> <Link to ="/project"><FontAwesomeIcon icon={faProjectDiagram} /> Project </Link></li>
            <li><Link to="/contact"><FontAwesomeIcon icon={faEnvelope} /> Contact Us </Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
