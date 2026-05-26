import { Link } from 'react-router-dom'
import './styles/home.scss'

const Home = () => {
  return (
    <section className='p-home-m-c'>
      <img src="https://res.cloudinary.com/dm0rfcoxl/image/upload/v1779808589/sachin-illustration_ibc3od.png" alt="Illustration Image" fetchPriority='high' />
      <div className="p-home-d-c">
        <h6>Hello, I'm</h6>
        <h2>Sachin Bhadoriya</h2>
        <h4 className='title'>And I'm a Frontend Developer</h4>
        <p className='title'>Passionate about building web apps with great UI and real-world functionality. I blend design with code to create impactful digital experiences.</p>
        <div className="p-home-btn-c">
          <button><Link to="/crafted-projects">View Projects</Link></button>
          <button><Link>Download Resume</Link></button>
        </div>
      </div>
    </section>
  )
}

export default Home