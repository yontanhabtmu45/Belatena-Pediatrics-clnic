import React from "react";
import classes from "./Main.module.css";
import Doc from "../../assets/Images/10003-removebg-preview.png";
import CountUp from "react-countup";
import { TfiCup } from "react-icons/tfi";
import { HiEmojiHappy } from "react-icons/hi";
import { IoIosPeople } from "react-icons/io";
import { FaAward } from "react-icons/fa";

function Main() {
  return (
    <div className={classes.main_highlither}>
      <div className={classes.description_wrapper}>
        <div className={classes.inner_description_wrapper}>
          <h1>Every good thing starts with good health</h1>
          <h5>
            We are here to serve people with patient centered-care to deliver
            outstanding healthcare for better lives.
          </h5>
          <div className={classes.btn}>
            <button className={classes.btn_1}>Request appointement</button>
            <button className={classes.btn_2}>Learn More </button>
          </div>
        </div>
        <div className={classes.cicle_gradiant}>
          <img src={Doc} alt="doc_img"></img>
        </div>
      </div>
      <div className={classes.custom_shape_divider_bottom_1742382044}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className={classes.shape_fill}
          ></path>
        </svg>
      </div>
      <div className={classes.counter_wrapper}>
        <div className={classes.inner_counter_wrapper}>
          <div className={classes.counter}>
            <div className={classes.counter_1}>
              <TfiCup size={35} /> <br /> <br />
              <CountUp
                start={0}
                end={4}
                duration={5}
                delay={1}
                separator=" "
                decimals={0}
                decimal=","
                suffix="+ Years of Exprience"
              ></CountUp>
            </div>
          </div>
          <div className={classes.counter}>
            <div className={classes.counter_1}>
              <FaAward size={35} /> <br /> <br />
              <CountUp
                start={0}
                end={5}
                duration={5}
                delay={1}
                separator=" "
                decimals={0}
                decimal=","
                suffix="+ Awards"
              ></CountUp>
            </div>
          </div>
          <div className={classes.counter}>
            <div className={classes.counter_1}>
              <HiEmojiHappy size={35} /> <br /> <br />
              <CountUp
                start={0}
                end={10}
                duration={2}
                separator=" "
                decimals={3}
                decimal=","
                suffix="+ Patient Recovered"
              ></CountUp>
            </div>
          </div>
          <div className={classes.counter}>
            <div className={classes.counter_1}>
              <IoIosPeople size={35} /> <br /> <br />
              <CountUp
                start={0}
                end={50}
                duration={2}
                separator=" "
                decimals={0}
                decimal=","
                suffix="+ Staffs"
              ></CountUp>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
