import React from "react";
import classes from "./Services.module.css";
import { FaHeart } from "react-icons/fa";
import { FaHandHoldingHeart } from "react-icons/fa";
import { FaSyringe } from "react-icons/fa";
import { FaProcedures } from "react-icons/fa";
import { FaLaptopMedical } from "react-icons/fa";
import { FaMicroscope } from "react-icons/fa6";

function Services() {
  return (
    <div  id="services" className={classes.outer_wrapper}>
      <div className={classes.heading}>
        <h1>Our Services</h1>
      </div>
      <div className={classes.sub_heading}>
        <div className={classes.topics_wrapper}>
          <div>
            <FaSyringe size={52} />
            <h2>Vaccine</h2>
            <p>
              We offer a calm and supportive environment to make vaccine visits
              stress-free for both kids and parents.
            </p>
          </div>
          <div>
            <FaHeart size={52} />
            <h2>Clinic</h2>
            <p>
              Caring for kids with kindness and expertise, your partner in
              keeping children healthy and happy.
            </p>
          </div>
          <div>
            <FaMicroscope size={52} />
            <h2>Laboratory</h2>
            <p>
              Our clinic has a child-friendly lab for quick, accurate testing in
              a comforting setting.
            </p>
          </div>
          <div>
            <FaHandHoldingHeart size={52} />
            <h2>Treatment</h2>
            <p>
              Our team offers gentle, evidence-based care, creating positive
              visits for kids and parents alike.
            </p>
          </div>
          <div>
            <FaProcedures size={52} />
            <h2>Symptoms</h2>
            <p>
              We diagnose and treat your child’s symptoms, from fevers to
              allergies, with expertise and care.
            </p>
          </div>
          <div>
            <FaLaptopMedical size={52} />
            <h2>check Up</h2>
            <p>
              We focus on preventive care, tracking growth, milestones, and
              well-being in a child-friendly setting.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
