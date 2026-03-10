import React, { useEffect, useState } from "react";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";
import ThesisDetail from "./pages/ThesisDetail";
import { profile } from "./data/site";

const THEME_STORAGE_KEY = "athos-theme-v3";
const LEGACY_THEME_KEYS = ["theme", "athos-theme-v2"] as const;

type AppRoute =
  | { kind: "home"; section?: string }
  | { kind: "project"; slug: string }
  | { kind: "thesis" };

function parseRoute(hash: string): AppRoute {
  const normalized = hash.replace(/^#/, "");

  if (normalized.startsWith("/projects/")) {
    const slug = decodeURIComponent(normalized.slice("/projects/".length));
    return slug ? { kind: "project", slug } : { kind: "home" };
  }

  if (normalized === "/thesis") {
    return { kind: "thesis" };
  }

  const section = normalized && !normalized.startsWith("/") ? normalized : undefined;
  return { kind: "home", section };
}

function useHashRoute() {
  const [route, setRoute] = useState<AppRoute>(() => parseRoute(window.location.hash));

  useEffect(() => {
    const syncRoute = () => setRoute(parseRoute(window.location.hash));
    window.addEventListener("hashchange", syncRoute);
    return () => window.removeEventListener("hashchange", syncRoute);
  }, []);

  return route;
}

function useTheme() {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
    return stored === "light" || stored === "dark" ? stored : "dark";
  });

  useEffect(() => {
    LEGACY_THEME_KEYS.forEach((key) => window.localStorage.removeItem(key));
    const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
    if (stored === "dark" || stored === "light") {
      setTheme(stored);
      return;
    }
    setTheme("dark");
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", theme);
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  return { theme, setTheme };
}

export default function App() {
  const { theme, setTheme } = useTheme();
  const route = useHashRoute();

  useEffect(() => {
    if (route.kind === "project") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (route.kind === "thesis") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (!route.section) {
      return;
    }

    window.requestAnimationFrame(() => {
      document.getElementById(route.section ?? "")?.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  }, [route]);

  const homeHref = "#/";
  const buildProjectHref = (slug: string) => `#/projects/${encodeURIComponent(slug)}`;
  const thesisHref = "#/thesis";

  return (
    <div className="page">
      <header className="topbar">
        <div className="topbar__content">
          <a className="brand" href={homeHref}>
            <span className="brand__mark">AM</span>
            <span className="brand__title">{profile.name}</span>
          </a>
          <nav className="topbar__nav">
            <a href="#about">About</a>
            <a href="#projects">Cases</a>
            <a href="#publications">Publications</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
            <button
              className="theme-toggle"
              type="button"
              aria-label="Toggle theme"
              title="Toggle theme"
              onClick={() => {
                const nextTheme = theme === "dark" ? "light" : "dark";
                window.localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
                setTheme(nextTheme);
              }}
            >
              {theme === "dark" ? <span aria-hidden="true">☀️</span> : <span aria-hidden="true">🌙</span>}
            </button>
          </nav>
        </div>
      </header>

      {route.kind === "project" ? <ProjectDetail slug={route.slug} homeHref={homeHref} /> : null}
      {route.kind === "thesis" ? <ThesisDetail homeHref={homeHref} /> : null}
      {route.kind === "home" ? (
        <Home buildProjectHref={buildProjectHref} thesisHref={thesisHref} />
      ) : null}

      <footer className="footer">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>Built with React + Vite</span>
      </footer>
    </div>
  );
}
