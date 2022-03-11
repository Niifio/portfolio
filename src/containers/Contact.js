import React from "react";
import { motion } from "framer-motion";
import NavLinks from "../components/NavLinks";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import SimpleMap from "../components/SimpleMap";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
import CheckIcon from "@mui/icons-material/Check";
import Form from "../components/Form";
import "./contact.css";

const Contact = () => {
  return (
    <div className="contact__app-container">
      <NavLinks />
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 0.2 }}
      >
      <div className="contact__app-content">
        <div className="contact__app-header">
          <h1>Contact</h1>
        </div>
        <div className="contact__app-body">
          <div className="contact__address ">
            <h2>
              Get <span className="colorChange">in Touch</span>
            </h2>
            <div className="google-map">
              <SimpleMap className="map" />
            </div>
            <div className="contact__app-icons">
              <div className="icons-box">
                <LocationOnIcon className="icons" />
              </div>
              <div className="contact__app-icons-text">Yerevan, Armenia</div>
            </div>

            <div className="contact__app-icons">
              <div className="icons-box">
                <MailIcon className="icons" />
              </div>
              <div className="contact__app-icons-text">
                josephniifio@gmail.com
              </div>
            </div>
            <div className="contact__app-icons">
              <div className="icons-box">
                <CallIcon className="icons" />
              </div>
              <div className="contact__app-icons-text">+374 44540 238</div>
            </div>

            <div className="contact__app-icons">
              <div className="icons-box">
                <CheckIcon className="icons" />
              </div>
              <div className="contact__app-icons-text">Available</div>
            </div>
          </div>
          <div className="contact__form">
            <h2>
              Contact <span className="colorChange">Form</span>
            </h2>
            <div>
              <Form />
            </div>
          </div>
        </div>
      </div>
      </motion.div>
      <div className="global__app-arrows">
        <div className="arrowback">
          <Link to="/portfolio" className="arrow-link">
            <ArrowBackIosIcon className="arrows" fontSize="inherit" />
          </Link>
        </div>
        <div className="arrowforward">
          <Link to="/" className="arrow-link">
            <ArrowForwardIosIcon className="arrows" fontSize="inherit" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;

// <FontAwesomeIcon icon="fa-solid fa-location-dot" />

// <-- import styles to be used
