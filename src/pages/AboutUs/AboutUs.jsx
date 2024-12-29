import React, { useState } from 'react'
import History from './components/History/History'
import Navbar from '../../components/Navbar/Navbar'
import { navbarListAbout,  valueStatement, valueTitle } from '../../assets/assets'
import Title from '../../components/Title/Title'
import KeyPrinciplesWord from './components/KeyPrinciplesWord/KeyPrinciplesWord'
import Values from './components/Values/Values'
import ValueStatement from './components/ValueStatement/ValueStatement'

const AboutUs = () => {
  const [showValueStatement, setShowValueStatement] = useState("close");
  
 
           
  return (
    <>
    {showValueStatement === "Mission" ? 
    <ValueStatement
    setShowValueStatement={setShowValueStatement}
    valueStatement ={valueStatement.mission}
  />
: 
 <></>
}
    {showValueStatement === "Vision" ? 
    <ValueStatement
    setShowValueStatement={setShowValueStatement}
    valueStatement ={valueStatement.vision}
  />
: 
 <></>
}
    {showValueStatement === "Core value" ? 
    <ValueStatement
    setShowValueStatement={setShowValueStatement}
    valueStatement ={valueStatement.coreValue}
  />
: 
 <></>
}
    <div className='about-us'>
       <Navbar navbarList={navbarListAbout} scrollY={-1} />
       <br/>
       <br/>
       <br/>
       
        <div className="container">
        <Title subtitle="History" title="Our Legacy" />
        <History/>
        <Title subtitle="Princiles" title="What we promise" />
        <KeyPrinciplesWord/>
        <Title subtitle="Princiles" title="What we promise" />
        <Values valueTitle={valueTitle} setShowValueStatement={setShowValueStatement}/>
        

        </div>
       
       
      
    </div>
    </>
  
  )
  
}

export default AboutUs
