import React from "react";
import type { SkillInfo } from "../data/skillInfo";

type TagProps = {
  label: string;
  tone?: "default" | "blue" | "teal" | "amber" | "violet" | "slate";
  info?: SkillInfo;
};

export function Tag({ label, tone = "default", info }: TagProps) {
  if (!info) {
    return <span className={`tag tag--${tone}`}>{label}</span>;
  }

  return (
    <span className="tag-tooltip" tabIndex={0}>
      <span className={`tag tag--${tone}`}>{label}</span>
      <span className="tag-tooltip__popover" role="tooltip">
        <span className="tag-tooltip__name">{info.name}</span>
        <span className="tag-tooltip__meta">{info.category}</span>
        <span className="tag-tooltip__copy">{info.use}</span>
        <a className="tag-tooltip__link" href={info.href} target="_blank" rel="noreferrer">
          Learn more
        </a>
      </span>
    </span>
  );
}
