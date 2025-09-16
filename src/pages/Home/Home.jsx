import React from 'react'

import Title from '../../components/Title/Title'
import About from './components/About/About'

import Programs from './components/Programs/Programs'
import Campus from '../../components/Campus/Campus'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'


import Facts from '../../components/Facts/Facts'
import { allFacts, heroHome,  navbarListHome } from '../../assets/assets'
import Hero from '../../components/Hero/Hero'
import Navbar from '../../components/Navbar/Navbar'
import NewEventDialog from '../../components/NewEventDialog/NewEventDialog'




const Home = () => {
  return (
    <div >
       <Navbar navbarList={navbarListHome} scrollY={60}/>
        <Hero hero={heroHome}/>
        <NewEventDialog/>
        
        <div className='container' >
        <About/>
        
        <Title subtitle="Facts" title = "What We Reach"/>
        <Facts facts={allFacts}/>
        <Title subtitle="DIVISIONS" title = "What We Offer"/>
        <Programs/>
        <Title subtitle="GALLERY" title = "Student Photos"/>
        <Campus/>
        <Title subtitle="TESTIMONIALS" title = "What Student Says"/>
        <Testimonials/>
        <Title subtitle="Contact Us" title = "Get in Touch"/>
        <Contact/>
        {/* <Footer/> */}
        </div>

        
      
    </div>
  )
}

export default Home
