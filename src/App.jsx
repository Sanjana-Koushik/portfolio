import { useState, useEffect, useRef } from 'react'
import './index.css'

// ─── DATA ────────────────────────────────────────────────────
const data = {
  name: 'Sanjana S Koushik',
  role: 'Full Stack Developer',
  tagline: 'Building beautiful, functional web experiences',
  bio: [
    "I'm a Computer Science undergraduate at Maharaja Institute of Technology Thandavapura, passionate about crafting intuitive full-stack applications. I love bridging the gap between elegant UIs and powerful backend systems.",
    "Currently interning at TAP Academy as a Java Full Stack Developer, I've worked with React, Python, Java, and Spring Boot to build real-world projects — from AI-powered tools to IoT systems."
  ],
  contact: {
    email: 'sanjanaskoushik52@gmail.com',
    phone: '7259405782',
    github: 'https://github.com/Sanjana-Koushik',
    linkedin: 'https://linkedin.com/in/sanjana-s-koushik',
  },
  skills: [
    {
      name: 'Frontend',
      icon: '🎨',
      color: 'purple',
      items: ['React', 'HTML5', 'CSS3', 'JavaScript'],
    },
    {
      name: 'Backend & Languages',
      icon: '⚙️',
      color: 'cyan',
      items: ['Java', 'Python', 'Spring Boot', 'MySQL'],
    },
    {
      name: 'Core CS',
      icon: '🧠',
      color: 'pink',
      items: ['Data Structures', 'Algorithms', 'OOP', 'OS', 'Networks'],
    },
    {
      name: 'Tools & Platforms',
      icon: '🛠️',
      color: 'green',
      items: ['Git', 'GitHub', 'VS Code', 'Arduino'],
    },
  ],
  projects: [
    {
      title: 'AI Powered 3D Model Generator',
      description:
        'An application that generates visual 3D outputs from sketches, images, or text inputs using Python and React. Reduces time spent with multiple traditional 3D software tools.',
      icon: '🤖',
      tech: ['Python', 'React', 'AI/ML'],
      date: 'Sept 2025 – Dec 2025',
      github: 'https://github.com/Sanjana-Koushik/2D-to-3D',
      live: null,
    },
    {
      title: 'Shopwave',
      description:
        'A modern e-commerce web application featuring product listings, cart management, and a sleek user interface built with JavaScript.',
      icon: '🛒',
      tech: ['JavaScript', 'React', 'HTML', 'CSS'],
      date: '2025',
      github: 'https://github.com/Sanjana-Koushik/Shopwave',
      live: null,
    },
    {
      title: 'Smart Dustbin (IoT)',
      description:
        'An IoT-based contactless smart dustbin with automatic lid opening using ultrasonic proximity sensors. Improves hygiene and reduces physical contact with waste surfaces.',
      icon: '♻️',
      tech: ['Python', 'Arduino', 'C++', 'IoT'],
      date: 'Sept 2024 – Dec 2024',
      github: 'https://github.com/Sanjana-Koushik/Contactless-Smart-Bin',
      live: null,
    },
    {
      title: 'Hotel Menu UI (ArkNish Invent)',
      description:
        'Developed and improved UI features for a hotel menu management system during my internship. Enhanced usability and responsiveness of menu components.',
      icon: '🍽️',
      tech: ['React', 'HTML', 'CSS', 'JavaScript'],
      date: 'Aug 2025 – Nov 2025',
      github: null,
      live: null,
    },
  ],
  experience: [
    {
      company: 'TAP Academy',
      role: 'Java Full Stack Developer Intern',
      period: 'Jan 2026 – Present',
      icon: '💻',
      points: [
        'Learning and implementing Java Full Stack Development including backend services and frontend integration.',
        'Practicing development with Spring Boot, MySQL, HTML, CSS, and JavaScript.',
        'Building full-stack mini projects to strengthen DSA and OOP-based application development.',
      ],
    },
    {
      company: 'ArkNish Invent',
      role: 'Frontend Developer Intern',
      period: 'Aug 2025 – Nov 2025',
      icon: '🎯',
      points: [
        "Worked as a Frontend Developer on the company's hotel menu project.",
        'Developed and improved UI features using HTML, CSS, JavaScript, and React.',
        'Enhanced usability and responsiveness of menu components.',
      ],
    },
  ],
  education: [
    {
      institution: 'Maharaja Institute of Technology Thandavapura',
      degree: 'B.E in Computer Science & Engineering',
      score: 'CGPA: 8.43',
      period: '2022 – 2026',
      location: 'Mysore, Karnataka',
      icon: '🎓',
    },
    {
      institution: 'Pace UM PU College',
      degree: 'PUC (Pre-University)',
      score: '87.8%',
      period: '2020 – 2022',
      location: 'Shivamogga, Karnataka',
      icon: '📚',
    },
    {
      institution: 'Acharya High School',
      degree: 'SSLC (10th Grade)',
      score: '88.8%',
      period: '2019 – 2020',
      location: 'Shivamogga, Karnataka',
      icon: '🏫',
    },
  ],
  achievements: [
    'Participated in a 24-hour National Level Hackathon.',
    'Served as a Student Coordinator for a National Level Hackathon organized by the department in college.',
  ],
}

// ─── HOOKS ────────────────────────────────────────────────────
function useScrollReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  return ref
}

// ─── COMPONENTS ───────────────────────────────────────────────

function Navbar({ scrolled }) {
  const [open, setOpen] = useState(false)
  const navLinks = ['About', 'Skills', 'Projects', 'Experience', 'Education', 'Contact']

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="container">
        <div className="navbar-inner">
          <a href="#hero" className="nav-logo">
            <span className="bracket">&lt;</span>
            SSK
            <span className="bracket">/&gt;</span>
          </a>
          <ul className={`nav-links${open ? ' open' : ''}`}>
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                >
                  {link}
                </a>
              </li>
            ))}
            <li>
              <a
                href={`mailto:${data.contact.email}`}
                className="nav-cta"
              >
                Hire Me
              </a>
            </li>
          </ul>
          <button
            id="menu-toggle"
            className="menu-toggle"
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </nav>
  )
}

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-tag">
            <span className="dot" />
            Available for opportunities
          </div>
          <h1 className="hero-title">
            Hi, I'm <span className="name">{data.name}</span>
          </h1>
          <p className="hero-subtitle">
            <span className="highlight">{data.role}</span> & CS Undergraduate
          </p>
          <p className="hero-desc">{data.tagline} — from sleek frontends to robust backends, I build it all.</p>
          <div className="hero-actions">
            <a href="#projects" className="btn-primary" id="view-projects-btn">
              🚀 View Projects
            </a>
            <a href={`mailto:${data.contact.email}`} className="btn-secondary" id="contact-btn">
              ✉️ Get in Touch
            </a>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">4+</span>
              <span className="stat-label">Projects Built</span>
            </div>
            <div className="stat">
              <span className="stat-number">2</span>
              <span className="stat-label">Internships</span>
            </div>
            <div className="stat">
              <span className="stat-number">8.43</span>
              <span className="stat-label">CGPA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function About() {
  const ref = useScrollReveal()
  return (
    <section id="about" ref={ref} className="reveal">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">// about me</span>
          <h2 className="section-title">
            Who <span className="accent">I Am</span>
          </h2>
        </div>
        <div className="about-grid">
          <div className="about-image-wrap">
            <div className="about-image-placeholder">
              <img
                src="/photo.jpg"
                alt="Sanjana S Koushik"
                className="profile-photo"
              />
            </div>
            <div className="about-badge glass-card">
              <span className="badge-icon">🎓</span>
              <div className="badge-text">
                <span className="badge-value">MIT Thandavapura</span>
                <span className="badge-label">B.E CSE • 2026</span>
              </div>
            </div>
          </div>
          <div className="about-text">
            <h3>Building the web, one component at a time.</h3>
            {data.bio.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <div className="about-details">
              <div className="detail-item">
                <span className="detail-icon">📍</span>
                <div>
                  <div className="detail-label">Location</div>
                  <div className="detail-value">Mysore, Karnataka</div>
                </div>
              </div>
              <div className="detail-item">
                <span className="detail-icon">📧</span>
                <div>
                  <div className="detail-label">Email</div>
                  <div className="detail-value">sanjanaskoushik52@gmail.com</div>
                </div>
              </div>
              <div className="detail-item">
                <span className="detail-icon">📱</span>
                <div>
                  <div className="detail-label">Phone</div>
                  <div className="detail-value">+91 7259405782</div>
                </div>
              </div>
              <div className="detail-item">
                <span className="detail-icon">💼</span>
                <div>
                  <div className="detail-label">Status</div>
                  <div className="detail-value">Open to Work</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Skills() {
  const ref = useScrollReveal()
  return (
    <section id="skills" ref={ref} className="reveal">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">// tech stack</span>
          <h2 className="section-title">
            Skills & <span className="accent">Technologies</span>
          </h2>
          <p className="section-desc">
            Technologies I've worked with during my studies, internships, and personal projects.
          </p>
        </div>
        <div className="skills-grid">
          {data.skills.map((cat) => (
            <div key={cat.name} className="glass-card skill-category">
              <div className="skill-category-header">
                <div className={`skill-category-icon ${cat.color}`}>{cat.icon}</div>
                <span className="skill-category-name">{cat.name}</span>
              </div>
              <div className="skill-tags">
                {cat.items.map((skill) => (
                  <span key={skill} className={`skill-tag ${cat.color}`}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Projects() {
  const ref = useScrollReveal()
  return (
    <section id="projects" ref={ref} className="reveal">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">// my work</span>
          <h2 className="section-title">
            Featured <span className="accent">Projects</span>
          </h2>
          <p className="section-desc">
            A collection of projects I've built — from AI tools to IoT systems to e-commerce apps.
          </p>
        </div>
        <div className="projects-grid">
          {data.projects.map((proj) => (
            <div key={proj.title} className="glass-card project-card">
              <div className="project-header">
                <div className="project-icon">{proj.icon}</div>
                <div className="project-links">
                  {proj.github && (
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      title="View on GitHub"
                      id={`github-${proj.title.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                  )}
                  {proj.live && (
                    <a
                      href={proj.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      title="Live Demo"
                    >
                      🔗
                    </a>
                  )}
                </div>
              </div>
              <div className="project-date">📅 {proj.date}</div>
              <h3 className="project-title">{proj.title}</h3>
              <p className="project-desc">{proj.description}</p>
              <div className="project-tech">
                {proj.tech.map((t) => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Experience() {
  const ref = useScrollReveal()
  return (
    <section id="experience" ref={ref} className="reveal">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">// work history</span>
          <h2 className="section-title">
            Work <span className="accent">Experience</span>
          </h2>
        </div>
        <div className="timeline">
          {data.experience.map((exp) => (
            <div key={exp.company} className="timeline-item">
              <div className="timeline-dot">{exp.icon}</div>
              <div className="glass-card timeline-content">
                <div className="timeline-meta">
                  <span className="timeline-company">{exp.company}</span>
                  <span className="timeline-period">{exp.period}</span>
                </div>
                <h3 className="timeline-role">{exp.role}</h3>
                <ul className="timeline-list">
                  {exp.points.map((pt, i) => (
                    <li key={i}>{pt}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Education() {
  const ref = useScrollReveal()
  return (
    <section id="education" ref={ref} className="reveal">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">// academic background</span>
          <h2 className="section-title">
            My <span className="accent">Education</span>
          </h2>
        </div>
        <div className="education-grid">
          {data.education.map((edu) => (
            <div key={edu.institution} className="glass-card edu-card">
              <div className="edu-icon">{edu.icon}</div>
              <div className="edu-institution">{edu.institution}</div>
              <div className="edu-degree">{edu.degree}</div>
              <span className="edu-score">{edu.score}</span>
              <div className="edu-period">
                {edu.period} • {edu.location}
              </div>
            </div>
          ))}
        </div>

        {/* Achievements */}
        <div style={{ marginTop: '80px' }}>
          <div className="section-header">
            <span className="section-tag">// recognition</span>
            <h2 className="section-title">
              <span className="accent">Achievements</span>
            </h2>
          </div>
          <div className="achievements-list">
            {data.achievements.map((a, i) => (
              <div key={i} className="glass-card achievement-item">
                <span className="achievement-icon">{i === 0 ? '🏆' : '⭐'}</span>
                <p className="achievement-text">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const ref = useScrollReveal()
  return (
    <section id="contact" ref={ref} className="reveal">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">// get in touch</span>
          <h2 className="section-title">
            Let's <span className="accent">Connect</span>
          </h2>
          <p className="section-desc">
            I'm always open to discussing new opportunities, interesting projects, or just a friendly chat about tech!
          </p>
        </div>
        <div className="contact-wrapper">
          <div className="contact-links">
            <a
              href={data.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card contact-link github"
              id="contact-github"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="contact-link-icon">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>
            <a
              href={data.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card contact-link linkedin"
              id="contact-linkedin"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="contact-link-icon">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
            <a
              href={`mailto:${data.contact.email}`}
              className="glass-card contact-link email"
              id="contact-email"
            >
              <span className="contact-link-icon">✉️</span>
              {data.contact.email}
            </a>
            <a
              href={`tel:+91${data.contact.phone}`}
              className="glass-card contact-link phone"
              id="contact-phone"
            >
              <span className="contact-link-icon">📱</span>
              +91 {data.contact.phone}
            </a>
          </div>
          <div className="contact-email-btn">
            <a href={`mailto:${data.contact.email}`} className="btn-primary" id="send-email-btn">
              ✉️ Send Me an Email
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-inner">
          <p className="footer-text">
            Designed & Built by <span>Sanjana S Koushik</span> • {new Date().getFullYear()}
          </p>
          <div className="footer-links">
            <a href={data.contact.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href={data.contact.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href={`mailto:${data.contact.email}`}>Email</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

// ─── APP ─────────────────────────────────────────────────────
export default function App() {
  const [scrolled, setScrolled] = useState(false)
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
      setShowTop(window.scrollY > 400)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* Background */}
      <div className="bg-orb bg-orb-1" />
      <div className="bg-orb bg-orb-2" />
      <div className="bg-orb bg-orb-3" />
      <div className="grid-overlay" />

      <Navbar scrolled={scrolled} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />

      {/* Scroll to top */}
      <a
        href="#hero"
        id="scroll-to-top"
        className={`scroll-indicator${showTop ? ' visible' : ''}`}
        aria-label="Scroll to top"
      >
        ↑
      </a>
    </>
  )
}
