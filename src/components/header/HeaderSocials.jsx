import React from 'react'
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/oshada-thawalampola-600289249" target='_blank'><BsLinkedin/></a>
        <a href="https://github.com/it21052392" target='_blank'><FaGithub/></a>
        <a href="https://www.facebook.com/oshada.thawalampola.1" target='_blank'><FaFacebook/></a>
    </div>
  )
}

export default HeaderSocials