import React from "react";
import "./ContactStyless.css";
import Theme from "../../assets/theme_pattern.svg";
import Email from '../../assets/mail_icon.svg'
import Location from '../../assets/location_icon.svg'
import Call from '../../assets/call_icon.svg'

function Contact() {
  return (
    <div className="contact">
      <div className="contact-heading">
        <h1>Get In Touch</h1>
        <img src={Theme} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <p>
            I'm currently available to take on new projects, so feel free to
            send me a message about anything that you want me to work on. You
            can contact anytime.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
                <img src={Email} alt="" />
                <p>kapiladhikari2060@gmail.com</p>
            </div>
            <div className="contact-detail">
                <img src={Call} alt="" />
                <p>+977 98-23451101</p>
            </div>
            <div className="contact-detail">
                <img src={Location} alt="" />
                <p>Kavre, Nepal</p>
            </div>
          </div>
        </div>
        <form action="submit" className="contact-right">
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder="Enter your name" name="name" />
            <label htmlFor="">Your Email</label>
            <input type="email" placeholder="Enter your email" name="email" />
            <label htmlFor="">Write your message your</label>
            <textarea name="message" rows="10" placeholder="Enter your messages"></textarea>
            <button type="submit" className="contact-submit">Sumbit</button>
        </form>
      </div>
    </div>
  );
}
import "./ContactStyless.css";

export default Contact;
