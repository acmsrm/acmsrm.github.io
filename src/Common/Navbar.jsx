import React from "react";
import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";
import acm from "../assets/images/acm-icon.png";
import { useState } from "react";
import { useEffect } from "react";
const Navbar = () => {
  // const [active, Setactive] = useState(false);
  return (
    <nav className={classes.nav}>
      <div className={classes.logo}>
        <img src={acm} />
      </div>
      <div className={classes.lin}>
        <Link to="/">Home</Link>
        <Link to="/events">Events</Link>
        <Link to="/membership">Membership</Link>
        <Link to="/team">Team</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
};
export default Navbar;
