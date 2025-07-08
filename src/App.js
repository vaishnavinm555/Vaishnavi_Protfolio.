import React, { useState } from "react";
import "./App.css";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import pic from './pic.jpg';
function App()
{
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Add your email/backend logic here
  };

  return (
    <div className="main-layout">
      <aside className="sidebar">

<img src={pic} alt="Vaishnavi N M" className="profile-pic" />
 
    <h1>Vaishnavi N M</h1>
    <h2>Software Developer</h2>
  
<div className="sidebar-contact">
  <span className="sidebar-info">
  <FaPhoneAlt style={{ marginRight: "6px" }} />
  +91 8792163249
</span>
<span className="sidebar-info" >
  <FaMapMarkerAlt style={{ marginRight: "6px" }} />
  Bangalore, India.
</span>
  <a href="mailto:vaishnavinm555@gmail.com" className="sidebar-link" target="_blank" rel="noopener noreferrer">
    <FaEnvelope style={{ marginRight: "6px" }} />
    vaishnavinm555@gmail.com
  </a>

  <a
    href="https://www.linkedin.com/in/vaishnavi-vaishu-ba6bb3317/"
    target="_blank"
    rel="noopener noreferrer"
    className="sidebar-link"
  >
    <FaLinkedin style={{ marginRight: "6px" }} />
    LinkedIn
  </a>
  <a
    href="https://github.com/vaishnavinm555"
    target="_blank"
    rel="noopener noreferrer"
    className="sidebar-link"
  >
    <FaGithub style={{ marginRight: "6px" }} />
    GitHub
  </a>
</div>   
  
</aside>
      <main className="content">
        <section>
          <h3>About Me</h3>
          <p>
           Hello! I'm Vaishnavi N M, a passionate and dedicated Computer Science Engineering graduate with a strong foundation in Java development, software testing, and full-stack application development.

Over time, I’ve built hands-on experience working with JUnit for testing, Spring Core and Spring Boot for building robust backend systems, Maven for project management, and React.js for dynamic frontend development. I'm also comfortable working with SQL and Oracle databases, and I enjoy writing clean, efficient code that solves real-world problems.

I believe in continuous learning and enjoy taking on new technical challenges — whether it's setting up environments, debugging code, or creating full-stack applications from scratch. My goal is to contribute to meaningful projects while growing as a well-rounded software developer.

When I’m not coding, you’ll find me exploring new tech tools, organizing my projects, or helping others debug their setups!
          </p>
        </section>
        <section>
  <h3>Skills</h3>
  <div className="skills-cards-vertical">
    <div className="skill-slide-card pastel-blue">
      <span className="category-title">Languages</span>
      <div className="skill-badges-row">
        <span className="skill-badge badge-blue">Java</span>
        <span className="skill-badge badge-pink">Python</span>
        <span className="skill-badge badge-yellow">C</span>
        <span className="skill-badge badge-green">C++</span>
        <span className="skill-badge badge-orange">JavaScript</span>
      </div>
    </div>
    <div className="skill-slide-card pastel-purple">
      <span className="category-title">Web</span>
      <div className="skill-badges-row">
        <span className="skill-badge badge-purple">HTML</span>
        <span className="skill-badge badge-blue">CSS</span>
        <span className="skill-badge badge-green">React.js</span>
      </div>
    </div>
    <div className="skill-slide-card pastel-orange">
      <span className="category-title">Backend</span>
      <div className="skill-badges-row">
        <span className="skill-badge badge-orange">Node.js</span>
        <span className="skill-badge badge-pink">PHP</span>
      </div>
    </div>
    <div className="skill-slide-card pastel-green">
      <span className="category-title">Database</span>
      <div className="skill-badges-row">
        <span className="skill-badge badge-blue">MySQL</span>
        <span className="skill-badge badge-purple">PHPMyAdmin</span>
      </div>
    </div>
    <div className="skill-slide-card pastel-yellow">
      <span className="category-title">ML Tools</span>
      <div className="skill-badges-row">
        <span className="skill-badge badge-green">NumPy</span>
        <span className="skill-badge badge-yellow">Pandas</span>
      </div>
    </div>
    <div className="skill-slide-card pastel-pink">
      <span className="category-title">Soft Skills</span>
      <div className="skill-badges-row">
        <span className="skill-badge badge-pink">Teamwork</span>
        <span className="skill-badge badge-blue">Communication</span>
        <span className="skill-badge badge-orange">Time Management</span>
      </div>
    </div>
  </div>
</section>
<section>
  <h3>Projects</h3>
  <div className="projects-cards">
    <div className="project-card">
      <strong>CodSoft Internship:</strong>
      <span>Portfolio, calculator, landing page using HTML, CSS, JS</span>
    </div>
    <div className="project-card">
      <strong>Book Store Web App:</strong>
      <span>E-commerce site using HTML, CSS, JavaScript</span>
    </div>
    <div className="project-card">
      <strong>Prostate Cancer Detection:</strong>
      <span>Used MATLAb ,Deep learning Algorithm</span>
    </div>
    <div className="project-card">
      <strong>Crop Recommendation:</strong>
      <span>ML model with interactive frontend for user input</span>
    </div>
  </div>
</section>
        <section className="contact-hero">
  <div className="contact-left">
    <h2>Looking forward to our next conversation<br />To maintain communication!</h2>
    <div className="contact-follow">
      <h4>Follow Me</h4>
      <ul>
        <li><a href="mailto:vaishnavinm555@gmail.com" target="_blank" rel="noopener noreferrer">Email</a></li>
        <li><a href="https://github.com/vaishnavinm555" target="_blank" rel="noopener noreferrer">GitHub</a></li>
        <li><a href="https://www.linkedin.com/in/vaishnavi-vaishu-ba6bb3317/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
      </ul>
    </div>
  </div>
  <div className="contact-right">
    {submitted ? (
      <div className="thank-you">Thank you for reaching out!</div>
    ) : (
      <form className="contact-form-modern" onSubmit={handleSubmit}>
        <label>
          Your Name<span className="required">*</span>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Your Email <span className="required">*</span>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Service you are looking for <span className="required">*</span>
          <input
            type="text"
            name="service"
            value={form.service || ""}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Your Message
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    )}
  </div>
</section>
      </main>
    </div>
  );
}

export default App;


