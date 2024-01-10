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
              <ul><small><li>Hunter College Graduate</li>
              <li>Computer Science Major</li>
              <li>CodePath Certified Student</li>
              </small></ul>
            </article>
            <article className="about_card">
              <GiSuitcase className="about_icon"/>
              <h5>Experience</h5>
              <small>CodeSpeak Labs - Coding Coach</small>
            </article>
            <article className="about_card">
              <GiSoccerBall className="about_icon"/>
              <h5>Interests</h5>
              <ul><small><li>Football</li>
              <li>Sneakers</li>
              <li>Gaming</li>
              </small></ul>
            </article>
          </div>
          <p>
            Hunter College Computer Science Graduate, with a focus on Data Science.
            
          </p>

          <a href="#contact" className='btn btn-primary'>Wanna talk?</a>

        </div>
      </div>
    </section>
  )
}

export default About