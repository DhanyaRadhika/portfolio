import "./App.css";

const profile = {
  name: "Dhanya",
  fullName: "Nallamilli Dhanya Radhika",
  email: "nallamillidhanyaradhika@gmail.com",
  phone: "+91 6302827787",
  github: "https://github.com/DhanyaRadhika",
  linkedin: "https://www.linkedin.com/in/nallamilli-dhanya-radhika-1219772a/",
  leetcode: "https://leetcode.com/u/Nallamilli_Dhanya_Radhika/",
  hackerrank: "https://www.hackerrank.com/profile/23A31A42E9",
};

const EMAIL_COMPOSE_URL =
  "https://mail.google.com/mail/?view=cm&fs=1&to=nallamillidhanyaradhika@gmail.com";

const skills = [
  {
    title: "Programming",
    description: "Languages & problem solving",
    items: ["JavaScript", "Python", "Java", "SQL"],
  },
  {
    title: "Web Development",
    description: "Frontend & backend",
    items: ["HTML", "CSS", "React.js", "Angular", "Node.js", "Express.js"],
  },
  {
    title: "AI & Data",
    description: "Intelligent systems & data",
    items: ["AI / ML", "Data Science", "Pandas", "NumPy"],
  },
  {
    title: "ServiceNow",
    description: "Enterprise automation",
    items: [
      "ITSM",
      "Incident Management",
      "Flow Designer",
      "Business Rules",
      "GlideRecord",
      "CMDB",
      "REST APIs",
    ],
  },
  {
    title: "Core Technologies",
    description: "Computer science foundations",
    items: ["DSA", "OOP", "DBMS", "MongoDB", "Git", "GitHub"],
  },
];

const projects = [
  {
    title: "SentinelIQ",
    subtitle: "ServiceNow Incident Intelligence & Response",
    description:
      "An automated incident management platform with intelligent response workflows, priority-based automation, SLAs, notifications and operational monitoring.",
    tags: ["ServiceNow", "AI", "ITSM", "Automation"],
    type: "sentinel",
    details: [
      "Automated response for P1 critical incidents",
      "4-hour 24×7 resolution SLA",
      "Automated work notes and urgent notifications",
      "Business-rule protection for priority changes",
    ],
    github: null,
  },
  {
    title: "CampusOne",
    subtitle: "Campus Management Platform",
    description:
      "A unified campus platform connecting students and faculty through announcements, registration links, attendance tracking and placement statistics.",
    tags: ["JavaScript", "Node.js", "MongoDB", "Web"],
    type: "campus",
    details: [
      "Student and faculty workflows",
      "Attendance tracking",
      "Announcements and registration links",
      "Placement statistics",
    ],
    github: null,
  },
  {
    title: "SmartStock",
    subtitle: "Inventory & Order Management System",
    description:
      "A full-stack inventory platform for products, suppliers, orders and stock operations with authentication, reporting and intelligent reorder recommendations.",
    tags: ["Angular", "Express.js", "MongoDB", "OAuth"],
    type: "stock",
    details: [
      "Inventory administration workspace",
      "Low-stock monitoring",
      "Reorder recommendations",
      "Product, supplier and order management",
    ],
    github: "https://github.com/DhanyaRadhika/SmartStock",
  },
];

const achievements = [
  {
    title: "GATE 2026",
    label: "QUALIFIED",
    text: "Qualified in Data Science & Artificial Intelligence.",
  },
  {
    title: "CampusOne",
    label: "2ND PRIZE",
    text: "Secured 2nd Prize in a college project competition.",
  },
  {
    title: "Technical Workshop",
    label: "ANCHOR",
    text: "Anchored a 3-day workshop on Generative AI, NLP & Computer Vision.",
  },
];

const certificates = [
  {
    category: "SERVICENOW",
    title: "ServiceNow Certified System Administrator",
    link: "https://drive.google.com/file/d/1XmjJ2C_E45TproCe8qNOX5Kh2uxNXi5q/view?usp=sharing",
  },
  {
    category: "SERVICENOW",
    title: "ServiceNow Certified Application Developer",
    link: "https://drive.google.com/file/d/1vqnYJiXy7aC3c8p87mOS2kXUHnhkSEn7/view?usp=sharing",
  },
  {
    category: "AWS",
    title: "AWS Certified Developer – Associate",
    link: "https://drive.google.com/file/d/1VAupE77XvSmfOxYw_UVYmJhAvqjVueYq/view?usp=sharing",
  },
  {
    category: "AWS",
    title: "AWS Certified Solutions Architect – Associate",
    link: "https://drive.google.com/file/d/1398HpPBaP7ys8mVMmZmAQgJ7qHb2UxAL/view?usp=sharing",
  },
  {
    category: "AWS",
    title: "AWS Certified Cloud Practitioner",
    link: "https://drive.google.com/file/d/1hIfA58x1BvP_LyXV6BdJVHjsRNkr2ZQ7/view?usp=sharing",
  },
  {
    category: "AWS",
    title: "AWS Certified AI Practitioner",
    link: "https://drive.google.com/file/d/1BuE6BmL8Z6QTYGysv-5beR6bBdeCpys4/view?usp=sharing",
  },
  {
    category: "CLAUDE",
    title: "Introduction to Claude Cowork",
    link: "https://drive.google.com/file/d/1xoB3IxeK9uqiA2rxY7X0kYcxlDVrEiMD/view?usp=sharing",
  },
  {
    category: "CLAUDE",
    title: "Claude Code 101",
    link: "https://drive.google.com/file/d/1Jb07B87QI0rqwsDp7c8eN0dlINYOZ9V-/view?usp=sharing",
  },
  {
    category: "NPTEL",
    title: "Joy of Computing Using Python — 73%",
    link: "https://drive.google.com/file/d/1Qqz-t2CBCOzwsJ1q8jR4MiCitChPW4JB/view?usp=sharing",
  },
  {
    category: "NPTEL",
    title: "Python for Data Science — 69%",
    link: "https://drive.google.com/file/d/1Qtg3G9wPNG2SCIXRdag53ba51WuJVIrh/view?usp=sharing",
  },
  {
    category: "NPTEL",
    title: "Database Management System — 60%",
    link: "https://drive.google.com/file/d/1QxxXr76RkOsJl7tY3n--KcZkhLoC2wgE/view?usp=sharing",
  },
];

function Arrow() {
  return <span className="arrow">↗</span>;
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 3h3l2 5-2 2c1 2 2 3 4 4l2-2 5 2v3c0 1-1 2-2 2C10 19 5 14 5 5c0-1 1-2 2-2Z" />
    </svg>
  );
}

function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-container">
        <a href="#home" className="brand">
          <span className="brand-dot" />
          Dhanya
        </a>

        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#achievements">Achievements</a>
          <a href="#certificates">Certificates</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </nav>

        <a
          className="nav-button"
          href={EMAIL_COMPOSE_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          Let's Talk <Arrow />
        </a>
      </div>
    </header>
  );
}

function AIVisual() {
  return (
    <div className="ai-stage">
      <div className="ai-glow glow-one" />
      <div className="ai-glow glow-two" />

      <div className="orbit orbit-large">
        <span />
      </div>

      <div className="orbit orbit-medium">
        <span />
      </div>

      <div className="orbit orbit-small">
        <span />
      </div>

      <div className="ai-core">
        <div className="core-ring">
          <div className="core-symbol">AI</div>
        </div>
      </div>

      <div className="ai-node node-top">
        <span>ML</span>
      </div>

      <div className="ai-node node-right">
        <span>DATA</span>
      </div>

      <div className="ai-node node-left">
        <span>CODE</span>
      </div>

      <div className="ai-node node-bottom">
        <span>BUILD</span>
      </div>

      <div className="ai-grid" />
    </div>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-background">
        <div className="hero-grid" />
        <div className="hero-glow" />
      </div>

      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-label">
            <span className="pulse" />
            CSE (AI & ML) · DEVELOPER
          </div>

          <p className="hero-small">WELCOME TO MY DIGITAL SPACE</p>

          <h1>
            Hi, I'm <span>Dhanya.</span>
          </h1>

          <h2>
            Building intelligent
            <br />
            software for real-world ideas.
          </h2>

          <p className="hero-description">
            B.Tech student specializing in Artificial Intelligence and Machine
            Learning, building practical solutions across AI, full-stack
            development, ServiceNow and cloud technologies.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="primary-button">
              Explore My Work <Arrow />
            </a>

            <a
              href={EMAIL_COMPOSE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="outline-button"
            >
              Connect With Me
            </a>
          </div>

          <div className="hero-links">
            <a href={profile.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={profile.leetcode} target="_blank" rel="noreferrer">
              LeetCode
            </a>
            <a href={profile.hackerrank} target="_blank" rel="noreferrer">
              HackerRank
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <AIVisual />
        </div>
      </div>

      <div className="hero-bottom">
        <span>SCROLL TO EXPLORE</span>
        <div className="scroll-indicator">
          <span />
        </div>
        <span>↓</span>
      </div>
    </section>
  );
}

function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="section-title">
      <span className="section-eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function About() {
  return (
    <section className="section about-section" id="about">
      <SectionTitle
        eyebrow="A LITTLE ABOUT ME"
        title="Curiosity drives what I build."
        description="I enjoy exploring technology from intelligent systems to the software that brings them to life."
      />

      <div className="about-content">
        <div className="about-main">
          <span className="about-tag">PROFILE / DHANYA</span>

          <p className="about-highlight">
            I'm <strong>Dhanya</strong>, a CSE (AI & ML) student interested in
            turning ideas into practical technology.
          </p>

          <p>
            My interests span artificial intelligence, full-stack development,
            enterprise platforms and cloud technologies. I enjoy learning how
            different systems work and combining those skills to create useful
            applications.
          </p>

          <p>
            From building web applications to automating ServiceNow workflows, I
            like working on projects where technology solves a tangible problem.
          </p>
        </div>

        <div className="about-cards">
          <div className="about-card">
            <span>01 / MINDSET</span>
            <h3>Learn</h3>
            <p>Explore technologies beyond the familiar.</p>
          </div>

          <div className="about-card">
            <span>02 / APPROACH</span>
            <h3>Build</h3>
            <p>Turn concepts into working systems.</p>
          </div>

          <div className="about-card">
            <span>03 / PURPOSE</span>
            <h3>Solve</h3>
            <p>Focus technology on practical problems.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="section skills-section" id="skills">
      <SectionTitle
        eyebrow="TECHNOLOGY"
        title="The tools behind my ideas."
        description="A combination of programming, development, intelligent systems and enterprise technologies."
      />

      <div className="skills-grid">
        {skills.map((skill) => (
          <article className="skill-card" key={skill.title}>
            <div className="skill-card-top">
              <span className="skill-symbol">&lt;/&gt;</span>
              <span className="skill-arrow">↗</span>
            </div>

            <h3>{skill.title}</h3>
            <p>{skill.description}</p>

            <div className="skill-tags">
              {skill.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ProjectVisual({ type }) {
  if (type === "sentinel") {
    return (
      <div className="project-screen sentinel-screen">
        <div className="screen-top">
          <span>SENTINELIQ</span>
          <span className="live-state">● SYSTEM ACTIVE</span>
        </div>

        <div className="sentinel-layout">
          <div className="critical-panel">
            <small>INCIDENT PRIORITY</small>
            <strong>P1</strong>
            <span>CRITICAL</span>
          </div>

          <div className="automation-panel">
            <small>RESPONSE ENGINE</small>
            <strong>RUNNING</strong>

            <div className="activity-line">
              <i />
              AUTOMATED RESPONSE
            </div>

            <div className="activity-line">
              <i />
              SLA MONITORING
            </div>

            <div className="activity-line">
              <i />
              NOTIFICATION SENT
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === "campus") {
    return (
      <div className="project-screen campus-screen">
        <div className="screen-top">
          <span>CAMPUSONE</span>
          <span className="live-state">CAMPUS HUB</span>
        </div>

        <div className="campus-dashboard">
          <div className="campus-sidebar">
            <div className="campus-logo">C1</div>
            <span className="campus-active" />
            <span />
            <span />
            <span />
            <span />
          </div>

          <div className="campus-main">
            <div className="campus-welcome">
              <small>WELCOME BACK</small>
              <strong>Campus Overview</strong>
            </div>

            <div className="campus-stat-row">
              <div className="campus-stat">
                <small>ATTENDANCE</small>
                <strong>92%</strong>
              </div>

              <div className="campus-stat">
                <small>PLACEMENT</small>
                <strong>84%</strong>
              </div>

              <div className="campus-stat">
                <small>UPDATES</small>
                <strong>18</strong>
              </div>
            </div>

            <div className="campus-bottom-grid">
              <div className="campus-chart">
                <small>ATTENDANCE OVERVIEW</small>

                <div className="campus-chart-lines">
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
              </div>

              <div className="campus-notices">
                <small>RECENT UPDATES</small>
                <div />
                <div />
                <div />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="project-screen stock-screen">
      <div className="screen-top">
        <span>SMARTSTOCK</span>
        <span className="live-state">LIVE DATA</span>
      </div>

      <div className="stock-dashboard">
        <div className="stock-bars">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>

        <div className="stock-info">
          <small>INVENTORY STATUS</small>
          <strong>LOW STOCK</strong>
          <p>REORDER RECOMMENDED</p>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-number">
        <span>PROJECT</span>
      </div>

      <ProjectVisual type={project.type} />

      <div className="project-details">
        <div className="project-tags">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>

        <span className="project-subtitle">{project.subtitle}</span>

        <h3>{project.title}</h3>

        <p>{project.description}</p>

        <ul>
          {project.details.map((detail) => (
            <li key={detail}>
              <span>+</span>
              {detail}
            </li>
          ))}
        </ul>

        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="project-button"
          >
            VIEW GITHUB <Arrow />
          </a>
        )}
      </div>
    </article>
  );
}

function Projects() {
  return (
    <section className="section projects-section" id="projects">
      <SectionTitle
        eyebrow="SELECTED WORK"
        title="Ideas turned into systems."
        description="A selection of projects spanning enterprise automation, campus technology and full-stack development."
      />

      <div className="projects-container">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}

function Achievements() {
  return (
    <section className="section achievements-section" id="achievements">
      <SectionTitle
        eyebrow="MILESTONES"
        title="Moments worth remembering."
        description="Academic, technical and project milestones along the way."
      />

      <div className="achievement-grid">
        {achievements.map((achievement) => (
          <article className="achievement-card" key={achievement.title}>
            <div className="achievement-icon">✦</div>

            <span>{achievement.label}</span>

            <h3>{achievement.title}</h3>

            <p>{achievement.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Certificates() {
  return (
    <section className="section certificates-section" id="certificates">
      <SectionTitle
        eyebrow="CREDENTIALS"
        title="Learning beyond the classroom."
        description="Certifications and structured learning across enterprise platforms, cloud, AI and data."
      />

      <div className="certificate-grid">
        {certificates.map((certificate) => (
          <article className="certificate-card" key={certificate.title}>
            <div className="certificate-head">
              <span>{certificate.category}</span>
              <span>↗</span>
            </div>

            <h3>{certificate.title}</h3>

            <a href={certificate.link} target="_blank" rel="noreferrer">
              VIEW CREDENTIAL <Arrow />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

function Education() {
  return (
    <section className="section education-section" id="education">
      <SectionTitle
        eyebrow="EDUCATION"
        title="The foundation behind the work."
        description="My academic journey through computer science, artificial intelligence and mathematics."
      />

      <div className="education-flow">
        <div className="education-line">
          <span className="flow-dot" />
          <span className="flow-dot" />
          <span className="flow-dot" />
        </div>

        <div className="education-item">
          <div className="education-date">
            <span>SEP 2023</span>
            <span>PRESENT</span>
          </div>

          <div className="education-info">
            <span>BACHELOR OF TECHNOLOGY</span>
            <h3>CSE (AI & ML)</h3>
            <p>Pragati Engineering College, Surampalem</p>
          </div>

          <div className="education-score">
            <span>CGPA</span>
            <strong>9.0</strong>
            <small>/ 10</small>
          </div>
        </div>

        <div className="education-item">
          <div className="education-date">
            <span>2021</span>
            <span>2023</span>
          </div>

          <div className="education-info">
            <span>INTERMEDIATE EDUCATION</span>
            <h3>MPC</h3>
            <p>Aditya Junior College</p>
          </div>

          <div className="education-score">
            <span>PERCENTAGE</span>
            <strong>94.7</strong>
            <small>%</small>
          </div>
        </div>

        <div className="education-item">
          <div className="education-date">
            <span>2020</span>
            <span>2021</span>
          </div>

          <div className="education-info">
            <span>SECONDARY EDUCATION</span>
            <h3>10th Standard</h3>
            <p>ZP High School, Pasalapudi</p>
          </div>

          <div className="education-score">
            <span>GPA</span>
            <strong>9.7</strong>
            <small>/ 10</small>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <div className="contact-panel">
        <div className="contact-heading">
          <span className="section-eyebrow">GET IN TOUCH</span>

          <h2>
            Let's build
            <br />
            <span>something meaningful.</span>
          </h2>
        </div>

        <div className="contact-content">
          <p>
            I'm open to connecting, discussing technology and exploring
            opportunities where I can learn, contribute and build.
          </p>

          <div className="contact-cards">
            <a
              href={EMAIL_COMPOSE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
            >
              <span className="contact-icon">
                <MailIcon />
              </span>

              <span className="contact-card-text">
                <small>EMAIL</small>
                <strong>{profile.email}</strong>
              </span>
            </a>

            <a
              href={`tel:${profile.phone.replace(/\s/g, "")}`}
              className="contact-card"
            >
              <span className="contact-icon">
                <PhoneIcon />
              </span>

              <span className="contact-card-text">
                <small>PHONE</small>
                <strong>{profile.phone}</strong>
              </span>
            </a>
          </div>

          <a
            href={EMAIL_COMPOSE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="primary-button contact-email-button"
          >
            Send me an email <Arrow />
          </a>

          <div className="contact-socials">
            <a href={profile.github} target="_blank" rel="noreferrer">
              GitHub <Arrow />
            </a>

            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn <Arrow />
            </a>

            <a href={profile.leetcode} target="_blank" rel="noreferrer">
              LeetCode <Arrow />
            </a>

            <a href={profile.hackerrank} target="_blank" rel="noreferrer">
              HackerRank <Arrow />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Certificates />
        <Education />
        <Contact />
      </main>

      <footer>
        <div className="footer-inner">
          <a href="#home" className="brand">
            <span className="brand-dot" />
            Dhanya
          </a>

          <div className="footer-links">
            <a href={profile.github} target="_blank" rel="noreferrer">
              GitHub
            </a>

            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>

            <a href={profile.leetcode} target="_blank" rel="noreferrer">
              LeetCode
            </a>

            <a href={profile.hackerrank} target="_blank" rel="noreferrer">
              HackerRank
            </a>
          </div>

          <span className="footer-copy">
            © {new Date().getFullYear()} {profile.fullName}
          </span>
        </div>
      </footer>
    </>
  );
}

export default App;
