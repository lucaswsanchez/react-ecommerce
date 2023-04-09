import React from "react";
import "../components/Footer.css";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { RiFacebookCircleFill } from "react-icons/ri";

function Footer() {
  return (
    <div className="footer-main">
      <div className="footer-logo">
        <p>E-COMMERCE</p>
      </div>
      <div className="footer-social-networks">
        <AiFillTwitterCircle color="#1d9bf0" size={35} />
        <AiFillInstagram className="instagram-gradient" size={35} />
        <RiFacebookCircleFill color="#1773ea" size={35} />
      </div>
      <div className="footer-text">
        <p>Web design by Lucas Sanchez</p>
      </div>
    </div>
  );
}

export default Footer;
