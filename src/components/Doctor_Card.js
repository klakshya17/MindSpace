import React from "react";
import "./Doctor_Card.css";
function DoctorCard(props) {
  return (
    <div id="doccard">
      <img
        src="https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg?size=338&ext=jpg"
        alt=""
      />
      <h3 className="cardEl">{props.name}</h3>
      <h5 className="cardEl">{props.degree}</h5>
      <p className="cardEl">{props.about}</p>
      <button className="cardEl"> Book Appointment</button>
    </div>
  );
}
export default DoctorCard;
