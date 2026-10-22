  import { useEffect, useState } from 'react'
  import lightPortrait from './assets/portrait.light.png'
  import darkPortrait from './assets/portrait.dark.png'
  import lightLogo from './assets/logo.light.png'
  import darkLogo from './assets/logo.dark.png'
  import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(() => {
  const savedTheme = localStorage.getItem('darkMode')
  return savedTheme === 'true'
})
useEffect(() => {
  localStorage.setItem('darkMode', darkMode)
}, [darkMode])

  const [menuOpen, setMenuOpen] = useState(false)
  const [activeProject, setActiveProject] = useState(0)

  const projects = [
  {
    id: 1,
    number: '01',
    title: 'Project in progress',
    description: 'My first project will appear here as I complete it.',
    status: 'Coming soon',
    technologies: ['React', 'CSS'],
    demoUrl: '',
    githubUrl: '',
  },
  {
    id: 2,
    number: '02',
    title: 'Project in progress',
    description: 'A future project demonstrating my development skills.',
    status: 'Coming soon',
    technologies: ['React', 'CSS'],
    demoUrl: '',
    githubUrl: '',
  },
  {
    id: 3,
    number: '03',
    title: 'Project in progress',
    description: "Another project I'll add when it's ready to share.",
    status: 'Coming soon',
    technologies: ['React', 'CSS'],
    demoUrl: '',
    githubUrl: '',
  },
]

  return (
    
<div className={darkMode ? 'app dark-theme' : 'app light-theme'}>


    {/* NAV BAR */}
    <header className="site-header" id="site-header">
      <button
        className="menu-toggle"
        type="button"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={menuOpen}
      >
        {menuOpen ? '✕' : '☰'}
      </button>
      <nav className={`site-nav ${menuOpen ? 'menu-open' : ''}`} aria-label="Main navigation">
        <a href="#about">ABOUT</a>
        <a href="#projects">PROJECTS</a>
        <a className="nav-logo" href="#home" aria-label="Go to home">
        <img src={darkMode ? darkLogo : lightLogo} alt="Jay-Ar Espinosa logo" /></a>
        <a href="#skills">SKILLS</a>
        <a href="#contact">CONTACT</a>
      </nav>

      <label className="theme-switch" aria-label="Toggle dark mode">
  <input
    className="toggle-state"
    type="checkbox"
    checked={darkMode}
    onChange={() => setDarkMode(!darkMode)}
    aria-label="Dark mode"
  />

  <span className="toggle-track">
    <span className="toggle-indicator" />
  </span>
</label>
    </header>


    {/* HERO */}
    <main className={darkMode ? 'dark-theme' : 'light-theme'}>
      
    <section className="hero" id="home">
      <div className="hero-content">

        <h1 className="hero-name">
          JAY-AR
          <br />
          ESPINOSA<span>.</span>
        </h1>

        <h2>Full-Stack Web Developer</h2>

        <p className="hero-description">
          I build simple, useful, and user-friendly web experiences.
          I'm continually improving my skills through hands-on projects.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="button button-primary">
            View Projects ↗
          </a>

          <a
            href="mailto:jayarespinosa36@gmail.com"
            className="button button-secondary"
          >
            Contact Me
          </a>
        </div>
      </div>

      <div className="hero-portrait">
        <img
          className={`hero-image portrait-light ${darkMode ? 'portrait-hidden' : ''}`}
          src={lightPortrait}
          alt="Portrait of Jay-Ar Espinosa"
        />

        <img
          className={`hero-image portrait-dark ${darkMode ? '' : 'portrait-hidden'}`}
          src={darkPortrait}
          alt=""
          aria-hidden="true"
        />
      </div>
    </section>

      {/* ABOUT ME */}
      <section className="about-section" id="about">
        <h2>About Me</h2>
        <p>
          I'm a developing full-stack web developer who enjoys
          learning how websites work, solving problems, and
          building useful web experiences.
        </p>

        <p>
          I'm currently improving my skills through hands-on
          projects and exploring both frontend and backend
          development.
        </p>
      </section>

      {/* FEATURED PROJECTS*/}
      <section className="projects-section" id="projects">
        <div className="section-heading">
          <h2>Featured Projects</h2>
          <p>A collection of projects I'm building as I grow my development skills.</p>
        </div>

        <div className="projects-carousel">
          <div className="projects-grid">
            {projects.map((project, index) => (
              <article
                className={`project-card ${
                  index === activeProject
                    ? 'active'
                    : index === (activeProject - 1 + projects.length) % projects.length
                      ? 'previous'
                      : index === (activeProject + 1) % projects.length
                        ? 'next'
                        : 'hidden'
                }`}
                key={project.id}
                onClick={() => setActiveProject(index)}
              >
                <span className="project-number">{project.number}</span>

                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="project-technologies">
                  {project.technologies.map((technology) => (
                    <span className="technology-tag" key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>

                {(project.demoUrl || project.githubUrl) && (
                  <div className="project-links">
                    {project.demoUrl && (
                      <a href={project.demoUrl} target="_blank" rel="noreferrer">
                        Live Demo ↗
                      </a>
                    )}

                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noreferrer">
                        GitHub ↗
                      </a>
                    )}
                  </div>
                )}

                <span className="project-status">{project.status}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SKILL SECTION*/}
      <section className="skills-section" id="skills">
        <div className="section-heading">
          <h2>Skills & Technologies</h2>
          <p>Technologies I'm learning and using to build web experiences.</p>
        </div>

        <div className="skills-grid">
          <article className="skill-group">
            <h3>Frontend</h3>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
            </ul>
          </article>

          <article className="skill-group">
            <h3>Backend</h3>
            <ul>
              <li>Node.js</li>
              <li>Express.js</li>
            </ul>
          </article>

          <article className="skill-group">
            <h3>Development Tools</h3>
            <ul>
              <li>Git</li>
              <li>GitHub</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <h2>Let's Work Together</h2>
        <p>Have a project in mind or an opportunity to discuss? I'd be happy to hear from you.</p>

        <a
          className="button button-primary"
          href="mailto:jayarespinosa36@gmail.com">Send Me an Email
        </a>
      </section>

      {/* FOOTER */}
      <footer className="site-footer">
        <p>© {new Date().getFullYear()} Jay-Ar Espinosa</p>
        <a href="#site-header">Back to top ↑</a>
      </footer>

    </main>
    </div>
  )
}

export default App
