import React, { useState, useEffect, useRef } from "react";
import { assets } from '../../assets/assets';
import './Facts.css'

const Facts = ({facts}) => {
  // States for the counters
    const [year, setYear] = useState(0);
    const [student, setStudent] = useState(0);
    const [teacher, setTeacher] = useState(0);
    const [graduate, setGraduate] = useState(0);
  
    // State to track when to start counting
    const [startCounting, setStartCounting] = useState(false);
  
    // Reference for the section we want to observe
    const sectionRef = useRef(null);
  
    // Use the Intersection Observer API to detect when the section is in view
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            // Reset counters and start counting again when section is visible
            setYear(0);
            setStudent(0);
            setTeacher(0);
            setGraduate(0);
            setStartCounting(true); // Start counting when section is visible
          } else {
            // Reset counters to zero when section is not visible
            setStartCounting(false);
            setYear(0);
            setStudent(0);
            setTeacher(0);
            setGraduate(0);
          }
        },
        { threshold: 1 } // Trigger when 100% of the section is visible
      );
  
      if (sectionRef.current) {
        observer.observe(sectionRef.current); // Start observing the section
      }
  
      return () => {
        if (sectionRef.current) {
          observer.unobserve(sectionRef.current); // Clean up observer on unmount
        }
      };
    }, []);
  
    // Effect to start counters when the section is visible
    useEffect(() => {
      if (!startCounting) return; // Don't start counters until section is in view
  
      const totalDuration = 2000; // Total duration in milliseconds (2 seconds)
  
      // Number of increments for each counter (kept as is)
      const yearIncrements = facts.yearIncrements; // Increments for years (from 2001 to 2025)
      const studentIncrements = facts.studentIncrements; // Increments for students
      const teacherIncrements = facts.teacherIncrements; // Increments for teachers
      const graduateIncrements = facts.graduateIncrements; // Increments for teachers
  
      // Calculate the total number of increments (the min number of increments)
      const minIncrements = Math.min(yearIncrements, studentIncrements, teacherIncrements);
  
      // Calculate a common interval time for all counters based on the min increments
      const intervalTime = totalDuration / minIncrements;
  
      // Year counter
      const yearInterval = setInterval(() => {
        setYear((prevYear) => {
          if (prevYear < yearIncrements) {
            return prevYear + 2; // Increment by 2 each time
          } else {
            clearInterval(yearInterval); // Stop once we hit the limit
            return prevYear;
          }
        });
      }, intervalTime);
  
      // Student counter
      const studentInterval = setInterval(() => {
        setStudent((prevStudent) => {
          if (prevStudent < studentIncrements) {
            return prevStudent + 500; // Increment by 500 each time
          } else {
            clearInterval(studentInterval); // Stop once we hit the limit
            return prevStudent;
          }
        });
      }, intervalTime);
  
      // Teacher counter
      const teacherInterval = setInterval(() => {
        setTeacher((prevTeacher) => {
          if (prevTeacher < teacherIncrements) {
            return prevTeacher + 25; // Increment by 25 each time
          } else {
            clearInterval(teacherInterval); // Stop once we hit the limit
            return prevTeacher;
          }
        });
      }, intervalTime);
  
      // graduate counter
      const graduateInterval = setInterval(() => {
        setGraduate((prevGraduate) => {
          if (prevGraduate < graduateIncrements) {
            return prevGraduate + 100; // Increment by 25 each time
          } else {
            clearInterval(graduateInterval); // Stop once we hit the limit
            return prevGraduate;
          }
        });
      }, intervalTime);
  
      // Cleanup intervals when component unmounts or startCounting changes
      return () => {
        clearInterval(yearInterval);
        clearInterval(studentInterval);
        clearInterval(teacherInterval);
      };
    }, [startCounting]); // This effect runs when the section becomes visible
  
    return (
      <div ref={sectionRef} className="facts" >
          <div className="fact">
              <img src={assets.years} alt="" />
  
          <p>{year}+</p>
          <span>Experience</span>
  
          </div>
          <div className="fact">
              <img src={assets.students} alt="" />
  
          <p>{student}+</p>
          <span>Students</span>
  
          </div>
          <div className="fact">
              <img src={assets.teachers} alt="" />
  
          <p>{teacher}+</p>
          <span>Teachers</span>
  
          </div>
          <div className="fact">
              <img src={assets.graduates} alt="" />
  
          <p>{graduate}+</p>
          <span>Graduates</span>
  
          </div>
      
      </div>
    );
  };

export default Facts
