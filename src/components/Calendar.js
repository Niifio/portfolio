import React from "react";
import "./calendar.css";

const Calendar = ({ month, weekday, daynum, year }) => {
  return (
    <div className="app__calendar">
      <div className="calendar__content">
        <div className="calendar__month">{month}</div>
        <p className="calendar__weekday">{weekday}</p>
        <p className="calendar__daynum">{daynum}</p>
        <p className="calendar__year">{year}</p>
      </div>
    </div>
  );
};

export default Calendar;
