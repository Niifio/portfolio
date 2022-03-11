import React from "react";
import { motion } from "framer-motion";
import Card from "../components/Card";
import NavLinks from "../components/NavLinks";
import { data } from "../data";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import "./portfolio.css";
const Portfolio = () => {
  return (
    <div className="portfolio__content">
      <NavLinks />
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 0.2 }}
      >
        <div className="portfolio__container">
          <h1 className="portfolio__container-header">Portfolio</h1>

          <div className="portfolio__cards">
            {data.map((items) => {
              const { id, img, title, description, Url } = items;
              return (
                <div key={id} className="portfolio__card">
                  <Card
                    key={id}
                    title={title}
                    description={description}
                    img={img}
                    Url={Url}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>
      <div className="global__app-arrows">
        <span className="arrowback">
          <Link to="/resume" className="arrow-link">
            <ArrowBackIosIcon className="arrows" fontSize="inherit" />
          </Link>
        </span>
        <span className="arrowforward">
          <Link to="/contacts" className="arrow-link">
            <ArrowForwardIosIcon className="arrows" fontSize="inherit" />
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Portfolio;
