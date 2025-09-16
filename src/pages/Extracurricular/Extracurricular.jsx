import Title from "../../components/Title/Title";

import { culturalData, funData, heroGallery, navbarListExtracurricular, sportData } from "../../assets/assets";

import NavbarSticky from "../../components/Navbar/NavbarSticky";


import SlidingGallery from "../../components/SlidingGallery/SlidingGallery";
import HeroOfGallery from "../../components/HeroOfGallery/HeroOfGallery";


const Extracurricular = () => {
  return (
    <>
      <div className="extracurricular">
        <NavbarSticky navbarList={navbarListExtracurricular} />
        
        <HeroOfGallery text={heroGallery.textExtracurricular}/>

        <div className="container">
          <Title subtitle="Sport" title="Feel The Energy" />
          <SlidingGallery data={sportData} idName='sport'/>
          <Title subtitle="Cultural" title="Live The Legacy" />
          <SlidingGallery data={culturalData} idName='cultural'/>
          <Title subtitle="Fun" title="Vibes That Last" />
          <SlidingGallery data={funData} idName='fun'/>


         
        </div>
      </div>
    </>
  );
};

export default Extracurricular;
