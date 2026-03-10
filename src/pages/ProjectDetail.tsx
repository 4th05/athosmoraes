import React, { useMemo } from "react";
import { projects } from "../data/site";
import { Card } from "../components/Card";
import { Tag } from "../components/Tag";

const withBase = (path: string) => `${import.meta.env.BASE_URL}${path}`;

type ProjectDetailProps = {
  slug: string;
  homeHref: string;
};

export default function ProjectDetail({ slug, homeHref }: ProjectDetailProps) {
  const project = projects.find((item) => item.slug === slug);

  const heroImage = useMemo(() => (project ? withBase(project.image) : ""), [project]);

  if (!project) {
    return (
      <div className="page-simple">
        <Card>
          <h1>Project not found</h1>
          <p>We couldn’t find this project.</p>
          <a className="text-link" href={homeHref}>Back to home →</a>
        </Card>
      </div>
    );
  }

  return (
    <div className="page-simple">
      <div className="detail-header">
        <a className="text-link" href={homeHref}>← Back</a>
        <span className="eyebrow">{project.year}</span>
      </div>

      <Card className="detail-hero">
        <img src={heroImage} alt={project.title} className="detail-hero__image" />
        <div className="detail-hero__content">
          <h1>{project.title}</h1>
          <p className="muted">{project.summary}</p>
          <div className="tag-list">
            {project.tags.map((tag) => (
              <Tag key={tag} label={tag} />
            ))}
          </div>
        </div>
      </Card>

      <div className="detail-sections">
        {project.sections.map((section) => (
          <Card key={section.title} className="detail-card">
            <h3>{section.title}</h3>
            {section.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {section.bullets && section.bullets.length > 0 ? (
              <ul className="list detail-list">
                {section.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            ) : null}
            {section.images && section.images.length > 0 ? (
              <div className="detail-images">
                {section.images.map((img) => (
                  <img key={img.src} src={withBase(img.src)} alt={img.alt} />
                ))}
              </div>
            ) : null}
            {section.note ? <p className="detail-note">{section.note}</p> : null}
          </Card>
        ))}
      </div>
    </div>
  );
}
