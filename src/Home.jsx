import React, { Fragment } from "react";
import classes from "./Home.module.css";
import hero from "./assets/images/hero.png";
import team from "./assets/img/team.jpg";
import Footer from "./Common/Footer";
const Home = () => {
  return (
    <React.Fragment>
      <div className={classes.home}>
        <div>
          <h1>SRM ACM</h1>
        </div>
        <div>
          <img src={hero} className={classes.ima} />
        </div>
      </div>
      <div className={classes.about}>
        <b>
          <h1>About Us</h1>
        </b>
        <div className={classes.aboutcont}>
          <div className={classes.aboutcontpara}>
            <p>
              ACM's Special Interest Groups (SIGs) are a primary source of
              research and perspectives from the world's leading thinkers across
              a broad spectrum of computing disciplines. SIGs foster the
              technical communities within their respective specialties and aim
              to advance the skills of their members, keeping them abreast of
              emerging trends and offering opportunities for networking with
              colleagues. SIGs publish newsletters and magazines, encourage
              excellence through multiple recognition programs, and organize
              conferences and activities on a local-to-global scale.
            </p>
            <button>Learn More</button>
          </div>
          <div>
            <img src={team} alt="laun" />
          </div>
        </div>
      </div>
      <div className={classes.what}>
        <div>
          <h1>What we do?</h1>
          <p>
            The SRM ACM (Association of Computing Machinery) Student Chapter is
            an official student body incepted in 2016 under the aegis of
            Department of Computer Science and Engineering, SRMIST. Utility of
            an organisation stands on the pillars of what we contribute and how
            you give back. We, at SRM ACM Student Chapter inculcate these ethos.
            We provide plethora of opportunities for networking, mentoring and
            bonding over common interests (via SIGs). They provide support both
            within the student community and to local communities outside the
            institution. Apart from being outreach to Next Tech Lab we are also
            in collaboration with other clubs/communities at the campus, be it
            SRMkZilla and Sector 443 Cyber Security commune. Out-campus
            collaborations like the one with Zubi.io ascend our reach even
            further. Being a part of the chapter, you get to organise events and
            be at the epicentre of them. Interacting with the professionals post
            the events and networking propel the entire Chapter.
          </p>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};
export default Home;
