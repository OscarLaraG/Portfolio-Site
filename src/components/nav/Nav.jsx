import React from 'react';
import './nav.css';
import {AiFillHome} from 'react-icons/ai';
import {FaUserAlt} from 'react-icons/fa';
import {AiFillContacts} from 'react-icons/ai';
import {MdHomeRepairService} from 'react-icons/md';
import { useState } from 'react';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" className={activeNav === '#' ? 'active' : ''}><AiFillHome/></a>
      <a href="#about"><FaUserAlt/></a>
      <a href="#portfolio"><MdHomeRepairService/></a>
      <a href="#contact"><AiFillContacts/></a>
    </nav>
  )
}

export default Nav