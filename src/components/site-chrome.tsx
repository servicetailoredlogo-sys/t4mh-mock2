import { Link } from "@tanstack/react-router";
import { Menu, Play, X } from "lucide-react";
import { useState } from "react";
import type { ReactNode } from "react";

import logoAsset from "../assets/t4mh-logo.png.asset.json";

const links = [
  { label: "Home", to: "/" },
  { label: "Music", to: "/music" },
  { label: "About", to: "/about" },
  { label: "Usage", to: "/usage" },
  { label: "Contact", to: "/contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return <header className="site-header">
    <Link to="/" className="brand" aria-label="T4MH Music home"><img src={logoAsset.url} alt="T4MH Music" /></Link>
    <nav className={open ? "open" : ""} aria-label="Primary navigation">
      {links.map((link) => <Link key={link.to} to={link.to} onClick={() => setOpen(false)} activeProps={{ className: "active" }}>{link.label}</Link>)}
    </nav>
    <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? <X /> : <Menu />}</button>
    <Link className="header-listen" to="/music"><Play size={12} fill="currentColor" /> Listen</Link>
  </header>;
}

export function SiteFooter() {
  return <footer>
    <Link to="/"><img src={logoAsset.url} alt="T4MH Music" /></Link>
    <p>Original music. Human feeling.</p>
    <span>© 2026 T4MH Music</span>
  </footer>;
}

export function InnerHero({ number, eyebrow, title, italic, lede }: { number: string; eyebrow: string; title: string; italic: string; lede: string }) {
  return <section className="inner-hero">
    <div className="staff staff-one"><i/><i/><i/><i/><i/></div>
    <div className="inner-index">{number}</div>
    <div className="inner-hero-content">
      <p className="eyebrow">{eyebrow} · {number}</p>
      <h1>{title}<br/><em>{italic}</em></h1>
      <p>{lede}</p>
    </div>
  </section>;
}

export function PageShell({ children }: { children: ReactNode }) {
  return <main><SiteHeader />{children}<SiteFooter /></main>;
}