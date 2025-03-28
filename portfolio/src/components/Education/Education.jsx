import React from 'react'
import './EducationStyles.css'
import Theme from "../../assets/theme_pattern.svg"
import EducationData from '../../assets/education'
import ArrowIcon from '../../assets/arrow_icon.svg'

function Education() {
  return (
    <div className='education'>
        <div className="education-title">
            <h1>My Education</h1>
            <img src={Theme} alt='' />
        </div>
        <div className="education-container">
            {EducationData.map((education, index)=> {
                return(
                    <div key={index} className='education-format'>
                        <h3>{education.s_no}</h3>
                        <h2>{education.s_name}</h2>
                        <p>{education.s_desc}</p>
                        <div className="education-readmore">
                            <p>Read More</p>
                            <img src={ArrowIcon} alt="" />
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Education
