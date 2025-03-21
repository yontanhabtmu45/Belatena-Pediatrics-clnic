import React from "react";
import classes from  "./Footer.module.css";
import Logo from "../../assets/Images/10001.jpg";
import { IoLocationSharp } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { HashLink as Link } from "react-router-hash-link";

function Footer() {
  return (
    <footer>
      <div className={classes.inner_footer_wrapper}>
        <div className={classes.left_wrapper}>
          <Link smooth to="#main">
            <img src={Logo} alt="clinic_logo"></img>
          </Link>
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
                <Link smooth to="#main">Home</Link>
              </li>
              <li>
                <Link smooth to="/about">About</Link>
              </li>
              <li>
                <Link smooth to="#services">Our services</Link>
              </li>
              <li>
                <Link smooth to="#doctors">Our Specialists</Link>
              </li>
            </ul>
          </div>

          <div className={classes.social_links}>
            <div className={classes.social}>Social Media</div>
            <ul>
              <li>
                <Link smooth to="#">Facebook</Link>
              </li>
              <li>
                <Link smooth to="#">linkdin</Link>
              </li>
              <li>
                <Link smooth to="#">Telegram</Link>
              </li>
              <li>
                <Link smooth to="#">YouTube</Link>
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
