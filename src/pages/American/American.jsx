import React, { useState } from "react";

import Title from "../../components/Title/Title";

import Campus from "../../components/Campus/Campus";

import Departments from "../../components/Divisions/Departments/Departments";
import {
  americanFacts,
  departmentsAmerican,
  headAmerican,
  heroAmerican,
  navbarListAmerican,
} from "../../assets/assets";
import DepartmentsHead from "../../components/Divisions/DepartmentsHead/DepartmentsHead";
import Facts from "../../components/Facts/Facts";
import Hero from "../../components/Hero/Hero";
import Navbar from "../../components/Navbar/Navbar";

const American = () => {
  const [showDepartmentHeads, setShowDepartmentHeads] = useState("close");
  return (
    <>
      {showDepartmentHeads === "playSchool" ? (
        <DepartmentsHead
          setShowDepartmentHeads={setShowDepartmentHeads}
          head={headAmerican.playschool}
        />
      ) : (
        <></>
      )}
      {showDepartmentHeads === "keyStage" ? (
        <DepartmentsHead
          setShowDepartmentHeads={setShowDepartmentHeads}
          head={headAmerican.keystage}
        />
      ) : (
        <></>
      )}
      {showDepartmentHeads === "elementary" ? (
        <DepartmentsHead
          setShowDepartmentHeads={setShowDepartmentHeads}
          head={headAmerican.elementary}
        />
      ) : (
        <></>
      )}
      {showDepartmentHeads === "middle" ? (
        <DepartmentsHead
          setShowDepartmentHeads={setShowDepartmentHeads}
          head={headAmerican.middle}
        />
      ) : (
        <></>
      )}
      {showDepartmentHeads === "highSchool" ? (
        <DepartmentsHead
          setShowDepartmentHeads={setShowDepartmentHeads}
          head={headAmerican.highschool}
        />
      ) : (
        <></>
      )}

      <div className="american-home">
        <Navbar navbarList={navbarListAmerican} scrollY={60} backHome='divisions' />
        <Hero hero={heroAmerican} />

        <div className="container">
          <Title subtitle="Facts" title="What We Reach" />
          <Facts facts={americanFacts} />
          <Title subtitle="Departments" title="What We Offer" />

          <Departments
            departments={departmentsAmerican}
            setShowDepartmentHeads={setShowDepartmentHeads}
          />

          <Title subtitle="GALLERY" title="Student Photos" />
          <Campus />
        </div>
      </div>
    </>
  );
};

export default American;
