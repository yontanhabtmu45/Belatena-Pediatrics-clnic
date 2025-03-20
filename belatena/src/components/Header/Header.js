import React from "react";
import classes from './Header.module.css'
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import Logo from '../../assets/Images/10001.jpg'

function Header() {
  return (
    <>
      <div className={classes.main_wrapper}>
        <div className={classes.logo}>
            <a href="/">
            <img src={Logo} alt=""/>
            <p>
            Belatena Pediatrics Speciality Clinic
            </p>
            </a>
        </div>
        <div className={classes.nav_links}>
          <ul> 
            <li><a href="#">About</a></li>
            <li><a href="#">Our Services</a></li>
            <li><a href="#">Doctors</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </div>
        <maraquee className={classes.contact_infos}>
          <p>
            <IoIosMail /> info@belatenaclinic.com  <span>lebu, Musica sefer, A.A,
            Ethiopia.</span> 
          </p>
          <span>
            <FaPhoneAlt />    0947818100</span>
        </maraquee>
    </>
  );
}

export default Header;
