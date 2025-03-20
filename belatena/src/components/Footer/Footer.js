import React from "react";
import classes from  "./Footer.module.css";
import Logo from "../../assets/Images/10001.jpg";
import { IoLocationSharp } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <div className={classes.inner_footer_wrapper}>
        <div className={classes.left_wrapper}>
          <a href="#">
            <img src={Logo} alt="clinic_logo"></img>
          </a>
          <p>
            We owe a medical clinic, <br />
            to assist you in pediatric.
          </p>
        </div>
        <div className={classes.links_wrapper}>
          <div className={classes.med_links}>
            <div className={classes.medic}>Medic</div>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Our services</a>
              </li>
              <li>
                <a href="#">Our Specialists</a>
              </li>
            </ul>
          </div>

          <div className={classes.social_links}>
            <div className={classes.social}>Social Media</div>
            <ul>
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">linkdin</a>
              </li>
              <li>
                <a href="#">Telegram</a>
              </li>
              <li>
                <a href="#">YouTube</a>
              </li>
            </ul>
          </div>
          <div className={classes.contact_info}>
            <div className={classes.address}>Contact</div>
            <ul>
              <li>
                <IoLocationSharp />
                Lebu, Musica, Addis Ababa, Ethiopia
              </li>
              <li>
                <FaPhoneAlt />
                +251 947 818 100
              </li>
              <li>
                <IoIosMail />
                info@belatenaclinic.com
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
