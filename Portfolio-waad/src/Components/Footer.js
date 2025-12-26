import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {SiLeetcode} from "react-icons/si"

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Waad Rahmouni</h4>
      <h4>Copyright &copy; 2025</h4>
      <div className='footerLinks'>
        <a href="https://github.com" target='_blank'><FaGithub/></a>
        <a href="https://www.linkedin.com" target='_blank'><FaLinkedin/></a>
        <a href='mailTo:rahmouniwaad05@gmail.com' target='_blank'><GrMail/></a>
      </div>
    </footer>
  )
}

export default Footer