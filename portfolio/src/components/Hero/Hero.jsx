import React from "react";
// import { Link } from "react-router-dom";
import "./HeroStyles.css";
import Profile from "../../assets/profile.jpeg";

function Hero() {
  const handleLinkClick = () => {
    window.location.href = "/resume";
  };

  return (
    <div className="hero">
      <img src={Profile} alt="KapilProfile" className="rounded-full" />
      <h1>
        <span>I'm Kapil Adhikari,</span>
        fullstack developer based in Nepal.
      </h1>
      <p>
        I am fullstack developer currently studing at Kathmandu University,
        Nepal with 1 year of experience.
      </p>
      <div className="hero-action">
        <div className="hero-connect">Connect With Me</div>
        <div className="hero-resume" onClick={handleLinkClick}>My Resume</div>
      </div>
    </div>
  );
}

export default Hero;
