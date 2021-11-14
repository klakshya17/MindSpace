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
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source
          </h1>
          <button className="hp-btn">Book an Appointment</button>
        </div>
      </div>
      <div className="HP" id="hp2">
        <div>
          <h1>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source
          </h1>
          <button className="hp-btn">Read a Blog </button>
        </div>
        <img src={hp_img2} className="home-img" alt="logo" />
      </div>

      <div className="HP" id="hp3">
        <img src={hp_img3} className="home-img" alt="logo" />
        <div>
          <h1>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source
          </h1>
          <button className="hp-btn">Daily Tips</button>
        </div>
      </div>
    </div>
  );
}
export default Home;
