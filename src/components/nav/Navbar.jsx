import React, { useState } from 'react';
import './navbar.css'; // Ensure this CSS doesn't conflict with Tailwind
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
// import { RiServiceLine } from "react-icons/ri";
import { SiLastdotfm } from "react-icons/si";

const Navbar = () => {
  const [activeNav, setActiveNav] = useState('#');

  return (
    <nav className="flex justify-between items-center p-4 md:justify-start md:space-x-10">
      <a href="#" onClick={() => setActiveNav('#')} className={`px-2 py-1 text-sm font-medium ${activeNav === '#' ? 'active' : ''}`}>
        <AiOutlineHome />
      </a>
      <a href="#header" onClick={() => setActiveNav('#header')} className={`px-2 py-1 text-sm font-medium ${activeNav === '#header' ? 'active' : ''}`}>
        <SiLastdotfm />
      </a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={`px-2 py-1 text-sm font-medium ${activeNav === '#about' ? 'active' : ''}`}>
        <AiOutlineUser />
      </a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={`px-2 py-1 text-sm font-medium ${activeNav === '#experience' ? 'active' : ''}`}>
        <BiBook />
      </a>
      {/* <a href="#services" onClick={() => setActiveNav('#services')} className={`px-2 py-1 text-sm font-medium ${activeNav === '#services' ? 'active' : ''}`}>
        <RiServiceLine />
      </a> */}
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={`px-2 py-1 text-sm font-medium ${activeNav === '#contact' ? 'active' : ''}`}>
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
}

export default Navbar;
