import React from "react";
import AboutBottom from "./AboutBottom";
import "./AboutUs.css";
import { FaAngleRight } from 'react-icons/fa';

function AboutUs() {
  return (
    <div>
      <div className="aboutUs">
        <p className="aboutUs_heading">About Us</p>
        <p className="aboutUs_link">
          <span>
            <a href="">Home </a> <FaAngleRight className="aboutUs_linkIcon"/> <a href=""> About Us</a>
          </span>
        </p>
      </div>
      <AboutBottom />
    </div>
  );
}

export default AboutUs;
