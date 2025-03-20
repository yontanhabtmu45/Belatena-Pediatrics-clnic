import React from "react";
import classes from "./About.module.css";
import Staffs from '../../assets/Images/10006.jpg'

function About() {
  return (
    <div className={classes.read_more}>
        <div>
            <img src={Staffs} alt="" />
        </div>
      <div className={classes.more_infos}>
        <p>
          we are surrounded by a team of smart, forward-thinking professionals
          who are dedicated to providing the best care possible. we are proud to
          have highly qualified pediatric doctors who specialize in the health
          and well-being of children
        </p>
        <p>
          Our clinic is staffed with experienced and compassionate pediatricians
          who specialize in children’s health from newborns to adolescents.We
          create a warm and welcoming environment designed to make children feel
          comfortable and at ease. Our team understands the importance of
          building trust with both the child and their family, ensuring a
          stress-free experience.
        </p>
        <p>
          Our pediatric clinic is equipped with the latest medical technology
          and diagnostic tools, ensuring accurate assessments and the best
          possible care for your child.At our clinic, we look beyond just
          treating symptoms. We focus on the whole child—physical, emotional,
          and developmental health—providing personalized care that supports
          growth and well-being.
        </p>
      </div>
    </div>
  );
}

export default About;
