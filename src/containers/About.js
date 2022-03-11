import React from "react";
import { motion } from "framer-motion";
import NavLinks from "../components/NavLinks";
import { Link } from "react-router-dom";
import jnt from "../images/jnt.JPG";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import Text from "../components/Text";

import "./about.css";

const About = () => {
  return (
    <div className="about__body">
      <NavLinks />
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 0.2 }}
      >
        <div className="app__about">
          <div className="app__about_container-top">
            <div className="app__about-img">
              <img src={jnt} alt="profile" className="profile-img" />
            </div>
            <div className="app__about-text">
              <h1>Joseph Niifio Tetteh</h1>
              <Text />
              <div className="app__about-icons">
                <a
                  href="https://www.facebook.com/josephniifio"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="app__about-icon">
                    <FaFacebookF />
                  </span>
                </a>
                <a
                  href="https://www.twitter.com/josephniifio"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="app__about-icon">
                    <FaTwitter />
                  </span>
                </a>
                <a
                  href="https://www.instagram.com/realniifio"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="app__about-icon">
                    <FaInstagram />
                  </span>
                </a>
                <a
                  href="https://www.linkedin.com/in/joseph-niifio-tetteh"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="app__about-icon">
                    <FaLinkedinIn />
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="app__about_container-content">
            <div className="app__about_container-header">
              <h3>
                About <span className="h3-span">Me</span>
              </h3>
              <p>
                Innovative and task-driven professional with two years of
                experience in web design and development. Prepared to work with
                an encouraging and stable company that will assist me with
                developing, improving and obtaining the necessary skills to
                enhance my skills and be efficient.
              </p>
              <a href="../image/developers.pdf" download>
                <button className="app__about-btn">DOWNLOAD RESUME</button>
              </a>
            </div>
            <div className="app__about_container-lists">
              <div className="app__about_container-list1">
                <ul>
                  <li>Residence</li>

                  <li>City</li>

                  <li>Address</li>

                  <li>e-mail</li>

                  <li>Phone</li>
                </ul>
              </div>
              <div className="app__about_container-list1 app__about_container-light">
                <ul>
                  <li>Armenia</li>

                  <li>Yerevan</li>

                  <li>1st Block Davitashen</li>

                  <li> josephniifio@gmail.com</li>

                  <li>+374 44540 238</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="global__app-arrows">
        <span className="arrowback">
          <Link to="/" className="arrow-link">
            <ArrowBackIosIcon className="arrows" fontSize="inherit" />
          </Link>
        </span>
        <span className="arrowforward">
          <Link to="/resume" className="arrow-link">
            <ArrowForwardIosIcon className="arrows" fontSize="inherit" />
          </Link>
        </span>
      </div>
    </div>
  );
};

export default About;
