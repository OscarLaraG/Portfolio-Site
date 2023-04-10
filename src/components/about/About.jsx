import React from "react";
import './about.css';
import {ImBooks} from 'react-icons/im';
import {GiSuitcase} from 'react-icons/gi';
import {GiSoccerBall} from 'react-icons/gi';


const About = () => {
  return (
    <section id = 'about'>
      <h5>Who am I ?</h5>
      <h2>About me</h2>

      <div className="container about_container">

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <ImBooks className="about_icon"/>
              <h5>Academics</h5>
              <small>PLaceholder</small>
            </article>
            <article className="about_card">
              <GiSuitcase className="about_icon"/>
              <h5>Experience</h5>
              <small>PLaceholder</small>
            </article>
            <article className="about_card">
              <GiSoccerBall className="about_icon"/>
              <h5>Interests</h5>
              <small>placeholder</small>
            </article>
          </div>
          <p>
            Computer Science student, with a focus on full-stack development.
            With projects on Data Science, Automation, and a mobile application.
          </p>

          <a href="#contact" className='btn btn-primary'>Wanna talk?</a>

        </div>
      </div>
    </section>
  )
}

export default About