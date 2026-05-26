import React from 'react';
import './styles/experience.scss'; 

const experienceData = [
  {
    role: "Frontend Developer Intern",
    company: "Tesselonix Pvt. Ltd.",
    duration: "May 2026 - Present",
    description: "Building responsive web applications using ReactJS and Tailwind CSS. Optimizing website performance and collaborating with UI/UX designers to implement pixel-perfect features.",
    icon: "💻" 
  },
  {
    role: "Freelance",
    company: "Youthconnect Pvt. Ltd.",
    duration: "Jan 2026 - Apr 2026",
    description: "Developed and maintained cross-platform mobile applications. Worked on state management using Redux Toolkit and integrated third-party REST APIs.",
    icon: "📱"
  },
];

const Experience = () => {
  return (
    <section className="p-experience-m-c">
      <div className="experience-header">
        <h2>EXPERIENCE</h2>
      </div>

      <div className="timeline-container">
        <div className="timeline-line"></div>

        {experienceData.map((exp, index) => {
          const positionClass = index % 2 === 0 ? "left-card" : "right-card";

          return (
            <div className={`timeline-item ${positionClass}`} key={index}>
              <div className="timeline-dot"></div>

              <div className="experience-card">
                <div className="card-header">
                  <div className="icon-wrapper">{exp.icon}</div>
                  <div className="header-text">
                    <span className="duration">{exp.duration}</span>
                    <h3>{exp.role}</h3>
                    <h4>{exp.company}</h4>
                  </div>
                </div>
                <p className="description">{exp.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;