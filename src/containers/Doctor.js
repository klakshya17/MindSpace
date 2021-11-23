import React from "react";
import DoctorCard from "../components/Doctor_Card.js";
import Doctors from "../attributes/Doctors.js";
function Doctor() {
  const arr = Doctors.map((Doctors) => {
    return <DoctorCard />;
  });

  return (
    <div>
      {arr}
      <DoctorCard />
      <DoctorCard />
    </div>
  );
}
export default Doctor;
