import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "../index.css";
import { Spin as Hamburger } from "hamburger-react";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import DescriptionIcon from "@mui/icons-material/Description";
import NextWeekIcon from "@mui/icons-material/NextWeek";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  return (
    <div className="navbar">
      <div className="navbar__items">
        <div className="navbar__burger">
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            color="#999"
            distance="lg"
            duration={0.4}
            size={30}
            direction="left"
          />
          {isOpen && (
            <Paper className="paper-items" elevation={3}>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList onKeyDown={handleListKeyDown}>
                  <MenuItem onClick={handleClose}>
                    <Link to="/" className="link">
                      <HomeIcon fontSize="large" /> Home
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <Link to="/about" className="link">
                      <PersonIcon fontSize="large" /> About Me
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <Link to="/resume" className="link">
                      <DescriptionIcon fontSize="large" /> Resume
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <Link to="portfolio" className="link">
                      <NextWeekIcon fontSize="large" /> Portfolio
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <Link to="contacts" className="link">
                      <ConnectWithoutContactIcon fontSize="large" /> Contact
                    </Link>
                  </MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
