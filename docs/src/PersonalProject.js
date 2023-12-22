import React from 'react';
import './PersonalProjects.css'; // Make sure to create a corresponding CSS file

const PersonalProject = () => {
  return (
    <div className="projectsContainer">
      <div className="project">
        <h3>Automotive Garbage Bin</h3>
        <p className="project-date">August - December 2022</p>
        <ul>
          <li>Designed and built a car trash can for children to help prevent distractions for parents while driving.</li>
          <li>Utilized MATLAB and SOLIDWORK software to complete calculations and design.</li>
          <li>Placed 1st place as team in the engineering competition.</li>
        </ul>
      </div>
      
      <div className="project">
        <h3>Design and Development of Mobile Robotic</h3>
        <p className="project-date">January - May 2022</p>
        <ul>
          <li>Developed a robot with the capability to detect walls and navigate accordingly, showcasing expertise in robotic design and sensor integration.</li>
          <li>Led the design, assembly, and programming phases, ensuring a cohesive and functional robotic system.</li>
          <li>Successfully executed and tested the robotic system in real-world scenarios, validating its performance and reliability.</li>
        </ul>
      </div>
    </div>
  );
};

export default PersonalProject;
