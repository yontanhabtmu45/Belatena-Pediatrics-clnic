import React from "react";
import classes from "./Doctors.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Doc_1 from "../../assets/Images/10002-removebg-preview.png";
import Doc_2 from "../../assets/Images/10003-removebg-preview.png";
import Doc_3 from "../../assets/Images/10004-removebg-preview.png";
import Doc_4 from "../../assets/Images/10005-removebg-preview.png";

function Doctors() {
  return (
    <div className={classes.main_docs}>
      <h1>Our Specialists</h1>
      <div className={classes.team_Effect}>
        <div className={classes.team_section}>
          <div>
            <img src={Doc_1} />
            <h3 className="legend">Dr. Anteneh Adualem </h3>
            <small>Senior Pediatrician</small>
          </div>
          <div>
            <img src={Doc_2} />
            <h3 className="legend">Dr. Rediat Yetayew</h3>
            <small>Senior Pediatrician</small>
          </div>
          <div>
            <img src={Doc_3} />
            <h3 className="legend">Dr. Selam Kinfe</h3>
            <small>Senior Pediatrician</small>
          </div>
          <div>
            <img src={Doc_4} />
            <h3 className="legend">Dr. Tomas Abebe</h3>
            <small>Senior Pediatrician</small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Doctors;
