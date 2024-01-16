import React from 'react'
import Header from './components/header/Header'
import Navbar from './components/nav/Navbar'
import About from './components/about/About'
import Experience from './components/experience/Experience'
// import Services from './components/services/Services'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Banner from './components/banner/banner'

const App = () => {
  return (
    <>
      <Banner />
      <Header />
      <Navbar />
      <About />
      <Experience />
      {/* <Services /> */}
      <Contact />
      <Footer />
    </>
  )
}

export default App