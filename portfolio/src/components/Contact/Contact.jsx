import React, { useState } from "react";
import "./ContactStyless.css";
import Theme from "../../assets/theme_pattern.svg";
import Email from "../../assets/mail_icon.svg";
import Location from "../../assets/location_icon.svg";
import Call from "../../assets/call_icon.svg";
import { AnimatePresence, motion } from "framer-motion";

function Contact() {
  const apiKey = import.meta.env.VITE_API_KEY;
  const [showAlert, setShowAlert] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    
    const formData = new FormData(event.target);
    formData.append("access_key", apiKey);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        console.log("Success", res);
        // Show success alert
        setShowAlert(true);
        
        // Reset form
        setFormState({
          name: "",
          email: "",
          message: ""
        });
        
        // Hide alert after 5 seconds
        setTimeout(() => {
          setShowAlert(false);
        }, 5000);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact">
      {/* Success Alert */}
      <AnimatePresence>
        {showAlert && (
          <motion.div 
            className="success-alert"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
          >
            <div className="success-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
            <div className="success-content">
              <h3>Message Sent Successfully!</h3>
              <p>Thank you for reaching out. I'll get back to you soon.</p>
            </div>
            <button 
              className="close-alert"
              onClick={() => setShowAlert(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="contact-heading" id="contact-me">
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
        <form action="submit" onSubmit={onSubmit} className="contact-right">
          <label htmlFor="name">Your Name</label>
          <input 
            type="text" 
            placeholder="Enter your name" 
            name="name" 
            id="name"
            value={formState.name}
            onChange={handleChange}
            required
          />
          <label htmlFor="email">Your Email</label>
          <input 
            type="email" 
            placeholder="Enter your email" 
            name="email" 
            id="email"
            value={formState.email}
            onChange={handleChange}
            required
          />
          <label htmlFor="message">Write your message</label>
          <textarea
            name="message"
            id="message"
            rows="10"
            placeholder="Enter your messages"
            value={formState.message}
            onChange={handleChange}
            required
          ></textarea>
          <button 
            type="submit" 
            className={`contact-submit ${loading ? 'loading' : ''}`}
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
