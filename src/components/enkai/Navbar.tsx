import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.jpg";

const links = [
  { label: "Home", href: "#home", type: "anchor" as const },
  { label: "About", href: "#about", type: "anchor" as const },
  { label: "Portfolio", href: "/portfolio", type: "route" as const },
  { label: "Contact", href: "#contact", type: "anchor" as const },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const onHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleAnchor = (e: React.MouseEvent, href: string) => {
    if (!onHome) return;
    e.preventDefault();
    const id = href.slice(1);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const closeMobile = () => setMobileOpen(false);

  const handleMobileAnchor = (href: string) => {
    closeMobile();
    if (!onHome) return;
    const id = href.slice(1);
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  const logoSize = scrolled ? 44 : 56;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-navy/70 backdrop-blur-xl py-3 border-b border-gold/10"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-3 group">
          <motion.span
            initial={{ opacity: 0, scale: 0.8, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.08, rotate: 3 }}
            style={{ width: logoSize, height: logoSize }}
            className="relative inline-block rounded-full transition-[width,height] duration-500"
          >
            <span
              aria-hidden
              className="absolute inset-[-8px] rounded-full blur-xl opacity-70"
              style={{
                background:
                  "radial-gradient(circle, rgba(212,175,55,0.35), rgba(128,0,32,0.25) 55%, transparent 75%)",
              }}
            />
            <span className="relative block h-full w-full rounded-full overflow-hidden border border-white/40 bg-white/5 backdrop-blur-md shadow-[0_4px_24px_rgba(1,42,74,0.5)] group-hover:shadow-[0_0_28px_rgba(212,175,55,0.55)] transition-shadow duration-500">
              <img
                src={logo}
                alt="Enkai Social"
                className="h-full w-full object-cover"
                draggable={false}
              />
            </span>
          </motion.span>
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

        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center text-parchment"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden bg-navy/95 backdrop-blur-xl border-b border-gold/10"
          >
            <nav className="flex flex-col gap-1 px-6 py-6">
              {links.map((l) => {
                if (l.type === "route") {
                  return (
                    <Link
                      key={l.label}
                      to={l.href}
                      onClick={closeMobile}
                      className="font-ui text-sm tracking-[0.2em] uppercase text-parchment/80 hover:text-gold transition-colors py-3 border-b border-gold/5"
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
                      onClick={closeMobile}
                      className="font-ui text-sm tracking-[0.2em] uppercase text-parchment/80 hover:text-gold transition-colors py-3 border-b border-gold/5"
                    >
                      {l.label}
                    </Link>
                  );
                }
                return (
                  <a
                    key={l.label}
                    href={l.href}
                    onClick={() => handleMobileAnchor(l.href)}
                    className="font-ui text-sm tracking-[0.2em] uppercase text-parchment/80 hover:text-gold transition-colors py-3 border-b border-gold/5"
                  >
                    {l.label}
                  </a>
                );
              })}
              <a
                href="mailto:hello@enkaisocial.in"
                onClick={closeMobile}
                className="mt-4 inline-flex items-center justify-center gap-2 font-ui text-[12px] tracking-[0.2em] uppercase text-gold border border-gold/40 px-4 py-3 hover:bg-gold/10 transition-colors"
              >
                Let's Talk
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
