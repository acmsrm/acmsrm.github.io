import React from "react";
import logo from "../assets/images/acm-icon.png";
// import flogo from "../assets/images/social/facebook.png";
// import linlogo from "../assets/images/social/linkedin.png";
// import twilogo from "../assets/images/social/twitter.png";
import classes from "./Footer.module.css";
const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.accounts}>
        <img src={logo} />
        <p>Making Great things in Silicon Valley</p>
        <div>
          {/* <img src={flogo} /> <img src={linlogo} /> <img src={twilogo} />{" "}
          <img src="" /> */}
        </div>
      </div>
      <div className={classes.explore}>
        <div>
          <h4>Get In Touch</h4>
          <p>✉️contactus@srmacm.com</p>
          <p>🪪TP 8th floor, SRMIST Chennai Kattankalathur</p>
        </div>
        <div>
          <h4>Explore</h4>
          <div className={classes.nav}>
            <p>Home</p> <p>Event</p> <p>Membership</p> <p>Team</p>{" "}
            <p>Contact</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
