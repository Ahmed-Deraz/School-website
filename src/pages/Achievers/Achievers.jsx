import Title from "../../components/Title/Title";

import {
  heroGallery,
  navbarListAchievers,
  navbarListFacilities,
  scholarData,
} from "../../assets/assets";

import HeroOfGallery from "../../components/HeroOfGallery/HeroOfGallery";
import SlidingAchievers from "./components/SlidingAchievers/SlidingAchievers";
import NavbarSticky from "../../components/Navbar/NavbarSticky";

const Achievers = () => {
  return (
    <>
      <div className="achivers">
        <NavbarSticky navbarList={navbarListAchievers} />
        <HeroOfGallery text={heroGallery.textAchievers} />

        <div className="container">
          <Title subtitle="Scholars" title="Champions Of Knowledge" />
          <SlidingAchievers data={scholarData} idName="scholars" />
          <Title subtitle="All-Stars" title="Champions Of Passion" />
          <SlidingAchievers data={scholarData} idName="allStars" />
          <Title subtitle="PathFinders" title="Champions Of Ambition" />
          <SlidingAchievers data={scholarData} idName="pathfinders" />
        </div>
      </div>
    </>
  );
};

export default Achievers;
