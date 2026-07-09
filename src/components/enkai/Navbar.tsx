import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle, Mail } from "lucide-react";
import logo from "@/assets/logo.jpg";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SOCIAL_LINKS } from "@/lib/socialLinks";


const links = [
  { label: "Home", href: "#home", type: "anchor" as const },
  { label: "About", href: "/about", type: "route" as const },
  { label: "Portfolio", href: "/portfolio", type: "route" as const },
  { label: "Contact", href: "#contact", type: "anchor" as const },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const onHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleAnchor = (e: React.MouseEvent, href: string) => {
    if (!onHome) return;
    e.preventDefault();
    const id = href.slice(1);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const closeMenu = () => setMenuOpen(false);

  const logoSize = scrolled ? 44 : 56;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || menuOpen
          ? "bg-navy/70 backdrop-blur-xl py-3 border-b border-gold/10"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-3 group" onClick={closeMenu}>
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

        <DropdownMenu>
          <DropdownMenuTrigger
            asChild
            className="hidden md:inline-flex items-center gap-2 font-ui text-[12px] tracking-[0.2em] uppercase text-gold border border-gold/40 px-4 py-2 hover:bg-gold/10 transition-colors"
          >
            <button type="button" aria-label="Let's Talk">
              Let's Talk
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-44">
            <DropdownMenuItem asChild>
              <a
                href={SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2"
              >
                <MessageCircle size={16} />
                WhatsApp
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <a
                href="mailto:hello@enkaisocial.in"
                className="flex items-center gap-2"
              >
                <Mail size={16} />
                Mail
              </a>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>


        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="md:hidden flex items-center justify-center w-11 h-11 -mr-2 text-parchment hover:text-gold transition-colors"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden border-t border-gold/10"
          >
            <nav className="flex flex-col gap-1 px-6 py-6">
              {links.map((l, i) => {
                if (l.type === "route") {
                  return (
                    <motion.div
                      key={l.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * i + 0.05, duration: 0.3 }}
                    >
                      <Link
                        to={l.href}
                        onClick={closeMenu}
                        className="block py-3 font-ui text-[15px] tracking-[0.15em] uppercase text-parchment/85 hover:text-gold transition-colors"
                        activeProps={{ className: "text-gold" }}
                      >
                        {l.label}
                      </Link>
                    </motion.div>
                  );
                }
                if (!onHome) {
                  return (
                    <motion.div
                      key={l.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * i + 0.05, duration: 0.3 }}
                    >
                      <Link
                        to="/"
                        hash={l.href.slice(1)}
                        onClick={closeMenu}
                        className="block py-3 font-ui text-[15px] tracking-[0.15em] uppercase text-parchment/85 hover:text-gold transition-colors"
                      >
                        {l.label}
                      </Link>
                    </motion.div>
                  );
                }
                return (
                  <motion.div
                    key={l.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i + 0.05, duration: 0.3 }}
                  >
                    <a
                      href={l.href}
                      onClick={(e) => {
                        handleAnchor(e, l.href);
                        closeMenu();
                      }}
                      className="block py-3 font-ui text-[15px] tracking-[0.15em] uppercase text-parchment/85 hover:text-gold transition-colors"
                    >
                      {l.label}
                    </a>
                  </motion.div>
                );
              })}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * links.length + 0.05, duration: 0.3 }}
                className="mt-4"
              >
                <DropdownMenu>
                  <DropdownMenuTrigger
                    asChild
                    className="inline-flex items-center justify-center gap-2 font-ui text-[13px] tracking-[0.2em] uppercase text-gold border border-gold/40 px-4 py-3 hover:bg-gold/10 transition-colors"
                  >
                    <button type="button" aria-label="Let's Talk" onClick={closeMenu}>
                      Let's Talk
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-44">
                    <DropdownMenuItem asChild>
                      <a
                        href={SOCIAL_LINKS.whatsapp}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2"
                        onClick={closeMenu}
                      >
                        <MessageCircle size={16} />
                        WhatsApp
                      </a>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <a
                        href="mailto:hello@enkaisocial.in"
                        className="flex items-center gap-2"
                        onClick={closeMenu}
                      >
                        <Mail size={16} />
                        Mail
                      </a>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </motion.div>

            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
