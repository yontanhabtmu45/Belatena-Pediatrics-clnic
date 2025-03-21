import React from "react";
import classes from "./Header.module.css";
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import Logo from "../../assets/Images/10001-removebg-preview.png";
import { HashLink as Link } from "react-router-hash-link";



function Header() {
  return (
    <>
      <div className={classes.main_wrapper}>
        <div className={classes.logo}>
          < Link smooth to="#main">
            <img src={Logo} alt="" />
            <p>Belatena Pediatrics Speciality Clinic</p>
          </Link>
        </div>
        <div className={classes.nav_links}>
          <ul>
            <li>
              < Link smooth to="#exp">About</Link>
            </li>
            <li>
              < Link smooth to="#services">Our Services</Link>
            </li>
            <li>
              < Link smooth to="#doctors">Doctors</Link>
            </li>
            <li>
              < Link smooth to="#contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
      <maraquee className={classes.contact_infos}>
        <p>
          <IoIosMail /> info@belatenaclinic.com{" "}
          <span>lebu, Musica sefer, A.A, Ethiopia.</span>
        </p>
        <span>
          <FaPhoneAlt /> 0947818100
        </span>
      </maraquee>
    </>
  );
}

export default Header;
