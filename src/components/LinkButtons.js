import React from "react";
import "./linkButtons.css";
import { Link } from "react-router-dom";
const LinkButtons = ({ id, address, name }) => {
  return (
    <div className="links__app">
      <button className="custom-btn btn-12">
        <span>
          <Link to={address} className="btn-links">
            {name}
          </Link>
        </span>
        <span className="btn-link">{name}</span>
      </button>
    </div>
  );
};

export default LinkButtons;
