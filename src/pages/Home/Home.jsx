import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Title from "../../components/Title/Title";
import About from "./components/About/About";
import Programs from "./components/Programs/Programs";
import Campus from "../../components/Campus/Campus";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Facts from "../../components/Facts/Facts";
import Hero from "../../components/Hero/Hero";
import Navbar from "../../components/Navbar/Navbar";
import NewEventDialog from "../../components/NewEventDialog/NewEventDialog";

import { allFacts, heroHome, navbarListHome } from "../../assets/assets";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    const id = location.state?.scrollTo;
    if (!id) return;

    // small delay to ensure DOM is mounted; increase if sections render async
    const t = setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        const headerHeight = 60; // adjust to your navbar height
        const top = el.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        window.scrollTo({ top, behavior: "smooth" });
      }
      // clear navigation state so refresh/back won't re-trigger
      try {
        window.history.replaceState({}, document.title);
      } catch (err) {}
    }, 60);

    return () => clearTimeout(t);
  }, [location]);

  return (
    <div>
      <Navbar navbarList={navbarListHome} scrollY={60} />
      <Hero hero={heroHome} />
      <NewEventDialog />

      <div className="container">
        
          <About />
       

      
          <Title subtitle="Facts" title="What We Reach" />
          <Facts facts={allFacts} />
       

       
          <Title subtitle="DIVISIONS" title="What We Offer" />
          <Programs />
      

      
          <Title subtitle="GALLERY" title="Student Photos" />
          <Campus />
       

        
          <Title subtitle="TESTIMONIALS" title="What Student Says" />
          <Testimonials />
        

       
          <Title subtitle="Contact Us" title="Get in Touch" />
          <Contact />
        
      </div>
    </div>
  );
};

export default Home;
