import React from "react";
import DoctorCard from "../components/Doctor_Card.js";
import Doctors from "../attributes/Doctors.js";
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

  return (
    <div>
      {arr}
      <DoctorCard />
      <DoctorCard />
    </div>
  );
}
export default Doctor;
