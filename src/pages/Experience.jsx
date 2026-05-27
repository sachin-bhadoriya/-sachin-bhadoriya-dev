import React from 'react';
import './styles/experience.scss'; 

const experienceData = [
 {
  role: "Software Developer Intern",
  company: "Tesselonix Pvt. Ltd.",
  duration: "May 2026 - Present",
  description: "Worked on real-world web and mobile applications using ReactJS, React Native, NodeJS, ExpressJS, and MongoDB. Developed responsive user interfaces, integrated REST APIs, optimized application performance, and collaborated with the development team to deliver scalable full-stack solutions.",
  icon: "💻"
},
{
  role: "Freelance Software Developer",
  company: "Youthconnect Pvt. Ltd.",
  duration: "Jan 2026 - Apr 2026",
  description: "Built and maintained cross-platform mobile apps and dynamic web applications for clients. Worked with ReactJS, React Native, NodeJS, ExpressJS, and MongoDB to develop full-stack solutions, implement API integrations, and deliver user-focused real-world projects.",
  icon: "📱"
},
];

const Experience = () => {
  return (
    <section data-aos="fade" className="p-experience-m-c">
      <div className="experience-header">
        <h2>EXPERIENCE</h2>
      </div>

      <div className="timeline-container">
        <div className="timeline-line"></div>

        {experienceData.map((exp, index) => {
          const positionClass = index % 2 === 0 ? "left-card" : "right-card";

          return (
            <div data-aos="zoom-in" className={`timeline-item ${positionClass}`} key={index}>
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
