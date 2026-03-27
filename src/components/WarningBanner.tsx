import React from "react";

type WarningBannerProps = {
  children: React.ReactNode;
};

export function WarningBanner({ children }: WarningBannerProps) {
  return (
    <div className="warning-banner" role="note">
      <svg
        className="warning-banner__icon"
        viewBox="0 0 24 24"
        aria-hidden="true"
        focusable="false"
      >
        <path
          d="M12 3.2 1.8 20.5a1.2 1.2 0 0 0 1.04 1.8h18.32a1.2 1.2 0 0 0 1.04-1.8L12 3.2z"
          fill="currentColor"
        />
        <path
          d="M12 8.4c.5 0 .9.4.9.9v5.6a.9.9 0 0 1-1.8 0V9.3c0-.5.4-.9.9-.9zM12 17.7a1.05 1.05 0 1 1 0 2.1 1.05 1.05 0 0 1 0-2.1z"
          fill="var(--bg)"
        />
      </svg>
      <div className="warning-banner__content">{children}</div>
    </div>
  );
}

