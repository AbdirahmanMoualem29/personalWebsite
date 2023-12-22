import React, { useRef, useEffect } from 'react';
import './GetToKnowMe.css'; // Assuming you have a separate CSS file


function GetToKnowMe() {
  const sectionStyle = {
    backgroundColor: '#fff',
    padding: '30px',
    margin: '30px 0',
    borderRadius: '12px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)',
    borderLeft: '5px solid #d32f2f',
    position: 'relative',
  };

  const headingStyle = {
    color: '#b71c1c',
    margin: '0 0 15px 0',
    fontFamily: "'Segoe UI', sans-serif",
    fontWeight: 'bold',
    fontSize: '1.8rem'
  };

  const paragraphStyle = {
    color: '#333',
    fontFamily: "'Roboto', sans-serif",
    lineHeight: '1.7',
    marginBottom: '20px'
  };

  const journeyRef = useRef(null);
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('pop-out-right');
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the element is in view
    ); // <- Make sure this semicolon is here
  
    const observerLeft = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('pop-out-left');
          }
        });
      },
      { threshold: 0.5 }
    ); // <- Make sure this semicolon is here

    if (journeyRef.current) {
      observer.observe(journeyRef.current);
    }

    if (skillsRef.current) {
      observerLeft.observe(skillsRef.current);
    }

    return () => {
      if (journeyRef.current) {
        observer.unobserve(journeyRef.current);
      }

      if (skillsRef.current) {
        observerLeft.unobserve(skillsRef.current);
      }
    };
  }, []);


  return (
    <div className="container">
      <div className="journeySection">
        <h2 className="largeHeading">Journey</h2>
        <p style={paragraphStyle}>
          Fascinated by coding from a young age, I chose Computer Science and Engineering at OSU, blending engineering rigor with creative problem-solving through code.
        </p>
        <div className="svgContainer">
        <svg xmlns="http://www.w3.org/2000/svg" width="325" height="193" viewBox="0 0 325 193" data-shape="true" aria-hidden="true" id="cs-pattern-left">
          <path fill="none" stroke="#4831d4" stroke-miterlimit="50" stroke-width="2" d="M17.053 9.57a7.891 7.891 0 11-15.782 0 7.891 7.891 0 0115.782 0zM45.122 9.57a7.891 7.891 0 11-15.782 0 7.891 7.891 0 0115.782 0zM73.19 9.57a7.891 7.891 0 11-15.781 0 7.891 7.891 0 0115.782 0zM101.26 9.57a7.891 7.891 0 11-15.782 0 7.891 7.891 0 0115.782 0zM129.329 9.57a7.891 7.891 0 11-15.783 0 7.891 7.891 0 0115.783 0zM238.083 103.963v0l-.561 22.259v0l22.259-.561v0l-.561 22.258v0l22.259-.56v0l-.561 22.258v0l22.259-.56v0l-.559 22.26v0l22.26-.56v0"></path>
        </svg>
        </div>
      </div>
      <div className="column">
      <div className="svgContainer">
      <svg xmlns="http://www.w3.org/2000/svg" width="325" height="193" viewBox="0 0 325 193" data-shape="true" aria-hidden="true" id="cs-pattern-left">
          <path fill="none" stroke="#4831d4" stroke-miterlimit="50" stroke-width="2" d="M17.053 9.57a7.891 7.891 0 11-15.782 0 7.891 7.891 0 0115.782 0zM45.122 9.57a7.891 7.891 0 11-15.782 0 7.891 7.891 0 0115.782 0zM73.19 9.57a7.891 7.891 0 11-15.781 0 7.891 7.891 0 0115.782 0zM101.26 9.57a7.891 7.891 0 11-15.782 0 7.891 7.891 0 0115.782 0zM129.329 9.57a7.891 7.891 0 11-15.783 0 7.891 7.891 0 0115.783 0zM238.083 103.963v0l-.561 22.259v0l22.259-.561v0l-.561 22.258v0l22.259-.56v0l-.561 22.258v0l22.259-.56v0l-.559 22.26v0l22.26-.56v0"></path>
        </svg>
        </div>
        <h2 className="largeHeading">Skills</h2>
        <p style={paragraphStyle}>
          I've developed a strong skill set in programming languages like Java, JavaScript, Python, R, and am skilled in software tools such as MATLAB, SOLIDWORKS, along with Arduino coding and wiring.
        </p>
        
      </div>
    </div>
  );
}

export default GetToKnowMe;