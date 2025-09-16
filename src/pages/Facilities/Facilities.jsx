import Title from "../../components/Title/Title";

import {
    academicsData,
  adminData,
  artData,
  heroGallery,
  
  navbarListFacilities,

  sportsData,
  welfareData,
} from "../../assets/assets";

import NavbarSticky from "../../components/Navbar/NavbarSticky";


import HeroOfGallery from "../../components/HeroOfGallery/HeroOfGallery";
import SlidingGallery from "../../components/SlidingGallery/SlidingGallery";

const Facilities = () => {
  return (
    <>
      <div className="facilities">
        <NavbarSticky navbarList={navbarListFacilities} />
        <HeroOfGallery text={heroGallery.textFacilities} />

        <div className="container">
          <Title subtitle="Academic " title="Knowledge Ignites Growth" />
          <SlidingGallery data={academicsData} idName='academic'/>

          <Title subtitle="Sport" title="Every Move Matters" />
          <SlidingGallery data={sportsData} idName='sport' />

          <Title subtitle="Art" title="Talent Meets Expression" />
          <SlidingGallery data={artData} idName='art' />
          <Title subtitle=" Welfare" title="Caring Creates Confidence" />
          <SlidingGallery data={welfareData} idName='welfare' />
          <Title subtitle="Administrative" title="Systems That Support" />
          <SlidingGallery data={adminData} idName='administrative' />
        </div>
      </div>
    </>
  );
};

export default Facilities;
