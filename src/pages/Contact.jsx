import { Link } from 'react-router-dom'
import './styles/contact.scss'
import { useState } from 'react'

const Contact = () => {

  const [name, setName] = useState("")
  const [contactNumber, setContactNumber] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [file, setFile] = useState("")

  const handleFormSubmit = (e) => {
    e.preventDefault()
    if (!name || !contactNumber || !email || !message) {
      return (
        alert("Please Fill Mandatory Fields.")
      )
    }
    console.log(name, contactNumber, email, message, file)
    setName("")
    setContactNumber("")
    setEmail("")
    setMessage("")
    setFile("")
  }
  return (
    <section data-aos="fade" className='p-about-m-c container'>
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
        <form data-aos="zoom-in" onSubmit={handleFormSubmit}>
          <label htmlFor="name">Name</label>
          <input id='name' type="text" placeholder='John Doe' value={name} onChange={(e) => setName(e.target.value)} />
          <label htmlFor="contact-number">Contact Number</label>
          <input id='contact-number' maxLength={10} type="text" placeholder='+91 987 654 3210' value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} />
          <label htmlFor="email">Email</label>
          <input id='email' type="email" placeholder='johndoe@gmail.com' value={email} onChange={(e) => setEmail(e.target.value)} />
          <label htmlFor="message">Message</label>
          <textarea id='message' type="text" placeholder='johndoe@gmail.com' value={message} onChange={(e) => setMessage(e.target.value)} />
          <label htmlFor="file">Upload Document</label>
          <input id='file' type="file" value={file} onChange={(e) => setFile(e.target.value)} />
          <button type='submit'>Submit</button>
        </form>
      </article>
    </section>
  )
}

export default Contact