import React from "react";
import "./Header.css";
import { Link } from "react-scroll";
import { solar__skyscraper } from "../../assets";
import SolarSystem from "../SolarSystem";
const Header = () => {
  return (
    <header id="header">
      <div className="system__wrapper">
        <SolarSystem />
      </div>
      <div className="container full__height blur-effect">
        <div className="column">
          <h1 className="title">
            {/* Revolutionary Home  */}
            Welcome to{" "}
            <span className="g-text">
              {/* Solar System */}
              Supreme Product
            </span>
          </h1>
          <p className="text__muted">
            Supreme Products is one of the Leading Solar Water Heaters
            manufacturing companies in India, Based out of Bengaluru and
            established in the year 2004 and it has grown from a modest customer
            base to a trusted brand in the home appliances market across the
            country. We recently introduced Glass-Lined Solar Water Heating
            Systems into the market, it is an internationally renowned
            technology in Solar Water Heating Systems to help provide clean hot
            water. Our products are Supreme Solar Water Heaters (Evacuated Tube
            Collectors and Flat Plate Collectors), Supreme Solar Rooftop
            Solutions, Supreme Electric Geysers, Supreme Heat Pumps, Supreme
            Kitchen chimneys and more.
          </p>
          <div className="buttons__container">
            <Link to="services" className="btn">
              Our Services
            </Link>
            <Link to="contact" className="btn btn_primary">
              Contact Us
            </Link>
          </div>
        </div>
        <div className="column"></div>
        <div className="image__container primary-effect">
          <img src={solar__skyscraper} alt="Supreme_Product" />
        </div>
      </div>
    </header>
  );
};

export default Header;
