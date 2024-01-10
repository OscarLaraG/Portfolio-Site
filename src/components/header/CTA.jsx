import React from 'react';
import CV2 from '../../assets/cv.pdf';

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV2} download className='btn btn-primary'>Download My Resume</a>
        <a href="#contact" className='btn btn-primary'> Contact Me</a>
    </div>
  )
}

export default CTA