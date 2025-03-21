import React from "react";
import classes from "./contact.module.css";

function Contact() {
  return (
    <div id="contact" className={classes.contact_form}>
        <div className={classes.address_info}>
          <h1>Let's Talk</h1>
        </div>
      <div className={classes.main_divider}>
        <div className={classes.form_wrapper}>
          <div className={classes.inner_form_wrapper}>
            <div className={classes.names}>
              <div>
                <label for="text">First Name</label> <br />
                <input type="text" /> <br /> <br />
              </div>
              <div>
                <label for="text">Last Name</label> <br />
                <input type="text" /> <br /> <br />
              </div>
            </div>
            <div className={classes.email}>
              <div>
                <label for="email">Email</label> <br />
                <input type="email" /> <br /> <br />
              </div>
              <div>
                <label for="text">Phone Number</label> <br />
                <input type="text" /> <br /> <br />
              </div>
            </div>
            <div className={classes.comments}>
              <label for="text">Message</label> <br />
              <textarea
                name="cooments"
                placeholder="Comments or Questions"
              ></textarea>
              <button type="submit">Submit</button>
            </div>
          </div>
        </div>
        <div className={classes.location}>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3941.2345346160164!2d38.71548677501802!3d8.950523391107733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b81462d8018a1%3A0x9fd4fbfbca42b268!2sBlatena%20pediatrics%20speciality%20clinic!5e0!3m2!1sen!2set!4v1742469923599!5m2!1sen!2set"
              width="900"
              height="725"
              style={{ border: 0 + "px" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
