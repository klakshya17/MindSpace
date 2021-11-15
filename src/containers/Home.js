import React from "react";
import "./Home.css";
// import doc from "../attributes/414.png";
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
           through its wide range of services for users in India and around the world.
          </h1>
          <button className="hp-btn">Book an Appointment</button>
        </div>
      </div>
      <div className="HP" id="hp2">
        <div>
          <h1>
            Consult the Best Online Psychologist in India
            MindSpace – Top Online Psychologists
            Top Psychologist in India. Talk to Therapists, Counsellors, Mental Health Experts in India. See the List of Top Psychologists in India.
          </h1>
          <button className="hp-btn">Read a Blog </button>
        </div>
        <img src={hp_img2} className="home-img" alt="logo" />
      </div>

      <div className="HP" id="hp3">
        <img src={hp_img3} className="home-img" alt="logo" />
        <div>
          <h1>
            Experienced and Certified 
            Get the best online Therapy & Counseling Experience from the Verified Professionals. Top Therapists for your mental health. Top Online Clinical Psychologist. Best Online Marriage Counsellor and Psychologist Consultation.
            Get Online Therapy/ Counselling for Depression, Anxiety, Addiction, Phobia, Relationship Issues, Parenting Issues, Grief & Trauma,
            Self-Improvement & Confidence Building and many more at our online counselling platform through our top psychologists in India.
          </h1>
          <button className="hp-btn">Daily Tips</button>
        </div>
      </div>
    </div>
  );
}
export default Home;
