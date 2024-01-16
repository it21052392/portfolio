import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './header.css';
import CTA from './CTA';
import ME from '../../assets/me.jpg';
import HeaderSocials from './HeaderSocials';

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3
    }
  }
};

const childVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 120
    }
  }
};

const Header = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2 // Adjust this value as needed
  });

  return (
    <header id='header' ref={ref}>
      <motion.div 
        className="container header__container"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.h2 variants={childVariants}>Hey I'm</motion.h2>
        <motion.h1 variants={childVariants}>Oshada Thawalampola</motion.h1>
        <motion.h5 variants={childVariants} className="text-light">
          Software Engineer | Fullstack Developer
        </motion.h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" className='imageme' />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </motion.div>
    </header>
  );
};

export default Header;
