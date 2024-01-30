import React from 'react'
import '../section1/section1.css'
import Github from  '../../assets/github.svg'
import Mail from '../../assets/mail.svg'



function Section1() {
  return (
    <>
    <section id="section1">
        <h1>
            Hello, I am Kirill <br /> Front-end Developer
        </h1>
        <div className="links">
            <div className="link"><img src={Github} alt="" /><p>Github</p></div>
            <div className="link"><img src={Mail} alt="" /><p>Mail</p></div>
        </div>
        <p className="about_small"><span class="invisible">I am a </span>young front-end developer with a desire to improve my skills</p>
    </section>
    </>
  )
}

export default Section1