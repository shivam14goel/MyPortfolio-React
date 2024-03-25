import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className='Navbar'>
        <div className="nav-name">SHIVAM.Dev</div>
        <ul className='nav-list'>
          <li className="nav-item">
            <NavLink className="nav-link" to="/">HOME</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/About">ABOUT</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/Contact">CONTACT</NavLink>
          </li>
        </ul>
      </nav>

    </>
  );
};

export default Navbar;