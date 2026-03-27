import React, { useMemo } from "react";
import { thesis } from "../data/site";
import { Card } from "../components/Card";
import { Tag } from "../components/Tag";
import { DetailImageGallery } from "../components/DetailImageGallery";
import { WarningBanner } from "../components/WarningBanner";

const withBase = (path: string) => `${import.meta.env.BASE_URL}${path}`;

type ThesisDetailProps = {
  homeHref: string;
};

export default function ThesisDetail({ homeHref }: ThesisDetailProps) {
  const heroImage = useMemo(() => withBase(thesis.image), []);

  return (
    <div className="page-simple">
      <div className="detail-header">
        <a className="text-link" href={homeHref}>← Back</a>
        <span className="eyebrow">{thesis.year}</span>
      </div>

      <WarningBanner>
        <p>
          Computer science moves at a breathtaking pace. Work that was cutting-edge a few years, or even months, ago
          can already be obsolete. The projects in this portfolio are shared as snapshots of my skills, my persistence
          in tackling open problems, and my ingenuity in finding workable solutions. They are not meant to imply I am
          still defined by those exact stacks.
        </p>
      </WarningBanner>

      <Card className="detail-hero">
        <img src={heroImage} alt={thesis.title} className="detail-hero__image" />
        <div className="detail-hero__content">
          <h1>{thesis.title}</h1>
          <p className="muted">{thesis.summary}</p>
          <div className="tag-list">
            <Tag label="Computational Pathology" />
            <Tag label="Computer Vision" />
            <Tag label="NLP" />
            <Tag label="RAG" />
            <Tag label="LLMs" />
          </div>
        </div>
      </Card>

      <div className="detail-sections">
        {thesis.sections.map((section) => (
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
              <DetailImageGallery
                images={section.images.map((img) => ({ src: withBase(img.src), alt: img.alt }))}
              />
            ) : null}
            {section.note ? <p className="detail-note">{section.note}</p> : null}
          </Card>
        ))}
      </div>
    </div>
  );
}
