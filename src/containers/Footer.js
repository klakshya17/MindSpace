import React from "react";
import logo from "../logos.svg";
import "./Footer.css";
function Footer() {
  return (
    <div className="Footer">
      <h3>The Minds Foundation</h3>
      <ul>
        <li>
          <a href="/About-Us">About Us</a>
        </li>
        <li>
          <a href="/Contact-Us">Contact Us</a>
        </li>
        <li>
          <a href="/Careers">Careers</a>
        </li>
      </ul>
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}
export default Footer;
