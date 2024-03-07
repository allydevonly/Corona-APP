import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <Link to="/Home">
        <img src="images\3131147.png" alt="Logo" />
          </Link>
      </div>
      <div className="navbar-right">
        <Link to="/Conseil" >
        <button>Conseil</button>
        </Link >

        <Link to="/Home" >
        <button>Accueil</button>
        </Link>
        <Link to="/erro">
        <button className='ARBTN'>عربي</button>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;