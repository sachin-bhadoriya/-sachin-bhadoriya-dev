import './styles/skills.scss'

const skill = {
  frontend: [
    { img: "https://img.icons8.com/?size=100&id=v8RpPQUwv0N8&format=png&color=000000", name: "Html" },
    { img: "https://img.icons8.com/?size=100&id=21278&format=png&color=000000", name: "Css" },
    { img: "https://img.icons8.com/?size=100&id=PndQWK6M1Hjo&format=png&color=000000", name: "Bootstrap" },
    { img: "https://img.icons8.com/?size=100&id=108784&format=png&color=000000", name: "Javascript" },
    { img: "https://img.icons8.com/?size=100&id=asWSSTBrDlTW&format=png&color=000000", name: "React" },
    { img: "https://img.icons8.com/?size=100&id=t4YbEbA834uH&format=png&color=000000", name: "React Native" },
  ],
  backend: [
    { img: "https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000", name: "NodeJS" },
    { img: "https://img.icons8.com/?size=100&id=kg46nzoJrmTR&format=png&color=000000", name: "ExpressJS" },
    { img: "https://img.icons8.com/?size=100&id=8rKdRqZFLurS&format=png&color=000000", name: "MongoDB" },
  ],
  tools: [
    { img: "https://img.icons8.com/?size=100&id=y7WGoWNuIWac&format=png&color=000000", name: "VSCode" },
    { img: "https://img.icons8.com/?size=100&id=2xFS7aynbwiR&format=png&color=000000", name: "Vercel" },
    { img: "https://img.icons8.com/?size=100&id=13677&format=png&color=000000", name: "Adobe Photoshop" },
    { img: "https://img.icons8.com/?size=100&id=iWw83PVcBpLw&format=png&color=000000", name: "Canva" },
    { img: "https://img.icons8.com/?size=100&id=37619&format=png&color=000000", name: "MS Office" },
  ]
}

const Skills = () => {
  return (
    <section data-aos="fade" className='p-about-m-c'>
      <h2>SKILLS</h2>
      <article className='p-skills-article-c'>
        <h4>Frontend Technologies</h4>
        <div className="skills-container">
          {skill.frontend.map((i, index) => (
            <div data-aos="zoom-in" className="skill-box" key={index}>
              <img src={i.img} alt={i.name} />
              <h5>{i.name}</h5>
            </div>
          ))}
        </div>
      </article>
      <article>
        <h4>Backend & Database Technologies</h4>
        <div className="skills-container">
          {skill.backend.map((i, index) => (
            <div data-aos="zoom-in" className="skill-box" key={index}>
              <img src={i.img} alt={i.name} />
              <h5>{i.name}</h5>
            </div>
          ))}
        </div>
      </article>
      <article>
        <h4>Tools & Platforms & Others</h4>
        <div className="skills-container">
          {skill.tools.map((i, index) => (
            <div data-aos="zoom-in" className="skill-box" key={index}>
              <img src={i.img} alt={i.name} />
              <h5>{i.name}</h5>
            </div>
          ))}
        </div>
      </article>
    </section>
  )
}

export default Skills