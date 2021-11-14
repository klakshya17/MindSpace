import React from "react";
import "./Header.css";
function Navbar() {
  return (
    <div id="navbar">
      <div id="logo">
        <a href="./">MindSpace</a>
      </div>
      <div id="elements">
        <div class="element">
          <a href="./Doctors">Doctors</a>
        </div>
        <div class="element">
          <a href="./Blogs">Blogs</a>
        </div>
        <div class="element">
          <a href="./Daily-Tips">Daily Tips</a>
        </div>
        <div id="login">
          <a href="./login">
            <button id="login-button">Login</button>
          </a>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
