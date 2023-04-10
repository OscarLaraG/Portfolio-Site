import React from 'react';
import './experience.css';
import {BsFillPatchCheckFill} from 'react-icons/bs';

const Experience = () => {
  return (
    <section id = 'section'>
      <h5>Skills</h5>
      <h2>Frameworks, Languages, Applications</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Front End Development</h3>
          <div className="experience_content">
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details_icon'/>
              <h4>HTML</h4>
            </article>
            <article className='experience_details'>
            <BsFillPatchCheckFill className='experience_details_icon'/>
              <h4>CSS</h4>
            </article>
            <article className='experience_details'>
            <BsFillPatchCheckFill className='experience_details_icon'/>
              <h4>ReactJS</h4>
            </article>
            <article className='experience_details'>
            <BsFillPatchCheckFill className='experience_details_icon'/>
              <h4>Firebase</h4>
            </article>
            <article className='experience_details'>
            <BsFillPatchCheckFill className='experience_details_icon'/>
              <h4>Dart</h4>
            </article>
            <article className='experience_details'>
            <BsFillPatchCheckFill className='experience_details_icon'/>
              <h4>Flutter</h4>
            </article>

          </div>
        </div>
        <div className="experience_backend">
        <h3>Back End Development</h3>
        <div className="experience_content">
           <article className='experience_details'>
           <BsFillPatchCheckFill className='experience_details_icon'/>
              <h4>C++</h4>
            </article>
            <article className='experience_details'>
            <BsFillPatchCheckFill className='experience_details_icon'/>
              <h4>Python</h4>
            </article>
            <article className='experience_details'>
            <BsFillPatchCheckFill className='experience_details_icon'/>
              <h4>Javascript</h4>
            </article>
            <article className='experience_details'>
            <BsFillPatchCheckFill className='experience_details_icon'/>
              <h4>Postman</h4>
            </article>
            
        </div>
        </div>
      </div>
    </section>
  )
}

export default Experience