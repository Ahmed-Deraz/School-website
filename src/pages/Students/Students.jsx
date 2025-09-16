import Title from "../../components/Title/Title";

import {
  craftingData,
  graduatingData,
  heroGallery,
  learningData,
  navbarListStudent,
  playingData,
  socialisingData,
} from "../../assets/assets";

import NavbarSticky from "../../components/Navbar/NavbarSticky";

import SlidingGallery from "../../components/SlidingGallery/SlidingGallery";
import HeroOfGallery from "../../components/HeroOfGallery/HeroOfGallery";

const Students = () => {
  return (
    <>
      <div className="extracurricular">
        <NavbarSticky navbarList={navbarListStudent} />
        <HeroOfGallery text={heroGallery.textStudents} />

        <div className="container">
          <Title subtitle="Learning" title="Knowledge Ignites Growth" />
          <SlidingGallery data={learningData} idName='learn'/>

          <Title subtitle="Entertaining" title="Joy Inspires Creativity" />
          <SlidingGallery data={playingData} idName='entertain' />

          <Title subtitle="Crafting" title="Imagination Meets Skill" />
          <SlidingGallery data={craftingData} idName='craft' />

          <Title subtitle="Socialising" title="Friendship Builds Confidence" />
          <SlidingGallery data={socialisingData} idName='socialise' />
          <Title subtitle="Graduating" title="Endings Spark Beginnings" />
          <SlidingGallery data={graduatingData} idName='graduate' />
        </div>
      </div>
    </>
  );
};

export default Students;
