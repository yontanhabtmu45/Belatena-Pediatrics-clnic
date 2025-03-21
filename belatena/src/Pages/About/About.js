import React from "react";
import classes from "./About.module.css";
import Staffs from "../../assets/Images/10006.jpg";
import Layout from "../../components/Layout/Layout";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

function About() {
  return (
    <Layout>
      <section>
        <div className={classes.back_home}>
          <Link to="/">
            <FaArrowLeft size={38} />
            <p>Back to Home</p>
          </Link>
        </div>
        <div id="about" className={classes.read_more}>
          <h1>About Us</h1>
          <div>
            <img src={Staffs} alt="staff" />
          </div>
          <div className={classes.more_infos}>
            <p>
              we are surrounded by a team of smart, forward-thinking
              professionals who are dedicated to providing the best care
              possible. we are proud to have highly qualified pediatric doctors
              who specialize in the health and well-being of children
            </p>
            <p>
              Our clinic is staffed with experienced and compassionate
              pediatricians who specialize in children’s health from newborns to
              adolescents.We create a warm and welcoming environment designed to
              make children feel comfortable and at ease. Our team understands
              the importance of building trust with both the child and their
              family, ensuring a stress-free experience.
            </p>
            <p>
              Our pediatric clinic is equipped with the latest medical
              technology and diagnostic tools, ensuring accurate assessments and
              the best possible care for your child.At our clinic, we look
              beyond just treating symptoms. We focus on the whole
              child—physical, emotional, and developmental health—providing
              personalized care that supports growth and well-being.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default About;
