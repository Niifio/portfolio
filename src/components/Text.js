import React from "react";
import "./text.css";
const Text = () => {
  return (
    <div className="text__app">
      <div className="wrapper">
        <div className="static-txt"></div>
        <ul className="dynamic-txts">
          <li>
            <span>Web Developer</span>
          </li>
          <li>
            <span>Frontend Developer</span>
          </li>
          <li>
            <span>React Developer</span>
          </li>
          <li>
            <span>Javascript Developer</span>
          </li>
          <li>
            <span>MERN Developer</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Text;
