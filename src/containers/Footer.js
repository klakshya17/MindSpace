import React from "react";
import logo from "../logos.svg";
import "./Footer.css";
function Footer() {
  return (
    <div className="Footer">
      <h3>The Minds Foundation</h3>
      <ul>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Careers</li>
      </ul>
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}
export default Footer;
