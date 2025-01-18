import React from "react";
import "./About.css";
// import { company__photo } from "../../assets";
import { person_image } from "../../assets";
import { FaCheck } from "react-icons/fa";
import { Link } from "react-scroll";
const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="column company__photo">
          <img src={person_image} alt="Supreme_Product" />
        </div>
        <div className="column">
          <h3 className="sub__title">With 21+ years Experience</h3>
          <h1 className="sub__title">
            Turning your <span className="g-text">vision</span> into reality by
            focusing on the basics.
          </h1>
          <p className="text__muted description">
            Supreme Products is one of the Leading Solar Water Heaters
            manufacturing companies in India, Based out of Bengaluru and
            established in the year 2004 and it has grown from a modest customer
            base to a trusted brand in the home appliances market across the
            country
          </p>
          <div className="group">
            {/* Start Row */}
            <div className="row">
              <div className="icon__container">
                <FaCheck />
              </div>
              <div className="details">
                <p className="text__muted">Consultation</p>
                <h3>Free</h3>
              </div>
            </div>
            {/* End Row */}

            {/* Start Row */}
            <div className="row">
              <div className="icon__container">
                <FaCheck />
              </div>
              <div className="details">
                <p className="text__muted">Expert</p>
                <h3>Engineers</h3>
              </div>
            </div>
            {/* End Row */}

            {/* Start Row */}
            <div className="row">
              <div className="icon__container">
                <FaCheck />
              </div>
              <div className="details">
                <p className="text__muted">Customer</p>
                <h3>Support</h3>
              </div>
            </div>
            {/* End Row */}

            {/* Start Row */}
            <div className="row">
              <div className="icon__container">
                <FaCheck />
              </div>
              <div className="details">
                <p className="text__muted">Quality</p>
                <h3>Service</h3>
              </div>
            </div>
            {/* End Row */}
          </div>
          {/*End group*/}

          <div className="buttons__container">
            <Link to="project" smooth={true} className="btn">
              Explore
            </Link>
            <Link to="contact" smooth={true} className="btn btn__primary">
              Get a quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
