import React from 'react'
import './footer.css'
import { FaFacebookF, FaLinkedinIn, FaGithub } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='footertest'>
      <a href="#" className='footer__logo'>OSHADA | THAWALAMPOLA</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="#"><FaFacebookF/></a>
        <a href="#"><FaLinkedinIn/></a>
        <a href="#"><FaGithub/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; OSHADA THAWALAMPOLA | ALL RIGHTS RESERVED</small>
      </div>
    </footer>
  )
}

export default Footer