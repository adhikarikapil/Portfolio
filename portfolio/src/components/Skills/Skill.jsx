import React from 'react'
import './SkillStyles.css'
import { 
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
  FaDocker,
  FaGitAlt,
  FaLinux
} from 'react-icons/fa';
import { 
  SiDjango,
  SiFlask,
  SiMysql,
  SiTailwindcss,
  SiTypescript,
  SiMongodb,
} from 'react-icons/si';

const skills = [
  { icon: <FaHtml5 size={40} />, name: 'HTML', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
  { icon: <FaCss3Alt size={40} />, name: 'CSS', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
  { icon: <FaJs size={40} />, name: 'JavaScript', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
  { icon: <SiTypescript size={40} />, name: 'TypeScript', link: 'https://www.typescriptlang.org/' },
  { icon: <FaReact size={40} />, name: 'React', link: 'https://reactjs.org/' },
  { icon: <SiTailwindcss size={40} />, name: 'Tailwind', link: 'https://tailwindcss.com/' },
  { icon: <FaPython size={40} />, name: 'Python', link: 'https://www.python.org/' },
  { icon: <SiDjango size={40} />, name: 'Django', link: 'https://www.djangoproject.com/' },
  { icon: <SiFlask size={40} />, name: 'Flask', link: 'https://flask.palletsprojects.com/' },
  { icon: <SiMysql size={40} />, name: 'MySQL', link: 'https://www.mysql.com/' },
  { icon: <SiMongodb size={40} />, name: 'MongoDB', link: 'https://www.mongodb.com/' },
  { icon: <FaGitAlt size={40} />, name: 'Git', link: 'https://git-scm.com/' },
  { icon: <FaDocker size={40} />, name: 'Docker', link: 'https://www.docker.com/' },
  { icon: <FaLinux size={40} />, name: 'Linux', link: 'https://www.linux.org/' }
];

function Skill() {
  return (
    <div className="skills-section">
      <h2>My Skills</h2>
      <div className="skills-container">
        <div className="skills-gradient-left" />
        <div className="skills-track">
          <div className="skills-content">
            {[...skills, ...skills].map((skill, index) => (
              <a 
                key={`${skill.name}-${index}`}
                href={skill.link}
                target="_blank"
                rel="noopener noreferrer"
                className="skill-item"
              >
                <div className="skill-content">
                  {skill.icon}
                  <span>{skill.name}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
        <div className="skills-gradient-right" />
      </div>
    </div>
  )
}

export default Skill;
