import React from 'react';
import './contact.css';
 
import {MdEmail} from 'react-icons/md';
import {BsLinkedin} from 'react-icons/bs';

const Contact = () => {
  return (

    <section id = 'contact'>
      <h5>Connect with me!</h5>
      <h2>Contact me</h2>


      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdEmail/>
            <h4>Email</h4>
            <h5>oscar.lara23@gmail.com</h5>
            <a href="mailto:oscar.lara23@gmail.com"> Send an email!</a>
          </article>
          <article className="contact_option">
            <BsLinkedin/>
            <h4>LinkedIn</h4>
            <h5>Oscar Lara Garcia</h5>
            <a href="https://www.linkedin.com/in/oscar-l-130356155/"> Send a connection!</a>
          </article>
        </div>
        {/*end of contact options*/}
        <form action=""></form>
      </div>
    </section>
  )
}

export default Contact