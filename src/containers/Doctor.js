import React from "react";
import DoctorCard from "../components/Doctor_Card.js";
import Doctors from "../attributes/Doctors.js";
import "./Doctor.css";
function Doctor() {
  const arr = Doctors.map((Doctors) => {
    return (
      <DoctorCard
        name={Doctors.name}
        degree={Doctors.degree}
        about={Doctors.about}
      />
    );
  });

  return <div className="DocContainer">{arr}</div>;
}
export default Doctor;
