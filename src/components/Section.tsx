import React from "react";

type SectionProps = {
  id?: string;
  title: string;
  children: React.ReactNode;
  subtitle?: string;
};

export function Section({ id, title, subtitle, children }: SectionProps) {
  return (
    <section id={id} className="section">
      <div className="section__header">
        <h2>{title}</h2>
        {subtitle ? <p className="section__subtitle">{subtitle}</p> : null}
      </div>
      <div className="section__content">{children}</div>
    </section>
  );
}
