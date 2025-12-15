import React, { useState } from 'react'
import DepartmentsHead from '../../components/Divisions/DepartmentsHead/DepartmentsHead';
import { britishFacts, departmentsBritish, headBritish, heroBritish, navbarListBritish } from '../../assets/assets';
import Title from '../../components/Title/Title';
import Campus from '../../components/Campus/Campus';
import Navbar from '../../components/Navbar/Navbar';
import Hero from '../../components/Hero/Hero';
import Facts from '../../components/Facts/Facts';
import Departments from '../../components/Divisions/Departments/Departments';

const British = () => {
  const [showDepartmentHeads, setShowDepartmentHeads] = useState("close");
  return (
    <>
           {showDepartmentHeads === "playSchool" ? 
           <DepartmentsHead
           setShowDepartmentHeads={setShowDepartmentHeads}
           head ={headBritish.playschool}
         />
       : 
        <></>
      }
           {showDepartmentHeads === "foundation_stage" ? 
        <DepartmentsHead
        setShowDepartmentHeads={setShowDepartmentHeads}
        head ={headBritish.foundation_stage}
      />
       : 
        <></>
      }
           {showDepartmentHeads === "primary" ? 
       <DepartmentsHead
          setShowDepartmentHeads={setShowDepartmentHeads}
          head ={headBritish.primary}
        />
       : 
        <></>
      }
           {showDepartmentHeads === "lower_secondary" ? 
         <DepartmentsHead
         setShowDepartmentHeads={setShowDepartmentHeads}
         head ={headBritish.lower_secondary}
       />
       : 
        <></>
      }
           {showDepartmentHeads === "upper_grades" ? 
        <DepartmentsHead
        setShowDepartmentHeads={setShowDepartmentHeads}
        head ={headBritish.upper_grades}
      />
       : 
        <></>
      }
    

    

      <div className="british-home">
       <Navbar navbarList={navbarListBritish} scrollY={60} backHome="divisions"/>
        <Hero hero={heroBritish}/>
        
        <div className="container">
          <Title subtitle="Facts" title="What We Reach" />
         <Facts facts={britishFacts}/>
          <Title subtitle="Departments" title="What We Offer" />
   
          <Departments departments={departmentsBritish}  setShowDepartmentHeads={setShowDepartmentHeads} />
          

          <Title subtitle="GALLERY" title="Student Photos" />
          <Campus />
        </div>
      </div>
    </>
  );
};


export default British
