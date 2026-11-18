import { ArrowDown, ArrowRight, ArrowUpRight, Code2, Globe2, Linkedin, Mail, Menu, Phone, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import './App.css'

const projectImages = import.meta.glob('./public/assets/*', { eager: true, import: 'default', query: '?url' })

const skills = [
  { group: 'Backend', items: 'PHP · Laravel · REST APIs' },
  { group: 'Frontend', items: 'HTML5 · CSS3 · JavaScript · React · Tailwind CSS' },
  { group: 'Data', items: 'MySQL · Database design · Query optimization' },
  { group: 'Build & ship', items: 'Git · GitHub · Bootstrap · Livewire' },
  { group: 'Web craft', items: 'Responsive design · CRUD · Authentication' },
  { group: 'Quality', items: 'SEO · Performance · Debugging · Cross-browser' },
]

const projects = [
  {
    number: '01',
    name: 'Skyraan Corporate Website',
    type: 'Corporate · Web development',
    description: 'A responsive company website with dynamic Laravel functionality, considered motion, and search-friendly foundations.',
    stack: ['Laravel', 'JavaScript', 'Bootstrap', 'AOS'],
    href: 'https://www.skyraan.com',
    visual: 'skyraan',
    image: 'skyraan technologies.png',
  },
  {
    number: '02',
    name: 'Gaja Raja Factory',
    type: 'E-commerce · Admin dashboard',
    description: 'A full commerce platform and operational dashboard, from product and inventory workflows to order processing and delivery zones.',
    stack: ['Laravel', 'Livewire', 'MySQL', 'PHP'],
    href: 'https://gajarajafactory.in',
    visual: 'gaja',
    artBrand: 'GAJA RAJA',
    artKicker: 'GOOD THINGS',
    artTitle: <>MADE<br />TO LAST.</>,
    artNote: 'F A C T O R Y',
    detail: 'Client-delivered e-commerce project with product, category, brand, coupon, order, shipment, invoice, inventory, and role-based admin workflows.',
  },
  {
    number: '03',
    name: 'OlyBible',
    type: 'Bible platform · Web application',
    description: 'A Laravel Bible platform bringing reading, learning, prayer, media, and community features together in one place.',
    stack: ['Laravel', 'Bible versions', 'Books & chapters'],
    href: 'https://olybible.com/',
    visual: 'olybible',
    image: 'olybible.png',
    artBrand: 'OLY BIBLE',
    artKicker: 'READ · REFLECT · GROW',
    artTitle: <>THE<br />LIVING WORD</>,
    artNote: 'VERSIONS / BOOKS / CHAPTERS',
    detail: 'Miracle Prayer, Bible Product, Bible Stories, Q&A, Laws, Books, My Library, Nearby Church, Quiz, Baby Names, 1000 Praises, Popular Verses, FM Radio, Wallpaper, Text Quotes, Videos, and Image Quotes. Includes multiple Bible versions with book and chapter selection.',
  },
  {
    number: '04',
    name: 'LiftOn Equipment',
    type: 'E-commerce · Online storefront',
    description: 'A client e-commerce website for LiftOn Equipment.',
    stack: ['E-commerce', 'Online storefront'],
    href: 'https://liftonequipment.com/',
    visual: 'liftonequipment',
    image: 'lifton equipment.png',
    artBrand: 'LIFTON EQUIPMENT',
    artKicker: 'EQUIPMENT STORE',
    artTitle: <>LIFT ON.<br />MOVE FORWARD.</>,
    artNote: 'ONLINE E-COMMERCE',
  },
  {
    number: '05',
    name: 'Muth-Vive E-commerce',
    type: 'E-commerce · Online storefront',
    description: 'A client e-commerce storefront for Muth-Vive.',
    stack: ['E-commerce', 'Online storefront'],
    href: 'https://muth-vive-ecommerce.skyraantech.com/',
    visual: 'muthvive',
    artBrand: 'MUTH-VIVE',
    artKicker: 'ONLINE STORE',
    artTitle: <>MUTH-<br />VIVE</>,
    artNote: 'E-COMMERCE',
  },
  {
    number: '06',
    name: 'Exam Management System',
    type: 'Interview assessment · Office project',
    description: 'An interview assessment platform with aptitude, grammar, technical, and programming categories, organized by configurable levels.',
    stack: ['Laravel', 'PHP', 'MySQL', 'Assessment workflows'],
    href: null,
    visual: 'exammanagement',
    artBrand: 'EXAM MANAGEMENT',
    artKicker: 'INTERVIEW ASSESSMENT',
    artTitle: <>TEST<br />YOUR THINKING.</>,
    artNote: 'LEVELS / QUESTIONS / RESULTS',
    detail: 'Administrators enable the assessment levels candidates may attempt. Supports randomized questions, the same question set, and set-wise questions, with tab-switch blocking during an assessment.',
  },
  {
    number: '07',
    name: 'Skyra Calendar',
    type: 'Multilingual platform · Website, dashboard & APIs',
    description: 'A multilingual Laravel platform combining a public website, management dashboard, and APIs that support mobile app development.',
    stack: ['Laravel', 'Website', 'Dashboard', 'REST APIs', 'Multilingual'],
    href: 'https://skyracalendar.com/',
    visual: 'skyracalendar',
    image: 'skyracalendar.png',
    artBrand: 'SKYRA CALENDAR',
    artKicker: 'A WORLD OF LANGUAGES',
    artTitle: <>TIME<br />IN ALIGNMENT.</>,
    artNote: 'WEB / DASHBOARD / API',
    detail: 'Ongoing maintenance across the website and dashboard, with APIs provided for app development and support for multiple languages.',
  },
  {
    number: '08',
    name: 'Skyraa Tutorials',
    type: 'Early project · Programming tutorial platform',
    description: 'A complete, W3Schools-style tutorial platform covering programming languages, frameworks, and web development topics. Built end-to-end and complete, but not live yet.',
    stack: ['Programming languages', 'Frameworks', 'Web development', 'Development complete'],
    href: null,
    visual: 'tutorials',
    image: 'tutorials.png',
    artBrand: 'SKYRAA TUTORIALS',
    artKicker: 'LEARN BY EXPLORING',
    artTitle: <>MASTER<br />THE CODE.</>,
    artNote: 'TUTORIALS / LANGUAGES / FRAMEWORKS',
    detail: 'A W3Schools-inspired learning experience with topic navigation and a searchable tutorial library. The project is complete in development and has not been launched publicly.',
  },
  {
    number: '09',
    name: 'Dixxnary',
    type: 'Early project · Dictionary website',
    description: 'A Laravel-powered dictionary website, developed as one of my early web projects.',
    stack: ['Laravel', 'PHP', 'Dictionary website'],
    href: 'https://dixxnary.com/',
    visual: 'dixxnary',
    image: 'dixxnary.png',
    artBrand: 'DIXXNARY',
    artKicker: 'WORDS, DEFINED',
    artTitle: <>FIND<br />THE WORD.</>,
    artNote: 'LARAVEL / DICTIONARY',
  },
  {
    number: '10',
    name: 'Skyra Baby Names',
    type: 'Early project · Baby names platform',
    description: 'A Laravel baby names platform with a public website, management dashboard, and APIs.',
    stack: ['Laravel', 'PHP', 'Website', 'Dashboard', 'APIs'],
    href: 'https://skyrababynames.com/',
    visual: 'skyrababynames',
    image: 'babynames.png',
    artBrand: 'SKYRA BABY NAMES',
    artKicker: 'A NAME FOR EVERY STORY',
    artTitle: <>LITTLE<br />BEGINNINGS.</>,
    artNote: 'WEB / DASHBOARD / API',
    detail: 'Built as an early Laravel project, including the public-facing website, an admin dashboard, and API support.',
  },
  {
    number: '11',
    name: 'MMGC Gold Consulting',
    type: 'Client project · Website & dashboard',
    description: 'A client project for Max O Max Gold Consulting, with a public-facing website and an accompanying management dashboard.',
    stack: ['Laravel', 'PHP', 'Website', 'Dashboard'],
    href: 'https://mmgc.in/',
    visual: 'mmgc',
    image: 'mmgc.png',
    artBrand: 'MAX O MAX',
    artKicker: 'GOLD CONSULTING',
    artTitle: <>UNLOCK<br />GOLD VALUE.</>,
    artNote: 'WEBSITE / DASHBOARD',
  },
  {
    number: '12',
    name: 'InterviewBix',
    type: 'Interview preparation · Learning platform',
    description: 'A Laravel learning platform with practice areas for aptitude, logical reasoning, verbal ability, and interview preparation.',
    stack: ['Laravel', 'PHP', 'MySQL', 'Learning platform'],
    href: 'https://interviewbix.com/',
    visual: 'interviewbix',
    image: 'interviewbix.png',
    artBrand: 'INTERVIEWBIX',
    artKicker: 'PRACTICE WITH PURPOSE',
    artTitle: <>PREPARE.<br />PRACTICE.</>,
    artNote: 'APTITUDE / REASONING / VERBAL',
  },
  {
    number: '13',
    name: 'Status DP Zone',
    type: 'Content platform · Statuses & quotes',
    description: 'A Laravel content website featuring status images, text quotes, and inspirational content.',
    stack: ['Laravel', 'PHP', 'Content platform'],
    href: 'https://statusdpzone.com/',
    visual: 'statusdpzone',
    image: 'statusdpzone.png',
    artBrand: 'STATUS DP ZONE',
    artKicker: 'WORDS TO SHARE',
    artTitle: <>FIND YOUR<br />DAILY WORDS.</>,
    artNote: 'IMAGES / QUOTES / STATUSES',
  },
]

const work = [
  'Develop responsive web applications using PHP, Laravel, MySQL, JavaScript, and Bootstrap.',
  'Build backend features, business logic, RESTful APIs, and authentication and authorization flows.',
  'Integrate frontend components with backend services and third-party APIs.',
  'Optimize MySQL queries and database operations for better application performance.',
  'Apply SEO practices and improve website speed, usability, and cross-browser compatibility.',
  'Enhance user experiences with responsive interfaces, AOS animations, and interactive components.',
  'Test, debug, maintain, and troubleshoot applications while keeping code clean and reusable.',
  'Use Git and GitHub for version control and collaborate with the team to deliver projects on time.',
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion || !('IntersectionObserver' in window)) return

    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          currentObserver.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12, rootMargin: '0px 0px -36px 0px' })

    document.documentElement.classList.add('motion-ready')
    document.querySelectorAll('[data-reveal]').forEach((element) => observer.observe(element))

    return () => {
      observer.disconnect()
      document.documentElement.classList.remove('motion-ready')
    }
  }, [])

  return (
    <>
      <header className="site-header">
        <a className="wordmark" href="#home" onClick={closeMenu} aria-label="Keerthana G, home">KG<span>.</span></a>
        <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Main navigation">
          <a href="#profile" onClick={closeMenu}>Profile</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a className="nav-contact" href="mailto:keerthana96533@gmail.com" onClick={closeMenu}>Let&apos;s talk <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <main id="home">
        <section className="hero page-grid" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> FULL STACK WEB DEVELOPER <span className="eyebrow-divider">/</span> COIMBATORE, INDIA</p>
            <h1 id="hero-title">Thoughtful code.<br /><span>Useful</span> experiences.</h1>
            <div className="hero-bottom">
              <p className="hero-intro">I&apos;m <strong>Keerthana G</strong> — a Laravel developer building responsive, reliable web applications from database to interface.</p>
              <a href="#profile" className="round-link" aria-label="Discover my profile"><ArrowDown size={19} /></a>
            </div>
          </div>
          <aside className="hero-aside" aria-label="Professional summary">
            <div className="orbit-mark" aria-hidden="true"><span>KG</span><i /><i /><i /></div>
            <p className="aside-kicker">A little about my work</p>
            <p className="aside-copy">Full-stack thinking, clean implementation, and a steady focus on the details that make a website work well.</p>
            <div className="aside-rule" />
            <p className="aside-meta">4+ YEARS EXPERIENCE <span>·</span> LARAVEL & REACT</p>
          </aside>
          <div className="hero-index"><span>PORTFOLIO</span><span>2026</span></div>
        </section>

        <section className="profile section-wrap" id="profile" aria-labelledby="profile-title">
          <div className="section-label"><span>01</span><span>PROFILE</span></div>
          <div className="profile-content" data-reveal>
            <h2 id="profile-title">Building for the<br />whole picture.</h2>
            <div className="profile-text">
              <p className="lead">I bring ideas to life across the full stack, from a well-structured database to the final responsive interface.</p>
              <p>With 4+ years of experience, I design, develop, test, and maintain web applications using PHP, Laravel, MySQL, JavaScript, and modern frontend tools. I enjoy solving practical problems, integrating APIs, improving performance, and keeping code clear enough to grow with the product.</p>
              <div className="contact-row">
                <a href="mailto:keerthana96533@gmail.com"><Mail size={16} /> Email me <ArrowUpRight size={14} /></a>
                <a href="tel:+917603932587"><Phone size={16} /> Call me <ArrowUpRight size={14} /></a>
                <a href="https://www.linkedin.com/in/keerthana-g-0a26aa27a" target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn <ArrowUpRight size={14} /></a>
              </div>
            </div>
          </div>
        </section>

        <section className="projects-section section-wrap" id="projects" aria-labelledby="projects-title">
          <div className="section-label"><span>02</span><span>SELECTED WORK</span></div>
          <div className="section-heading" data-reveal>
            <h2 id="projects-title">Projects with<br />purpose.</h2>
            <p>Selected work from real-world web development and e-commerce.</p>
          </div>
          <div className="project-list">
            {projects.map((project) => (
              <article className={`project project-${project.visual}`} key={project.number} data-reveal>
                <div className={project.image ? 'project-art has-screenshot' : 'project-art'} aria-hidden="true">
                  {project.image ? <img className="project-screenshot" src={projectImages[`./public/assets/${project.image}`]} alt="" loading="lazy" /> : <>
                  <div className="art-top"><span>{project.visual === 'skyraan' ? 'SKYRAAN' : project.artBrand}</span><span>WEB / {project.number}</span></div>
                  {project.visual === 'skyraan' ? <div className="skyraan-type">Ideas<br /><i>in</i> motion<span className="art-spark">✳</span></div> : <div className={`project-art-copy art-${project.visual}`}><span>{project.artKicker}</span><b>{project.artTitle}</b><i>{project.artNote}</i></div>}
                  <div className="art-bottom"><span>{project.visual === 'skyraan' ? 'CORPORATE WEBSITE' : project.type.toUpperCase()}</span><Globe2 size={15} /></div>
                  </>}
                </div>
                <div className="project-info">
                  <div className="project-heading"><div><p className="project-type">{project.number} <span>/</span> {project.type}</p><h3>{project.name}</h3></div>{project.href && <a className="project-link" href={project.href} target="_blank" rel="noreferrer" aria-label={`Visit ${project.name}`}><ArrowUpRight size={21} /></a>}</div>
                  <p className="project-description">{project.description}</p>
                  <ul className="tag-list" aria-label="Technologies">{project.stack.map((item) => <li key={item}>{item}</li>)}</ul>
                  {project.detail && <p className="project-detail"><Code2 size={15} /> {project.detail}</p>}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="skills-section section-wrap" id="skills" aria-labelledby="skills-title">
          <div className="section-label"><span>03</span><span>TOOLKIT</span></div>
          <div className="skills-layout">
            <div className="skills-intro"><h2 id="skills-title">Technical<br />skills<span>.</span></h2><p>Tools I use to take a project from a first commit to a finished experience.</p></div>
            <div className="skill-grid">{skills.map((skill, index) => <article className="skill-item" key={skill.group} data-reveal><span className="skill-number">0{index + 1}</span><h3>{skill.group}</h3><p>{skill.items}</p></article>)}</div>
          </div>
        </section>

        <section className="experience-section section-wrap" id="experience" aria-labelledby="experience-title">
          <div className="section-label"><span>04</span><span>EXPERIENCE</span></div>
          <div className="experience-content" data-reveal>
            <div className="experience-heading"><p className="experience-date">AUGUST 2022 — PRESENT</p><h2 id="experience-title">Full Stack<br />Web Developer</h2><p className="company">Skyraan Technologies <span>·</span> Coimbatore</p></div>
            <div className="experience-details"><p className="lead">Building and maintaining responsive web applications across backend, database, and frontend.</p><ul>{work.map((item) => <li key={item}><ArrowRight size={15} />{item}</li>)}</ul></div>
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div className="contact-inner" data-reveal><p className="eyebrow">HAVE A PROJECT IN MIND?</p><h2 id="contact-title">Let&apos;s make<br /><span>it work.</span></h2><a className="contact-cta" href="mailto:keerthana96533@gmail.com">Start a conversation <ArrowUpRight size={18} /></a></div>
          <div className="contact-side" data-reveal><a href="mailto:keerthana96533@gmail.com"><Mail size={16} /> keerthana96533@gmail.com</a><a href="tel:+917603932587"><Phone size={16} /> +91 76039 32587</a><a href="https://www.linkedin.com/in/keerthana-g-0a26aa27a" target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn <ArrowUpRight size={14} /></a></div>
        </section>
      </main>

      <footer className="site-footer"><a className="wordmark" href="#home">KG<span>.</span></a><p>Designed & developed with care.</p><a className="back-top" href="#home">BACK TO TOP <ArrowUpRight size={14} /></a><span className="footer-year">© 2026 KEERTHANA G</span></footer>
    </>
  )
}

export default App
