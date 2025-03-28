import React from "react";
import "./AboutStyles.css";
import Skill from "../Skills/Skill";
import Theme from "../../assets/theme_pattern.svg";
import Profile from "../../assets/profile.jpeg";

function About() {
  return (
    <div className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={Theme} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={Profile} alt="" className="size-120" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              {" "}
              I am an experienced fullstack developer with 1 year of experience.
              I am currently studying at Kathmandu University, Nepal.
            </p>
            <p>
              I am a passionate developer who is always looking for new
              challenges and opportunities to learn and grow. I am also a team
              player and am always ready to help my team members. I am a quick
              learner and I am always ready to learn new things.
            </p>
          </div>

          <Skill />

          <div className="about-skills">
            <div className="about-skill">
              <p>Linux</p>
              <hr style={{ width: "90%" }} />
            </div>
            <div className="about-skill">
              <p>HTML</p>
              <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>CSS</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "90%" }} />
            </div>
            <div className="about-skill">
              <p>React</p>
              <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>Python</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>Django</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>Flask</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>MySQL</p>
              <hr style={{ width: "90%" }} />
            </div>
            <div className="about-skill">
              <p>SQLite</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>Git</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>Docker</p>
              <hr style={{ width: "50%" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
