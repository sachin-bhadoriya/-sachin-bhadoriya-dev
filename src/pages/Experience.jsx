import React from 'react';
import './styles/experience.scss'; 

const experienceData = [
 {
  role: "Software Developer Intern",
  company: "Tesselonix Pvt. Ltd.",
  duration: "May 2026 - Present",
  description: "Contributed to the development of scalable web and mobile applications using ReactJS, React Native, NodeJS, ExpressJS, and MongoDB. Worked on building responsive UI components, integrating REST APIs, fixing bugs, improving application performance, and collaborating with senior developers to deliver production-ready features.",
  icon: "💻"
},
{
  role: "Freelance Software Developer",
  company: "Youthconnect Pvt. Ltd.",
  duration: "Nov 2025 - Apr 2026",
  description: "Developed custom full-stack web and mobile applications tailored to client requirements. Implemented authentication systems, API integrations, real-time features, and responsive user interfaces while ensuring smooth performance and maintainable code using modern JavaScript technologies.",
  icon: "📱"
},
{
  role: "Freelance Software Developer",
  company: "Self Employed",
  duration: "Feb 2025 - Nov 2025",
  description: "Worked independently on freelance projects, creating responsive websites and cross-platform mobile applications using ReactJS, React Native, NodeJS, ExpressJS, and MongoDB. Managed complete project lifecycles including UI development, backend APIs, deployment, and client communication.",
  icon: "🚀"
},
];

const Experience = () => {
  return (
    <section data-aos="fade" className="p-experience-m-c container">
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
          )
        })}
      </div>
    </section>
  );
};

export default Experience;
