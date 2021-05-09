import React from "react";
import "./Footer.css";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaRss,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <div className="footer_div" >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
          className="footer_divSvg"
        >
          <path
            opacity="0.33"
            d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z"
          className="footer_divSvgPath"
          ></path>
          <path
            opacity="0.66"
            d="M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z"
            className="footer_divSvgPath"
          ></path>
          <path
            class="elementor-shape-fill"
            d="M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z"
            className="footer_divSvgPath"
          ></path>
        </svg>
      </div>
      <div className="footer_main">
        <div className="footer_mainTop">
          <div className="footer_mainTopfirst">
            <img
              src="https://templatekit.jegtheme.com/syntra/wp-content/uploads/sites/7/2020/08/logo-header-1.png"
              alt=""
              className="footer_mainTopfirstLogo"
            />
            <p className="footer_mainTopfirstDetail">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium totam rem aperiam
            </p>
            <FaTwitter className="footer_mainTopfirstIcons" />
            <FaFacebook className="footer_mainTopfirstIcons" />
            <FaYoutube className="footer_mainTopfirstIcons" />
            <FaInstagram className="footer_mainTopfirstIcons" />
            <FaRss className="footer_mainTopfirstIcons" />
          </div>
          <div className="footer_mainTopSecond">
            <p className="footer_mainTopSecondHeading">Information</p>
            <a href="" className="footer_mainTopSecondLinks">
              About Us
            </a>
            <a href="" className="footer_mainTopSecondLinks">
              Services
            </a>
            <a href="" className="footer_mainTopSecondLinks">
              Our Team
            </a>
            <a href="" className="footer_mainTopSecondLinks">
              Our Price
            </a>
            <a href="" className="footer_mainTopSecondLinks">
              Contact
            </a>
          </div>
          <div className="footer_mainTopThird">
            <p className="footer_mainTopThirdHeading">Contact Us</p>
            <div className="footer_mainTopThirdLinkWrap">
              <FaMapMarkerAlt className="footer_mainTopThirdIcons" />
              <a href="" className="footer_mainTopThirdLinks">
                280 Jefferson Street Port Charlotte, FL 33952
              </a>
            </div>
            <div className="footer_mainTopThirdLinkWrap">
              <FaPhoneAlt className="footer_mainTopThirdIcons" />
              <a href="" className="footer_mainTopThirdLinks">
                +012 3456 564
              </a>
            </div>
            <div className="footer_mainTopThirdLinkWrap">
              <FaEnvelope className="footer_mainTopThirdIcons" />
              <a href="" className="footer_mainTopThirdLinks">
                Syntra@support.com
              </a>
            </div>
          </div>
          <div className="footer_mainTopForth">
            <p className="footer_mainTopForthHeading">Newsletter</p>
            <p className="footer_mainTopForthDetail">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium totam rem aperiam
            </p>
            <div className="footer_mainTopForthInputGroup">
              <input
                type="email"
                className="footer_mainTopForthInput"
                placeholder="Your Email Address"
                required
              />
              <button className="footer_mainTopForthButton">
                <FaEnvelope />
              </button>
            </div>
          </div>
        </div>
        <hr style={{ color: "#fff"}} />
        <div className="footer_mainBottom">
          <p className="footer_mainBottomLeft">Copyright © 2021 SYNTRA. All rights reserved.</p>
          <div className="footer_mainBottomRight">
            <a href="" className="footer_mainBottomRightLinks">Terms of Service</a>
            <a href="" className="footer_mainBottomRightLinks">Privacy Policy</a>
            <a href="" className="footer_mainBottomRightLinks">Legal</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
