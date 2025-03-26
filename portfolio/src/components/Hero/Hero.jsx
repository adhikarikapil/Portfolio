import React from "react";
import "./HeroStyles.css";
import Profile from "../../assets/profile.jpeg";

function Hero() {
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
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
}

export default Hero;
