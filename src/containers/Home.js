import React, { useState, useEffect } from "react";
import Clock from "../components/Clock";
import Calendar from "../components/Calendar";
import LinkButtons from "../components/LinkButtons";
import { link } from "../data";
import { motion } from "framer-motion";
import { ReactComponent as MySvg } from "../components/bg.svg";
import mypics from "../images/mypics.png";

import "./home.css";
const Home = () => {
  const [clock, setClock] = useState({
    second: 0,
    minute: 0,
    hour: 0,
  });

  const [calendar, setCalendar] = useState({
    month: "",
    weekday: "",
    daynum: "",
    year: "",
  });

  const runClock = () => {
    const date = new Date();
    let secondTime = date.getSeconds() * 6;
    let minuteTime = date.getMinutes() * 6;
    let hourTime = date.getHours() * 30 + Math.round(minuteTime / 12);
    setClock({ second: secondTime, minute: minuteTime, hour: hourTime });
  };
  useEffect(() => {
    setInterval(() => {
      runClock();
    }, 1000);
    return clearInterval(runClock);
  }, []);

  const { second, minute, hour } = clock;

  const calendarTime = () => {
    const lang = "en-Us";
    let dateTime = new Date();
    let dayNumber = dateTime.getDate();
    let dayName = dateTime.toLocaleString(lang, { weekday: "long" });
    // let month = dateTime.getMonth();
    let monthName = dateTime.toLocaleString(lang, { month: "long" });
    let year = dateTime.getFullYear();
    setCalendar({
      month: monthName,
      weekday: dayName,
      daynum: dayNumber,
      year: year,
    });
  };

  useEffect(() => {
    calendarTime();
  }, []);

  const { month, weekday, daynum, year } = calendar;

  return (
    <div className="app__home">
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 0.2 }}
      >
        <div className="app__home-content">
          <div className="app__home_left-card">
            <Clock second={second} minute={minute} hour={hour} />
            <Calendar
              month={month}
              weekday={weekday}
              daynum={daynum}
              year={year}
            />
          </div>
          <div className="app__home_profile">
            <MySvg className="app__home_profile-mysvg" />
            <div className="app__home_profile-header">
              <div className="app__home_profile-pic">
                <img src={mypics} alt="mypics" />
              </div>

              <div className="app__home_profile-text">
                <h1>Hello, my name is Joseph.</h1>
                <p className="subtitle">Welcome to my website!</p>
              </div>
            </div>
          </div>

          <div className="app__home_right-card">
            <div className="app__home_right-card-list">
              {link.map((list) => {
                const { id, address, name } = list;
                return (
                  <div key={id}>
                    <LinkButtons address={address} name={name} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
