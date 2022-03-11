import React from "react";
import { NavLink } from "react-router-dom";
const NavLinks = () => {
  return (
    <div className="navlinks__app-container">
      <div className="navlinks__app-content">
        <ul>
          <li>
            <NavLink
              exact="true"
              to="/"
              className="links"
              activeClassName="active"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              exact="true"
              to="/about"
              className="links"
              activeClassName="active"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              exact="true"
              to="/resume"
              className="links"
              activeClassName="active"
            >
              Resume
            </NavLink>
          </li>
          <li>
            <NavLink
              exact="true"
              to="/portfolio"
              className="links"
              activeclassname="active"
            >
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink
              exact="true"
              to="/contacts"
              className="links"
              activeClassName="active"
            >
              contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavLinks;
