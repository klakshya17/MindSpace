import React from "react";
import "./Header.css";
function Navbar() {
  return (
    <div id="navbar">
      <div id="logo">Mindspace</div>
      <div id="elements">
        <div class="element">Doctors</div>
        <div class="element">Book Appointment</div>
        <div class="element">Blogs</div>
        <div class="element">Daily Tips</div>
        <div id="login">
          <button id="login-button">Login</button>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
