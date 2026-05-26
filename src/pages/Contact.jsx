import { Link } from 'react-router-dom'
import './styles/contact.scss'

const Contact = () => {
  return (
    <section className='p-about-m-c'>
      <h2>LET'S CONNECT !</h2>
      <article className='p-contact-article-c'>
        <div className="p-contact-data-c">
          <p>Whether you have a question, want to start a project, or just want to say hi, feel free to drop a message!</p> <br />
          <p><span>Email : </span> <Link>bhadoriyasachin33@gmail.com</Link> </p>
          <p><span>Phone : </span> <Link>+91 883 919 0794</Link> </p>
          <Link><img src="https://img.icons8.com/?size=100&id=nj0Uj45LGUYh&format=png&color=000000" alt="Facebook" loading='lazy' /></Link>
          <Link><img src="https://img.icons8.com/?size=100&id=jZ0kw76QEzJU&format=png&color=000000" alt="Instagram" loading='lazy' /></Link>
          <Link><img src="https://img.icons8.com/?size=100&id=DUEq8l5qTqBE&format=png&color=000000" alt="Whatsapp" loading='lazy' /></Link>
          <Link><img src="https://img.icons8.com/?size=100&id=kBCrQMzpQDLQ&format=png&color=000000" alt="Linkedin" loading='lazy' /></Link>
          <Link><img src="https://img.icons8.com/?size=100&id=LoL4bFzqmAa0&format=png&color=000000" alt="Github" loading='lazy' /></Link>
        </div>
        <form>
          <label htmlFor="">Name</label>
          <input type="text" placeholder='John Doe' />
          <label htmlFor="">Contact Number</label>
          <input type="text" placeholder='+91 987 654 3210' />
          <label htmlFor="">Email</label>
          <input type="text" placeholder='johndoe@gmail.com' />
          <label htmlFor="">Message</label>
          <textarea type="text" placeholder='johndoe@gmail.com' />
          <label htmlFor="">Upload Document</label>
          <input type="file" />
          <button>Submit</button>
        </form>
      </article>
    </section>
  )
}

export default Contact