import React from "react";
import "./ProjectStyles.css";
import Theme from "../../assets/theme_pattern.svg";
import ProjectData from "../../assets/projects";

function Project() {
  const handleClick = () => {
    window.open("https://github.com/adhikarikapil", '_blank', 'noopener noreferrer');
  };

  return (
    <div className="project-container">
      <div className="project-heading" id="projects">
        <h1>My Project</h1>
        <img src={Theme} alt="" />
      </div>
      <div className="project-map-container">
        {ProjectData.map((project, index) => {
          return (
            <div className="project-format" id={index}>
              <div className="project-detail">
                <div className="project-titles">
                  <h3>{project.w_no}.</h3>
                  <h1>{project.w_name}</h1>
                </div>
                <div className="project-img">
                  <img src={project.w_img} alt="" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="button" onClick={handleClick}>
        Show More
      </div>
    </div>
  );
}

export default Project;
