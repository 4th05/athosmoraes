import React, { useEffect, useMemo, useState } from "react";
import {
  academic,
  certifications,
  education,
  experience,
  languages,
  profile,
  projects,
  publications,
  resume,
  skills,
  thesis
} from "./data/site";
import { Card } from "./components/Card";
import { Section } from "./components/Section";
import { Tag } from "./components/Tag";

function useTheme() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const stored = window.localStorage.getItem("theme");
    if (stored === "dark" || stored === "light") {
      setTheme(stored);
      return;
    }
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(prefersDark ? "dark" : "light");
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.setAttribute("data-theme", "dark");
    } else {
      root.removeAttribute("data-theme");
    }
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  return { theme, setTheme };
}

const withBase = (path: string) => `${import.meta.env.BASE_URL}${path}`;

export default function App() {
  const { theme, setTheme } = useTheme();

  const avatarSrc = useMemo(() => withBase(profile.avatar), []);
  const thesisImage = useMemo(() => withBase(thesis.image), []);

  return (
    <div className="page">
      <header className="topbar">
        <div className="topbar__content">
          <div className="brand">
            <span className="brand__mark">AM</span>
            <span className="brand__title">{profile.name}</span>
          </div>
          <nav className="topbar__nav">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#publications">Publications</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
            <button
              className="theme-toggle"
              type="button"
              aria-label="Toggle theme"
              title="Toggle theme"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? (
                <span aria-hidden="true">☀️</span>
              ) : (
                <span aria-hidden="true">🌙</span>
              )}
            </button>
          </nav>
        </div>
      </header>

      <main className="layout">
        <aside className="sidebar">
          <Card>
            <div className="profile">
              <img className="profile__avatar" src={avatarSrc} alt={profile.name} />
              <div>
                <h1>{profile.name}</h1>
                <p className="profile__title">{profile.title}</p>
                <p className="profile__location">{profile.location}</p>
              </div>
            </div>
            <div className="profile__cta">
              <a className="button" href={`mailto:${profile.email}`}>
                Contact Me
              </a>
              <a className="button button--ghost" href={withBase(resume.href)}>
                {resume.label}
              </a>
            </div>
            <div className="profile__links">
              {profile.socials.map((item) => (
                <a key={item.label} href={item.href} target="_blank" rel="noreferrer">
                  {item.label}
                </a>
              ))}
            </div>
          </Card>

          <Card>
            <h3>Focus</h3>
            <ul className="list">
              {profile.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Card>

          <Card>
            <h3>Skills</h3>
            <div className="tag-list">
              {skills.map((skill) => (
                <Tag key={skill} label={skill} />
              ))}
            </div>
          </Card>
        </aside>

        <section className="content">
          <Section id="about" title="About" subtitle="Research, data, and applied ML.">
            <Card>
              <p>{profile.summary}</p>
            </Card>
            <div className="grid-2">
              <Card>
                <h3>Education</h3>
                <ul className="timeline">
                  {education.map((item) => (
                    <li key={item.title}>
                      <div className="timeline__title">{item.title}</div>
                      <div className="timeline__meta">{item.place}</div>
                      <div className="timeline__period">{item.period}</div>
                    </li>
                  ))}
                </ul>
              </Card>
              <Card>
                <h3>Languages</h3>
                <ul className="list">
                  {languages.map((lang) => (
                    <li key={lang.label}>
                      {lang.label} — {lang.level}
                    </li>
                  ))}
                </ul>
                <h3 className="mt">Certifications</h3>
                <ul className="list">
                  {certifications.map((cert) => (
                    <li key={cert}>{cert}</li>
                  ))}
                </ul>
              </Card>
            </div>
          </Section>

          <Section id="projects" title="Selected Projects" subtitle="Industry work and applied research.">
            <div className="grid-2">
              {projects.map((project) => (
                <Card key={project.title} className="card--project">
                  <img
                    src={withBase(project.image)}
                    alt={project.title}
                    className="card__image"
                  />
                  <div className="card__body">
                    <div className="eyebrow">{project.year}</div>
                    <h3>{project.title}</h3>
                    <p>{project.summary}</p>
                    <div className="tag-list">
                      {project.tags.map((tag) => (
                        <Tag key={tag} label={tag} />
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </Section>

          <Section id="thesis" title="Master’s Thesis" subtitle="Automatic report generation in histopathology.">
            <Card className="card--split">
              <img src={thesisImage} alt={thesis.title} className="card__image" />
              <div>
                <div className="eyebrow">{thesis.year}</div>
                <h3>{thesis.title}</h3>
                <p>{thesis.summary}</p>
                <ul className="list">
                  {thesis.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </Card>
          </Section>

          <Section id="publications" title="Publications" subtitle="Peer-reviewed and preprint work.">
            <div className="stack">
              {publications.map((pub) => (
                <Card key={pub.title}>
                  <div className="publication">
                    <div>
                      <h3>{pub.title}</h3>
                      <p className="muted">{pub.venue}</p>
                    </div>
                    <div className="publication__meta">
                      <span>{pub.date}</span>
                      <a href={pub.href} target="_blank" rel="noreferrer">
                        View
                      </a>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </Section>

          <Section id="experience" title="Professional Experience" subtitle="Applied ML in production environments.">
            <div className="stack">
              {experience.map((item) => (
                <Card key={item.role + item.org}>
                  <div className="experience">
                    <div>
                      <h3>{item.role}</h3>
                      <p className="muted">{item.org}</p>
                    </div>
                    <span className="eyebrow">{item.period}</span>
                  </div>
                  <ul className="list">
                    {item.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </Section>

          <Section id="research" title="Academic Experience" subtitle="Research in computational biology and physics.">
            <div className="stack">
              {academic.map((item) => (
                <Card key={item.role + item.org}>
                  <div className="experience">
                    <div>
                      <h3>{item.role}</h3>
                      <p className="muted">{item.org}</p>
                    </div>
                    <span className="eyebrow">{item.period}</span>
                  </div>
                  <ul className="list">
                    {item.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </Section>

          <Section id="contact" title="Contact" subtitle="Let’s connect.">
            <Card>
              <div className="contact">
                <div>
                  <h3>Email</h3>
                  <a href={`mailto:${profile.email}`}>{profile.email}</a>
                </div>
                <div>
                  <h3>Location</h3>
                  <p>{profile.location}</p>
                </div>
                <div>
                  <h3>Links</h3>
                  <div className="profile__links profile__links--inline">
                    {profile.socials.map((item) => (
                      <a key={item.label} href={item.href} target="_blank" rel="noreferrer">
                        {item.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </Section>
        </section>
      </main>

      <footer className="footer">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>Built with React + Vite</span>
      </footer>
    </div>
  );
}
