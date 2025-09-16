import React, { useState, useEffect, useRef } from "react";
import { assets } from "../../assets/assets";
import "./Facts.css";

const Facts = ({ facts }) => {
  const [year, setYear] = useState(0);
  const [student, setStudent] = useState(0);
  const [teacher, setTeacher] = useState(0);
  const [graduate, setGraduate] = useState(0);
  const [startCounting, setStartCounting] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setYear(0);
          setStudent(0);
          setTeacher(0);
          setGraduate(0);
          setStartCounting(true);
        } else {
          setStartCounting(false);
          setYear(0);
          setStudent(0);
          setTeacher(0);
          setGraduate(0);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => sectionRef.current && observer.unobserve(sectionRef.current);
  }, []);

  useEffect(() => {
    if (!startCounting) return;

    const totalDuration = 2000;
    const yearIncrements = facts.yearIncrements;
    const studentIncrements = facts.studentIncrements;
    const teacherIncrements = facts.teacherIncrements;
    const graduateIncrements = facts.graduateIncrements;
    const steps = 40;

    const interval = totalDuration / steps;

    const yearStep = yearIncrements / steps;
    const studentStep = studentIncrements / steps;
    const teacherStep = teacherIncrements / steps;
    const graduateStep = graduateIncrements / steps;

    let count = 0;

    const intervalId = setInterval(() => {
      count++;
      setYear((prev) => Math.min(Math.round(prev + yearStep), yearIncrements));
      setStudent((prev) => Math.min(Math.round(prev + studentStep), studentIncrements));
      setTeacher((prev) => Math.min(Math.round(prev + teacherStep), teacherIncrements));
      setGraduate((prev) => Math.min(Math.round(prev + graduateStep), graduateIncrements));

      if (count >= steps) clearInterval(intervalId);
    }, interval);

    return () => clearInterval(intervalId);
  }, [startCounting]);

  const factData = [
    { value: year, label: "Experience", icon: assets.years },
    { value: student, label: "Students", icon: assets.students },
    { value: teacher, label: "Teachers", icon: assets.teachers },
    { value: graduate, label: "Graduates", icon: assets.graduates },
  ];

  return (
    <section ref={sectionRef} className="facts-container" id="facts">
      {factData.map((fact, index) => (
        <div key={index} className="fact-card">
          <img src={fact.icon} alt={fact.label} />
          <h2>{fact.value.toLocaleString()}+</h2>
          <p>{fact.label}</p>
        </div>
      ))}
    </section>
  );
};

export default Facts;
