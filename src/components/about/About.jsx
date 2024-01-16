import React from 'react'
import './about.css'
import ME from '../../assets/mytravel.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>Full Stack</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>SLIIT</h5>
              <small>Undergraduate</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>8+ completed</small>
            </article>
          </div>

          <p>I’m Oshada Thawalampola, I am a dedicated learner who is focused on providing an outstanding service to the finest quality. Always try to complete tasks assigned to the utmost level and therefore is motivated to reach perfection. Is a responsible individual who is driven to give a hundred percent not only when it comes to professional duties, but also day to day activities.</p>
          <a href="#contact" className='btn btn-primary btnc'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About