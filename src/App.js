import React from "react";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

import { Routes, Route } from "react-router-dom";
import { About, Home, Portfolio, Resume, Contact } from "./containers";
import Navbar from "./components/Navbar";
import "./index.css";

const App = () => {
  const location = useLocation();
  return (
    <>
      <Navbar />
      <AnimatePresence exitBeforeEnter initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contacts" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default App;
