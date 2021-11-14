import React from "react";
import "./Doctor_Card.css";
function Doctor_Card() {
  return (
    <div id="doccard">
      <img
        src="https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg?size=338&ext=jpg"
        alt=""
      />
      <h3 className="cardEl">Dr. ABC</h3>
      <h5 className="cardEl">MBBS</h5>
      <p className="cardEl">
        In publishing and graphic design, Lorem ipsum is a placeholder text
        commonly used to demonstrate the visual form of a document or a typeface
        without relying on meaningful content. Lorem ipsum may be used as a
        placeholder before final copy is available.
      </p>
      <button className="cardEl"> Book Appointment</button>
    </div>
  );
}
export default Doctor_Card;
