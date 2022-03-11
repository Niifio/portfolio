import React from "react";
import "./clock.css";

const Clock = ({ second, minute, hour }) => {
  return (
    <div className="clock-circle">
      <div className="point"></div>
      <div className="hour hour-1">
        <p>1</p>
      </div>
      <div className="hour hour-2">
        <p>2</p>
      </div>
      <div className="hour hour-3">
        <p>3</p>
      </div>
      <div className="hour hour-4">
        <p>4</p>
      </div>
      <div className="hour hour-5">
        <p>5</p>
      </div>
      <div className="hour hour-6">
        <p>6</p>
      </div>
      <div className="hour hour-7">
        <p>7</p>
      </div>
      <div className="hour hour-8">
        <p>8</p>
      </div>
      <div className="hour hour-9">
        <p>9</p>
      </div>
      <div className="hour hour-10">
        <p>10</p>
      </div>
      <div className="hour hour-11">
        <p>11</p>
      </div>
      <div className="hour hour-12">
        <p>12</p>
      </div>
      <div
        className="minute-hand-wrapper"
        id="minute-hand"
        style={{ transform: `rotate(${minute}deg)` }}
      >
        <div className="minute-hand">
          <div className="hand"></div>
        </div>
      </div>
      <div
        className="hour-hand-wrapper"
        id="hour-hand"
        style={{ transform: `rotate(${hour}deg)` }}
      >
        <div className="hour-hand">
          <div className="hand"></div>
        </div>
      </div>
      <div
        className="second-hand-wrapper"
        id="second-hand"
        style={{ transform: `rotate(${second}deg)` }}
      >
        <div className="second-hand">
          <div className="hand"></div>
        </div>
      </div>
    </div>
  );
};

export default Clock;
