import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";

const links = [
  { label: "Home", href: "#home", type: "anchor" as const },
  { label: "About", href: "#about", type: "anchor" as const },
  { label: "Portfolio", href: "/portfolio", type: "route" as const },
  { label: "Contact", href: "#contact", type: "anchor" as const },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const onHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleAnchor = (e: React.MouseEvent, href: string) => {
    if (!onHome) return; // let route take over via Link on non-home pages
    e.preventDefault();
    const id = href.slice(1);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-navy/70 backdrop-blur-xl py-3 border-b border-gold/10"
          : "bg-transparent py-6"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-3 group">
          <span className="grid h-9 w-9 place-items-center rounded-full border border-gold/40 text-gold font-heading text-lg group-hover:border-gold group-hover:shadow-[0_0_18px_rgba(212,175,55,0.4)] transition-all">
            E
          </span>
          <span className="font-heading text-lg tracking-[0.18em] text-parchment">
            ENKAI<span className="text-gold"> · </span>SOCIAL
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => {
            if (l.type === "route") {
              return (
                <Link
                  key={l.label}
                  to={l.href}
                  className="font-ui text-[13px] tracking-[0.2em] uppercase text-parchment/80 hover:text-gold transition-colors relative"
                  activeProps={{ className: "text-gold" }}
                >
                  {l.label}
                </Link>
              );
            }
            if (!onHome) {
              return (
                <Link
                  key={l.label}
                  to="/"
                  hash={l.href.slice(1)}
                  className="font-ui text-[13px] tracking-[0.2em] uppercase text-parchment/80 hover:text-gold transition-colors"
                >
                  {l.label}
                </Link>
              );
            }
            return (
              <a
                key={l.label}
                href={l.href}
                onClick={(e) => handleAnchor(e, l.href)}
                className="font-ui text-[13px] tracking-[0.2em] uppercase text-parchment/80 hover:text-gold transition-colors"
              >
                {l.label}
              </a>
            );
          })}
        </nav>

        <a
          href="mailto:hello@enkaisocial.in"
          className="hidden md:inline-flex items-center gap-2 font-ui text-[12px] tracking-[0.2em] uppercase text-gold border border-gold/40 px-4 py-2 hover:bg-gold/10 transition-colors"
        >
          Let's Talk
        </a>
      </div>
    </header>
  );
}
