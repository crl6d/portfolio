import React from 'react'
import ReactJs from '../../assets/react.svg'
import Html from '../../assets/html.svg'
import Css from '../../assets/css.svg'
import JavaScript from '../../assets/js.svg'
import '../section2/section2.css'



function Section2() {
  return (
    <>
        <section className="skills" id="section2">
            <p className="text">My Skills</p>
            <div className="skill_boxes">
                <div className="skill_box">
                    <img src={ReactJs} alt="" />
                    <div>React JS</div>
                </div>
                
                <div className="skill_box">
                    <img src={Html} alt="" />
                    <div>HTML</div>
                </div>

                <div className="skill_box">
                    <img src={Css} alt="" />
                    <div>CSS</div>
                </div>

                <div className="skill_box">
                    <img src={JavaScript} alt="" />
                    <div>JavaScript</div>
                </div>
                
            </div>
        </section>
    </>
  )
}

export default Section2