import React from "react";
import { motion } from "framer-motion";
import NavLinks from "../components/NavLinks";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import "./resume.css";

const Resume = () => {
  return (
    <div className=" app__resume_container">
      <NavLinks />
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 0.2 }}
      >
        <div className="app__resume_container-content">
          <h2 className="app__resume_container-title">Resume</h2>
          <div className="app__resume_box">
            <div className="app__resume_box-education">
              <h2>Education</h2>
              <div className="app__resume_box-list2">
                <div className="app__resume_box-list1">
                  <div className="app__resume_box-list0">
                    <h4>Specialization Courses</h4>
                    <p>
                      January 2019
                      <span className="divider"></span> Programming
                    </p>
                    <p>Codecademy, Udemy, FreeCodeCamp</p>
                  </div>
                </div>
              </div>

              <div className="app__resume_box-list2">
                <div className="app__resume_box-list1">
                  <div className="app__resume_box-list0">
                    <h4>Masters in Finance</h4>
                    <p>
                      June 2018<span className="divider"></span> Msc.Finance
                    </p>
                    <p>
                      Southwestern University of Finance and Economics, Chengdu,
                      China
                    </p>
                  </div>
                </div>
              </div>
              <div className="app__resume_box-list2">
                <div className="app__resume_box-list1">
                  <div className="app__resume_box-list0">
                    <h4>Bachelor Of Science in Mathematics With Economics</h4>
                    <p>
                      September 2009<span className="divider"></span> Bsc
                      Mathematics With Economics
                    </p>
                    <p>University of Develpment Studies. Navrongo, Ghana</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="app__resume_box-experience">
              <h2>Experience</h2>
              <div className="app__resume_box-list2">
                <div className="app__resume_box-list1">
                  <div className="app__resume_box-list0">
                    <h4>Web Developer</h4>
                    <p>
                      May 2021 - Present<span className="divider"></span>
                      Freelance
                    </p>
                    <p>Yerevan, Armenia</p>
                  </div>
                </div>
              </div>
              <div className="app__resume_box-list2">
                <div className="app__resume_box-list1">
                  <div className="app__resume_box-list0">
                    <h4>Web Developer</h4>
                    <p>
                      Jan 2020 - May 2021<span className="divider"></span>{" "}
                      SACNIP Consult
                    </p>
                    <p>Accra, Ghana</p>
                  </div>
                </div>
              </div>
              <div className="app__resume_box-list2">
                <div className="app__resume_box-list1">
                  <div className="app__resume_box-list0">
                    <h4>ESL Teacher</h4>
                    <p>
                      Oct 2011 - Nov 2019<span className="divider"></span>{" "}
                      Gaby's English Training School
                    </p>
                    <p>Chengdu, Republic of China</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="app__resume-technologies">
            <div className="app__resume_box-tech">
              <h1>Techonologies</h1>
              <div>
                <h3 className="app__resume-technologies-start">
                  Languages, frameworks and libraries worked with :
                </h3>
                <div>
                  <ul className="app__resume-technologies-li">
                    <li>Javascript</li>
                    <li>NodeJs</li>
                    <li>ReactJs</li>
                    <li>MongoDB</li>
                    <li>NextJs</li>
                    <li>CSS</li>
                    <li>HTML</li>
                    <li>Flutter</li>
                    <li>Sanity</li>
                    <li>Tailwind</li>
                    <li>Bootstrap</li>
                    <li>Material UI</li>
                    <li>Ant Design</li>
                    <li>Chakra UI</li>
                  </ul>
                </div>
              </div>
              <a href="../image/developer.pdf" download>
                <button className="app__resume-btn">DOWNLOAD RESUME</button>
              </a>
            </div>
          </div>
        </div>
      </motion.div>
      <div className="global__app-arrows resume-arrow">
        <span className="arrowback">
          <Link to="/about" className="arrow-link">
            <ArrowBackIosIcon className="arrows" fontSize="inherit" />
          </Link>
        </span>
        <span className="arrowforward">
          <Link to="/portfolio" className="arrow-link">
            <ArrowForwardIosIcon className="arrows" fontSize="inherit" />
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Resume;
