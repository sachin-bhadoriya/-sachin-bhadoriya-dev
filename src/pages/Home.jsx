import { Link } from 'react-router-dom'
import './styles/home.scss'

const Home = () => {
  const url = "https://api.cloudinary.com/v1_1/dm0rfcoxl/image/download?api_key=292658888953328&attachment=true&audit_context=eyJhY3Rvcl90eXBlIjoidXNlciIsImFjdG9yX2lkIjoiNDgwMzJmODgxODEwZDVmZTVmODUzMjQ1Y2JmZGQwODkiLCJ1c2VyX2V4dGVybmFsX2lkIjoiNzRlYTc5YmNmNmJiYWI5NjhjNzgxMjJiMjhlNTY0IiwidXNlcl9jdXN0b21faWQiOiJiaGFkb3JpeWFzYWNoaW4zM0BnbWFpbC5jb20iLCJjb21wb25lbnQiOiJjb25zb2xlIn0%3D&public_id=Sachin_Bhadoriya_Frontend_Developer_i3hyqj&signature=9d5d3bff0cc80af4b3e525aefd086b4b105e916a&source=ml&target_filename=Sachin_Bhadoriya_Frontend_Developer&timestamp=1779813691&type=upload"
return (
    <section data-aos="fade" className='p-home-m-c'>
      <img data-aos="zoom-in" src="https://res.cloudinary.com/dm0rfcoxl/image/upload/v1779808589/sachin-illustration_ibc3od.png" alt="Illustration Image" fetchPriority='high' />
      <div className="p-home-d-c">
        <h6>Hello, I'm</h6>
        <h2>Sachin Bhadoriya</h2>
        <h4 className='title'>And I'm a Frontend Developer</h4>
        <p className='title'>Passionate about building web apps with great UI and real-world functionality. I blend design with code to create impactful digital experiences.</p>
        <div className="p-home-btn-c">
          <Link to="/crafted-projects"><button data-aos="zoom-in">View Projects</button></Link>
          <Link to={url}><button data-aos="zoom-in">Download Resume</button></Link>
        </div>
      </div>
    </section>
  )
}

export default Home