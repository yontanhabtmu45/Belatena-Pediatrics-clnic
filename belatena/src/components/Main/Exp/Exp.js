import React from "react";
import classes from "./Exp.module.css";
import mainDoc from "../../../assets/Images/10002.jpg";
import { Link } from "react-router-dom";

function Exp() {
  return (
    <div id="exp" className={classes.description_wrapper}>
      <div className={classes.inner_des}>
        <div className={classes.head}>
          <h1>What makes us different ?</h1>
        </div>
        <div className={classes.mixed_des}>
          <div>
            <img src={mainDoc} alt="doc_image" />
          </div>
          <div className={classes.brief_des}>
          <p>
            A team of experienced <span> pediatricians, nurses,  </span>  and <span> support staff </span>  who
            are not only highly qualified but also genuinely care about children
            can make a significant difference.
          </p>
          <Link to='/about'><button>Read more</button></Link> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default Exp;
