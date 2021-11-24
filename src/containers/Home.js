import React from "react";
import "./Home.css";
import hp_img1 from "../attributes/hp-img1.png";
import hp_img2 from "../attributes/hp-img2.png";
import hp_img3 from "../attributes/hp-img3.png";
function Home() {
  return (
    <div className="HomePage">
      {/* <h2>Home Page</h2> */}
      <div className="HP" id="hp1">
        <img src={hp_img1} className="home-img" alt="logo" />
        <div>
          <h1>
            MindSpace is an online counselling platform dedicated towards
            spreading mental health awareness and promoting holistic wellbeing
            through its wide range of services for users in India and around the
            world. Consult the Best Online Psychologist, Talk to Therapists,
            Counsellors, Mental Health Experts in India.
          </h1>
          <button className="hp-btn">Book an Appointment</button>
        </div>
      </div>
      <div className="HP" id="hp2">
        <div>
          <h1>
            A platform for users to share their stories and experiences.
            Patients would be able to relate to others who have had a similar
            experience and how they overcame them, which could encourage them
            mentally.
          </h1>

          <button className="hp-btn">Read a Blog </button>
        </div>
        <img src={hp_img2} className="home-img" alt="logo" />
      </div>

      <div className="HP" id="hp3">
        <img src={hp_img3} className="home-img" alt="logo" />
        <div>
          <h1>
            A section to receive trusted, evidence-based health information from
            our team of experts, alongside personal patient perspectives and
            health consumer insights from those on the front lines. Beneficial
            for the patients in building a healthy lifestyle by following daily
            tips. They can make changes in their day-to-day life and improve
            their overall health.
          </h1>
          <button className="hp-btn">Daily Tips</button>
        </div>
      </div>
    </div>
  );
}
export default Home;
