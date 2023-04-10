import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {AiOutlineGithub} from 'react-icons/ai';

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/oscar-l-130356155/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/OscarLaraG" target="_blank"><AiOutlineGithub/></a>
    </div>
  )
}

export default HeaderSocials