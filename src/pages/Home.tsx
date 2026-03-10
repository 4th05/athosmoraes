import React, { useMemo, useRef, useState } from "react";
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
  skillGroups,
  thesis
} from "../data/site";
import { Card } from "../components/Card";
import { Section } from "../components/Section";
import { Tag } from "../components/Tag";
import { skillInfoByName } from "../data/skillInfo";

function SocialIcon({ label }: { label: string }) {
  const common = { width: 18, height: 18, viewBox: "0 0 24 24", fill: "currentColor" };
  switch (label.toLowerCase()) {
    case "github":
      return (
        <svg {...common} aria-hidden="true">
          <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.71.5.09.68-.22.68-.5 0-.24-.01-.88-.02-1.73-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.1-1.49-1.1-1.49-.9-.63.07-.62.07-.62 1 .07 1.52 1.05 1.52 1.05.88 1.55 2.3 1.1 2.86.84.09-.66.35-1.1.63-1.36-2.22-.26-4.56-1.14-4.56-5.08 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.27 9.27 0 0 1 12 6.8c.85 0 1.71.12 2.51.35 1.9-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.64 1.03 2.76 0 3.95-2.34 4.82-4.57 5.08.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .28.18.6.69.5A10.02 10.02 0 0 0 22 12.26C22 6.58 17.52 2 12 2z" />
        </svg>
      );
    case "linkedin":
      return (
        <svg {...common} aria-hidden="true">
          <path d="M19 3A2 2 0 0 1 21 5v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.5 9H6v9h2.5V9zm.2-3.1a1.45 1.45 0 1 0-2.9 0 1.45 1.45 0 0 0 2.9 0zM18 12.4c0-2-1.1-3-2.6-3-1.2 0-1.8.7-2.1 1.2V9H11v9h2.4v-4.7c0-1.2.2-2.3 1.6-2.3 1.4 0 1.4 1.3 1.4 2.4V18H18v-5.6z" />
        </svg>
      );
    case "orcid":
      return (
        <svg {...common} aria-hidden="true">
          <path d="M7.6 7.2a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0zM4.8 9.3h2.6v7.5H4.8V9.3zm5.2 0h3.7c3.1 0 5.3 2 5.3 5.1 0 3.1-2.2 5.1-5.3 5.1H10V9.3zm2.6 7h1.1c2 0 3.2-1.2 3.2-3 0-1.9-1.2-3-3.2-3H12.6v6zM12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" />
        </svg>
      );
    default:
      return null;
  }
}

const withBase = (path: string) => `${import.meta.env.BASE_URL}${path}`;

const rawSearchAliasMap: Record<string, string[]> = {
  langgraph: ["langchain", "agentic", "agents", "orchestration", "multi-agent"],
  "agentic systems": ["agentic", "agents", "langchain", "orchestration", "multi-agent"],
  "multi-agent": ["agents", "langchain", "orchestration", "question-answer"],
  chatbot: ["rag", "question-answer", "langchain", "retrieval"],
  "vector search": ["faiss", "similarity", "retrieval"],
  "similarity search": ["faiss", "similarity", "retrieval"]
};

function stripDiacritics(value: string) {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function normalizeSearchText(value: string) {
  return stripDiacritics(value)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim()
    .replace(/\s+/g, " ");
}

function normalizeLooseText(value: string) {
  return normalizeSearchText(value).replace(/\s+/g, "");
}

function parseSearchTerms(value: string) {
  return value
    .split(/[,;|/\n]+/)
    .map((item) => normalizeLooseText(item))
    .filter(Boolean);
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function getToolTone(tool: string): "blue" | "teal" | "amber" | "violet" | "slate" {
  const normalized = tool.toLowerCase();

  if (
    ["pytorch", "tensorflow", "keras", "lightgbm", "xgboost", "kmeans", "lstm", "arima", "prophet", "hipt", "dft", "lsda", "gradient boosting", "optuna", "ragg", "rag", "gpt", "bert4rec", "hugging face", "langchain"].some((token) =>
      normalized.includes(token)
    )
  ) {
    return "blue";
  }

  if (
    ["python", "pyspark", "sql", "pandas", "numpy", "boto3", "scipy", "gtEx".toLowerCase()].some((token) =>
      normalized.includes(token)
    )
  ) {
    return "teal";
  }

  if (
    ["aws", "amazon", "s3", "fargate", "glue", "lambda", "step functions", "slurm", "linux", "eurohpc", "docker"].some((token) =>
      normalized.includes(token)
    )
  ) {
    return "amber";
  }

  if (
    ["fastapi", "streamlit", "qlik", "reporting", "dashboards", "rest api"].some((token) =>
      normalized.includes(token)
    )
  ) {
    return "violet";
  }

  return "slate";
}

const searchAliasMap = Object.fromEntries(
  Object.entries(rawSearchAliasMap).map(([key, values]) => [
    normalizeLooseText(key),
    values.map((value) => normalizeLooseText(value))
  ])
) as Record<string, string[]>;

function getWorkTypeMeta(workType: "industry" | "academic" | "both") {
  switch (workType) {
    case "industry":
      return { label: "Industry", tone: "industry" as const };
    case "academic":
      return { label: "Academic", tone: "academic" as const };
    case "both":
      return { label: "Academic + Industry", tone: "both" as const };
  }
}

type SearchResultTone = "industry" | "academic" | "both" | "publication";

type HomeProps = {
  buildProjectHref: (slug: string) => string;
  thesisHref: string;
};

export default function Home({ buildProjectHref, thesisHref }: HomeProps) {
  const avatarSrc = useMemo(() => withBase(profile.avatar), []);
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const roleCarouselRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const finderRef = useRef<HTMLDivElement | null>(null);
  const [openExperienceKeys, setOpenExperienceKeys] = useState<Record<string, boolean>>({});
  const [activeHighlightId, setActiveHighlightId] = useState<string | null>(null);
  const [isFinderOpen, setIsFinderOpen] = useState(false);
  const [textDraft, setTextDraft] = useState("");
  const [skillDraft, setSkillDraft] = useState("");
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [appliedTextQueries, setAppliedTextQueries] = useState<string[]>([]);
  const [appliedSkills, setAppliedSkills] = useState<string[]>([]);
  const featuredWork = useMemo(
    () =>
      [
        ...projects.map((project) => ({
          key: project.slug,
          href: buildProjectHref(project.slug),
          year: project.year,
          title: project.title,
          summary: project.summary,
          image: withBase(project.image),
          workType: project.workType,
          tags: project.tags
        })),
        {
          key: thesis.slug,
          href: thesisHref,
          year: thesis.year,
          title: thesis.title,
          summary: thesis.summary,
          image: withBase(thesis.image),
          workType: thesis.workType,
          tags: ["Computational Pathology", "CV", "NLP", "LLMs"]
        }
      ].sort((left, right) => Number(right.year) - Number(left.year)),
    [buildProjectHref, thesisHref]
  );
  const academicProjectCount = useMemo(
    () => academic.reduce((total, item) => total + item.highlights.length, 0) + 1 + publications.length,
    []
  );
  const industryProjectCount = useMemo(
    () => experience.reduce((total, item) => total + item.highlights.length, 0),
    []
  );
  const overviewMetrics = useMemo(
    () => [
      { value: String(publications.length).padStart(2, "0"), label: "Academic publications" },
      { value: String(academicProjectCount).padStart(2, "0"), label: "Academic projects" },
      { value: String(industryProjectCount).padStart(2, "0"), label: "Industry projects" }
    ],
    [academicProjectCount, industryProjectCount]
  );
  const availableSkills = useMemo(
    () =>
      Array.from(
        new Set([...experience, ...academic].flatMap((item) => item.highlights.flatMap((highlight) => highlight.tools)))
      ).sort((left, right) => left.localeCompare(right)),
    []
  );
  const searchEntries = useMemo(
    () =>
      [
        ...experience.flatMap((item) =>
          item.highlights.map((highlight) => {
            const entryKey = `industry-${slugify(item.role)}-${slugify(item.org)}-${slugify(item.period)}`;
            const highlightId = `${entryKey}-${slugify(highlight.title)}`;
            return {
              anchorId: highlightId,
              cardKey: entryKey,
              title: highlight.title,
              date: item.period,
              org: item.org,
              role: item.role,
              type: "Industry" as const,
              typeTone: "industry" as SearchResultTone,
              tools: highlight.tools,
              searchText: normalizeLooseText(
                [
                  highlight.title,
                  highlight.goal,
                  highlight.outcome,
                  item.role,
                  item.org,
                  ...highlight.tools
                ].join(" ")
              )
            };
          })
        ),
        ...academic.flatMap((item) =>
          item.highlights.map((highlight) => {
            const entryKey = `academic-${slugify(item.role)}-${slugify(item.org)}-${slugify(item.period)}`;
            const highlightId = `${entryKey}-${slugify(highlight.title)}`;
            return {
              anchorId: highlightId,
              cardKey: entryKey,
              title: highlight.title,
              date: item.period,
              org: item.org,
              role: item.role,
              type: "Academic" as const,
              typeTone: "academic" as SearchResultTone,
              tools: highlight.tools,
              searchText: normalizeLooseText(
                [
                  highlight.title,
                  highlight.goal,
                  highlight.outcome,
                  item.role,
                  item.org,
                  ...highlight.tools
                ].join(" ")
              )
            };
          })
        ),
        ...projects.map((project) => ({
          anchorId: project.slug,
          cardKey: null,
          href: buildProjectHref(project.slug),
          title: project.title,
          date: project.year,
          org: "Selected Cases",
          role: "Project Case Study",
          type: getWorkTypeMeta(project.workType).label,
          typeTone: getWorkTypeMeta(project.workType).tone as SearchResultTone,
          tools: project.tags,
          searchText: normalizeLooseText(
            [
              project.title,
              project.summary,
              ...project.tags,
              ...project.sections.flatMap((section) => [
                section.title,
                ...section.body,
                ...(section.bullets ?? []),
                section.note ?? ""
              ])
            ].join(" ")
          )
        })),
        {
          anchorId: thesis.slug,
          cardKey: null,
          href: thesisHref,
          title: thesis.title,
          date: thesis.year,
          org: "Master's Thesis",
          role: "Academic Case Study",
          type: getWorkTypeMeta(thesis.workType).label,
          typeTone: getWorkTypeMeta(thesis.workType).tone as SearchResultTone,
          tools: ["Computational Pathology", "CV", "NLP", "LLMs"],
          searchText: normalizeLooseText(
            [
              thesis.title,
              thesis.summary,
              ...thesis.highlights,
              ...thesis.sections.flatMap((section) => [
                section.title,
                ...section.body,
                ...(section.bullets ?? []),
                section.note ?? ""
              ])
            ].join(" ")
          )
        },
        ...publications.map((publication) => ({
          anchorId: slugify(publication.title),
          cardKey: null,
          href: publication.href,
          title: publication.title,
          date: publication.date,
          org: publication.venue,
          role: "Publication",
          type: "Publication" as const,
          typeTone: "publication" as SearchResultTone,
          tools: [],
          searchText: normalizeLooseText(
            [publication.title, publication.venue, publication.date, ...publication.keywords].join(" ")
          )
        }))
      ],
    [buildProjectHref, thesisHref]
  );
  const experienceMatches = useMemo(() => {
    if (appliedTextQueries.length === 0 && appliedSkills.length === 0) {
      return [];
    }

    const queryTerms = Array.from(
      new Set(
        appliedTextQueries.flatMap((query) => [query, ...(searchAliasMap[query] ?? [])])
      )
    );

    return searchEntries.filter((entry) => {
      const matchesSkills =
        appliedSkills.length > 0 &&
        appliedSkills.some((skill) =>
          entry.tools.some((tool) => normalizeLooseText(tool) === normalizeLooseText(skill))
        );
      const matchesText = queryTerms.length > 0 && queryTerms.some((term) => entry.searchText.includes(term));

      return matchesSkills || matchesText;
    });
  }, [appliedSkills, appliedTextQueries, searchEntries]);

  const scrollCarousel = (direction: "prev" | "next") => {
    const node = carouselRef.current;
    if (!node) {
      return;
    }
    const offset = node.clientWidth * 0.88;
    node.scrollBy({
      left: direction === "next" ? offset : -offset,
      behavior: "smooth"
    });
  };

  const scrollRoleCarousel = (key: string, direction: "prev" | "next") => {
    const node = roleCarouselRefs.current[key];
    if (!node) {
      return;
    }
    const offset = node.clientWidth * 0.92;
    node.scrollBy({
      left: direction === "next" ? offset : -offset,
      behavior: "smooth"
    });
  };

  const setExperienceOpen = (key: string, nextOpen?: boolean) => {
    setOpenExperienceKeys((current) => ({
      ...current,
      [key]: nextOpen ?? !current[key]
    }));
  };

  const resolveSkillsFromInput = (value: string) => {
    const requestedValues = value
      .split(/[,;\n]+/)
      .map((item) => normalizeLooseText(item))
      .filter(Boolean);

    if (requestedValues.length === 0) {
      return [];
    }

    return requestedValues
      .map((requestedValue) => {
        return (
          availableSkills.find((skill) => normalizeLooseText(skill) === requestedValue) ??
          availableSkills.find((skill) => normalizeLooseText(skill).includes(requestedValue))
        );
      })
      .filter((skill): skill is string => Boolean(skill));
  };

  const runExperienceSearch = (nextText = textDraft, nextSkills = selectedSkills) => {
    setAppliedTextQueries(parseSearchTerms(nextText));
    setAppliedSkills(nextSkills);
  };

  const addSelectedSkills = (value: string) => {
    const matchedSkills = resolveSkillsFromInput(value);

    if (matchedSkills.length === 0) {
      return null;
    }

    const nextSkills = Array.from(new Set([...selectedSkills, ...matchedSkills]));
    setSelectedSkills(nextSkills);
    setSkillDraft("");
    return nextSkills;
  };

  const removeSelectedSkill = (skill: string) => {
    const nextSkills = selectedSkills.filter((item) => item !== skill);
    setSelectedSkills(nextSkills);
    setAppliedSkills(nextSkills);
  };

  const jumpToExperience = (cardKey: string, anchorId: string) => {
    setExperienceOpen(cardKey, true);
    setActiveHighlightId(anchorId);
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        document.getElementById(anchorId)?.scrollIntoView({
          behavior: "smooth",
          block: "center"
        });
      });
    });
    window.setTimeout(() => {
      setActiveHighlightId((current) => (current === anchorId ? null : current));
    }, 2200);
  };

  const openSearchMatch = (match: {
    cardKey: string | null;
    anchorId: string;
    href?: string;
  }) => {
    if (match.href) {
      window.location.hash = match.href.replace(/^#/, "");
      return;
    }

    if (match.cardKey) {
      jumpToExperience(match.cardKey, match.anchorId);
    }
  };

  const openFinder = () => {
    setIsFinderOpen(true);
    window.requestAnimationFrame(() => {
      finderRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  };

  const clearFinder = () => {
    setTextDraft("");
    setSkillDraft("");
    setSelectedSkills([]);
    setAppliedTextQueries([]);
    setAppliedSkills([]);
    setActiveHighlightId(null);
  };

  const hideFinder = () => {
    setIsFinderOpen(false);
  };

  return (
    <main className="layout">
      <aside className="sidebar">
        <Card className="card--profile-panel">
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
              <a
                key={item.label}
                className="icon-link"
                href={item.href}
                target="_blank"
                rel="noreferrer"
                aria-label={item.label}
                title={item.label}
              >
                <SocialIcon label={item.label} />
              </a>
            ))}
          </div>
        </Card>

        <Card className="card--sidebar">
          <h3>Skills</h3>
          <div className="skill-groups">
            {skillGroups.map((group) => (
              <div key={group.title} className="skill-group">
                <div className="skill-group__title">{group.title}</div>
                <div className="tag-list">
                  {group.items.map((skill) => (
                    <Tag key={skill} label={skill} tone={group.tone} info={skillInfoByName[skill]} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Card>
      </aside>

      <section className="content">
        <div className="finder-hub">
          <Card
            className="finder-callout"
            role="button"
            tabIndex={0}
            onClick={openFinder}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                openFinder();
              }
            }}
          >
            <div className="finder-callout__content">
              <div className="finder-callout__eyebrow">In a Hurry?</div>
              <h2 className="finder-callout__title">Skip the reading. Jump straight to what matters.</h2>
              <p className="finder-callout__copy">
                If you want to save time, open the experience finder and search directly for skills, publications,
                projects, thesis topics, or recruiter-style keywords.
              </p>
            </div>
            <div className="finder-callout__action">
              <span className="finder-callout__icon" aria-hidden="true">
                ✦
              </span>
              Open finder
            </div>
          </Card>
          {isFinderOpen ? (
            <div ref={finderRef}>
              <Card className="card--info experience-search-card">
                <div className="experience-search">
                  <div className="experience-search__intro">
                    <div className="experience-search__intro-head">
                      <div>
                        <div className="eyebrow">Experience Finder</div>
                        <h3>Find matching work by recruiter keywords or tools</h3>
                      </div>
                      <div className="experience-search__actions">
                        <button className="experience-search__action" type="button" onClick={clearFinder}>
                          Clear
                        </button>
                        <button className="experience-search__action" type="button" onClick={hideFinder}>
                          Hide finder
                        </button>
                      </div>
                    </div>
                    <p className="muted">
                      Type terms like <code>agentic systems</code> or add tools like <code>PyTorch</code> to retrieve
                      matching industry and academic work deterministically.
                    </p>
                  </div>
                  <div className="experience-search__controls">
                    <label className="experience-search__field">
                      <span>Text query</span>
                      <input
                        className="experience-search__input"
                        type="text"
                        value={textDraft}
                        placeholder="e.g. agentic systems, sustainability, forecasting"
                        onChange={(event) => setTextDraft(event.target.value)}
                        onKeyDown={(event) => {
                          if (event.key === "Enter") {
                            event.preventDefault();
                            runExperienceSearch();
                          }
                        }}
                      />
                    </label>
                    <label className="experience-search__field">
                      <span>Add tool</span>
                      <input
                        className="experience-search__input"
                        type="text"
                        list="experience-skill-options"
                        value={skillDraft}
                        placeholder="One or more tools, separated by commas"
                        onChange={(event) => setSkillDraft(event.target.value)}
                        onKeyDown={(event) => {
                          if (event.key === "Enter") {
                            event.preventDefault();
                            addSelectedSkills(skillDraft);
                          }
                        }}
                      />
                      <datalist id="experience-skill-options">
                        {availableSkills
                          .filter((skill) => !selectedSkills.includes(skill))
                          .map((skill) => (
                            <option key={skill} value={skill} />
                          ))}
                      </datalist>
                    </label>
                    <button className="button experience-search__button" type="button" onClick={() => runExperienceSearch()}>
                      Find matches
                    </button>
                  </div>
                  {selectedSkills.length > 0 ? (
                    <div className="experience-search__chips">
                      {selectedSkills.map((skill) => (
                        <button
                          key={skill}
                          className="experience-search__chip"
                          type="button"
                          onClick={() => removeSelectedSkill(skill)}
                        >
                          {skill} <span aria-hidden="true">×</span>
                        </button>
                      ))}
                    </div>
                  ) : null}
                  {appliedTextQueries.length > 0 || appliedSkills.length > 0 ? (
                    experienceMatches.length > 0 ? (
                      <div className="experience-search__results">
                        <div className="experience-search__results-meta">
                          <strong>{experienceMatches.length}</strong> matching items
                        </div>
                        <div className="experience-search__table-wrap">
                          <table className="experience-search-table">
                            <thead>
                              <tr>
                                <th>Title</th>
                                <th>Date</th>
                                <th>Type</th>
                                <th>Link</th>
                              </tr>
                            </thead>
                            <tbody>
                              {experienceMatches.map((match) => (
                                <tr key={match.anchorId}>
                                  <td>
                                    <div className="experience-search-table__title">{match.title}</div>
                                    <div className="experience-search-table__meta">
                                      {match.role} · {match.org}
                                    </div>
                                  </td>
                                  <td>{match.date}</td>
                                  <td>
                                    <span className={`work-badge work-badge--${match.typeTone}`}>{match.type}</span>
                                  </td>
                                  <td>
                                    <a
                                      href={match.href ?? `#${match.anchorId}`}
                                      onClick={(event) => {
                                        event.preventDefault();
                                        openSearchMatch(match);
                                      }}
                                    >
                                      Jump to detail
                                    </a>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    ) : (
                      <div className="experience-search__empty">
                        No exact matches found for the current query and tool selection.
                      </div>
                    )
                  ) : (
                    <div className="experience-search__hint">
                      Start with a recruiter term or tool to generate a match table.
                    </div>
                  )}
                </div>
              </Card>
            </div>
          ) : null}
        </div>

        <Section id="about" title="About me">
          <Card className="hero-card">
            <div className="hero-card__eyebrow">Applied ML, computational biology, and product delivery</div>
            <h2 className="hero-card__title">
              Building data products that connect research depth with production execution.
            </h2>
            <p className="hero-card__summary">{profile.summary}</p>
            <div className="metric-grid">
              {overviewMetrics.map((item) => (
                <div key={item.label} className="metric">
                  <div className="metric__value">{item.value}</div>
                  <div className="metric__label">{item.label}</div>
                </div>
              ))}
            </div>
          </Card>
          <div className="grid-2">
            <Card className="card--info">
              <h3>Education</h3>
              <ul className="timeline">
                {education.map((item) => (
                  <li key={item.title}>
                    <div className="timeline__item">
                      <img
                        className="timeline__logo"
                        src={withBase(item.logo)}
                        alt={`${item.place} logo`}
                      />
                      <div className="timeline__content">
                        <div className="timeline__title">{item.title}</div>
                        <div className="timeline__meta">{item.place}</div>
                        <div className="timeline__period">{item.period}</div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </Card>
            <Card className="card--info">
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

        <Section id="projects" title="Selected Cases">
          <div className="carousel-shell">
            <div className="carousel-shell__header">
              {/* <p className="muted carousel-shell__copy">
                A compact view of industry projects and academic work, with the thesis presented alongside the
                other case studies.
              </p> */}
              <div className="carousel-shell__controls">
                <button className="carousel-button" type="button" onClick={() => scrollCarousel("prev")}>
                  ←
                </button>
                <button className="carousel-button" type="button" onClick={() => scrollCarousel("next")}>
                  →
                </button>
              </div>
            </div>
            <div ref={carouselRef} className="work-carousel" aria-label="Featured work carousel">
              {featuredWork.map((item) => (
                <Card key={item.key} className="card--project work-carousel__slide">
                <a
                  className="project-card__link"
                  href={item.href}
                  aria-label={`View details for ${item.title}`}
                >
                  <img src={item.image} alt={item.title} className="card__image" />
                  <div className="card__body">
                    <div className="work-card__meta">
                      <span className={`work-badge work-badge--${getWorkTypeMeta(item.workType).tone}`}>
                        {getWorkTypeMeta(item.workType).label}
                      </span>
                      <div className="eyebrow">{item.year}</div>
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.summary}</p>
                    <div className="tag-list">
                      {item.tags.map((tag) => (
                        <Tag key={tag} label={tag} />
                      ))}
                    </div>
                    <div className="card__footer">
                      <span className="text-link">View details →</span>
                    </div>
                  </div>
                </a>
              </Card>
              ))}
            </div>
          </div>
        </Section>

        <Section id="publications" title="Publications">
          <div className="stack">
            {publications.map((pub) => (
              <Card key={pub.title} className="card--info">
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

        <Section id="experience" title="Professional Experience">
          <div className="stack">
            {experience.map((item) => (
              <Card
                key={item.role + item.org}
                id={`industry-${slugify(item.role)}-${slugify(item.org)}-${slugify(item.period)}`}
                className="card--info"
              >
                <div className="experience">
                  <div>
                    <h3>{item.role}</h3>
                    <p className="muted">{item.org}</p>
                  </div>
                  <span className="eyebrow">{item.period}</span>
                </div>
                <details
                  className="experience-disclosure"
                  open={Boolean(openExperienceKeys[`industry-${slugify(item.role)}-${slugify(item.org)}-${slugify(item.period)}`])}
                >
                  <summary
                    className="experience-disclosure__summary"
                    onClick={(event) => {
                      event.preventDefault();
                      setExperienceOpen(
                        `industry-${slugify(item.role)}-${slugify(item.org)}-${slugify(item.period)}`
                      );
                    }}
                  >
                    <span className="experience-disclosure__icon" aria-hidden="true">
                      ✦
                    </span>
                    <span className="experience-disclosure__body">
                      <span className="experience-disclosure__title">Explore project details</span>
                      <span className="experience-disclosure__copy">
                        {item.highlights.length} case snapshots showing what I built and what it achieved
                      </span>
                    </span>
                    <span className="experience-disclosure__chevron" aria-hidden="true">
                      ↘
                    </span>
                  </summary>
                  <div className="role-carousel-shell">
                    <div className="role-carousel-shell__controls">
                      <button
                        className="carousel-button carousel-button--small"
                        type="button"
                        onClick={() =>
                          scrollRoleCarousel(
                            `industry-${slugify(item.role)}-${slugify(item.org)}-${slugify(item.period)}`,
                            "prev"
                          )
                        }
                      >
                        ←
                      </button>
                      <button
                        className="carousel-button carousel-button--small"
                        type="button"
                        onClick={() =>
                          scrollRoleCarousel(
                            `industry-${slugify(item.role)}-${slugify(item.org)}-${slugify(item.period)}`,
                            "next"
                          )
                        }
                      >
                        →
                      </button>
                    </div>
                    <div
                      ref={(node) => {
                        roleCarouselRefs.current[
                          `industry-${slugify(item.role)}-${slugify(item.org)}-${slugify(item.period)}`
                        ] = node;
                      }}
                      className="role-carousel"
                    >
                      {item.highlights.map((highlight) => (
                        <div
                          key={highlight.title}
                          id={`industry-${slugify(item.role)}-${slugify(item.org)}-${slugify(item.period)}-${slugify(highlight.title)}`}
                          className={`role-slide ${
                            activeHighlightId ===
                            `industry-${slugify(item.role)}-${slugify(item.org)}-${slugify(item.period)}-${slugify(highlight.title)}`
                              ? "role-slide--active"
                              : ""
                          }`}
                        >
                          <h4 className="role-slide__title">{highlight.title}</h4>
                          <div className="role-slide__section">
                            <div className="role-slide__label">Technical goal</div>
                            <p className="role-slide__text">{highlight.goal}</p>
                          </div>
                          <div className="role-slide__section role-slide__section--result">
                            <div className="role-slide__label role-slide__label--result">Result</div>
                            <p className="role-slide__text">{highlight.outcome}</p>
                          </div>
                          <div className="tag-list">
                            {highlight.tools.map((tool) => (
                              <Tag key={tool} label={tool} tone={getToolTone(tool)} info={skillInfoByName[tool]} />
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </details>
              </Card>
            ))}
          </div>
        </Section>

        <Section id="research" title="Academic Experience">
          <div className="stack">
            {academic.map((item) => (
              <Card
                key={item.role + item.org}
                id={`academic-${slugify(item.role)}-${slugify(item.org)}-${slugify(item.period)}`}
                className="card--info"
              >
                <div className="experience">
                  <div>
                    <h3>{item.role}</h3>
                    <p className="muted">{item.org}</p>
                  </div>
                  <span className="eyebrow">{item.period}</span>
                </div>
                <details
                  className="experience-disclosure"
                  open={Boolean(openExperienceKeys[`academic-${slugify(item.role)}-${slugify(item.org)}-${slugify(item.period)}`])}
                >
                  <summary
                    className="experience-disclosure__summary"
                    onClick={(event) => {
                      event.preventDefault();
                      setExperienceOpen(
                        `academic-${slugify(item.role)}-${slugify(item.org)}-${slugify(item.period)}`
                      );
                    }}
                  >
                    <span className="experience-disclosure__icon" aria-hidden="true">
                      ✦
                    </span>
                    <span className="experience-disclosure__body">
                      <span className="experience-disclosure__title">Explore project details</span>
                      <span className="experience-disclosure__copy">
                        {item.highlights.length} case snapshots showing what I built and what it achieved
                      </span>
                    </span>
                    <span className="experience-disclosure__chevron" aria-hidden="true">
                      ↘
                    </span>
                  </summary>
                  <div className="role-carousel-shell">
                    <div className="role-carousel-shell__controls">
                      <button
                        className="carousel-button carousel-button--small"
                        type="button"
                        onClick={() =>
                          scrollRoleCarousel(
                            `academic-${slugify(item.role)}-${slugify(item.org)}-${slugify(item.period)}`,
                            "prev"
                          )
                        }
                      >
                        ←
                      </button>
                      <button
                        className="carousel-button carousel-button--small"
                        type="button"
                        onClick={() =>
                          scrollRoleCarousel(
                            `academic-${slugify(item.role)}-${slugify(item.org)}-${slugify(item.period)}`,
                            "next"
                          )
                        }
                      >
                        →
                      </button>
                    </div>
                    <div
                      ref={(node) => {
                        roleCarouselRefs.current[
                          `academic-${slugify(item.role)}-${slugify(item.org)}-${slugify(item.period)}`
                        ] = node;
                      }}
                      className="role-carousel"
                    >
                      {item.highlights.map((highlight) => (
                        <div
                          key={highlight.title}
                          id={`academic-${slugify(item.role)}-${slugify(item.org)}-${slugify(item.period)}-${slugify(highlight.title)}`}
                          className={`role-slide ${
                            activeHighlightId ===
                            `academic-${slugify(item.role)}-${slugify(item.org)}-${slugify(item.period)}-${slugify(highlight.title)}`
                              ? "role-slide--active"
                              : ""
                          }`}
                        >
                          <h4 className="role-slide__title">{highlight.title}</h4>
                          <div className="role-slide__section">
                            <div className="role-slide__label">Technical goal</div>
                            <p className="role-slide__text">{highlight.goal}</p>
                          </div>
                          <div className="role-slide__section role-slide__section--result">
                            <div className="role-slide__label role-slide__label--result">Result</div>
                            <p className="role-slide__text">{highlight.outcome}</p>
                          </div>
                          <div className="tag-list">
                            {highlight.tools.map((tool) => (
                              <Tag key={tool} label={tool} tone={getToolTone(tool)} info={skillInfoByName[tool]} />
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </details>
              </Card>
            ))}
          </div>
        </Section>

        <Section id="contact" title="Contact">
          <Card className="card--info card--contact">
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
                    <a
                      key={item.label}
                      className="icon-link"
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={item.label}
                      title={item.label}
                    >
                      <SocialIcon label={item.label} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </Section>
      </section>
    </main>
  );
}
