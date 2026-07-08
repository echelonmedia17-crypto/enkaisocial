import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import pf1 from "@/assets/pf-1.jpg";
import pf2 from "@/assets/pf-2.jpg";
import pf3 from "@/assets/pf-3.jpg";
import pf4 from "@/assets/pf-4.jpg";
import pf5 from "@/assets/pf-5.jpg";
import pf6 from "@/assets/pf-6.jpg";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Enkai Social" },
      {
        name: "description",
        content:
          "Selected live-event coverage by Enkai Social — galas, summits, festivals, launches and press days across India.",
      },
      { property: "og:title", content: "Portfolio — Enkai Social" },
      {
        property: "og:description",
        content:
          "Selected live-event coverage by Enkai Social — cinematic real-time storytelling across India.",
      },
    ],
  }),
  component: Portfolio,
});

/* ─────────────────────────────────────────────
   DATA
   ───────────────────────────────────────────── */

type CardSize = "hero" | "tall" | "wide" | "square" | "small";
type RowAnim = "fade-up" | "slide-left" | "slide-right" | "scale-in";

type Item = {
  img: string;
  title: string;
  location: string;
  year: string;
  cat: string;
  size: CardSize;
  row: number;
  description: string;
};

const categories = [
  "All",
  "Corporate",
  "Weddings",
  "Concerts",
  "Launches",
  "Awards",
  "Influencers",
  "Luxury",
] as const;

const allItems: Item[] = [
  {
    img: portfolio1,
    title: "DAV United Festival",
    location: "New Delhi",
    year: "2025",
    cat: "Concerts",
    size: "hero",
    row: 0,
    description:
      "A three-day cultural spectacle bringing together 15,000 attendees across music, art, and dialogue. We captured every stage, every standing ovation, and every backstage whisper — published to the feed before the applause faded.",
  },
  {
    img: pf3,
    title: "Screen Awards Night",
    location: "Mumbai",
    year: "2025",
    cat: "Awards",
    size: "tall",
    row: 0,
    description:
      "India's most glamorous awards night, reimagined as a real-time social narrative. From the red carpet arrivals to the final encore, every frame was shot, cut, and live-published within minutes.",
  },
  {
    img: pf2,
    title: "Sangeet Ceremony",
    location: "Udaipur",
    year: "2024",
    cat: "Weddings",
    size: "square",
    row: 0,
    description:
      "A lakeside sangeet under a canopy of marigolds and fairy lights. We documented the choreography, the laughter, and the once-in-a-lifetime moments with cinematic precision.",
  },
  {
    img: portfolio2,
    title: "Leadership Summit",
    location: "New Delhi",
    year: "2025",
    cat: "Corporate",
    size: "wide",
    row: 1,
    description:
      "A flagship corporate summit gathering 200+ industry leaders. Keynotes, panel discussions, and networking moments captured and amplified across social platforms in real time.",
  },
  {
    img: pf1,
    title: "Runway Debut",
    location: "Mumbai",
    year: "2025",
    cat: "Launches",
    size: "hero",
    row: 1,
    description:
      "A high-fashion runway launch where every silhouette was a story. We translated the couture into a social-first visual language — bold, editorial, and instantly shareable.",
  },
  {
    img: pf4,
    title: "Stadium Finale",
    location: "Hyderabad",
    year: "2024",
    cat: "Concerts",
    size: "small",
    row: 1,
    description:
      "A stadium-scale concert finale with 40,000 fans on their feet. The energy was deafening, the lights were blinding, and we were in the thick of it — streaming the story as it unfolded.",
  },
  {
    img: pf5,
    title: "Club Launch Night",
    location: "Mumbai",
    year: "2025",
    cat: "Launches",
    size: "tall",
    row: 2,
    description:
      "An exclusive nightclub launch in the heart of the city. Bottle service, neon lights, and a guest list that read like a who's-who of the scene — all captured in a single electric night.",
  },
  {
    img: pf6,
    title: "Product Reveal",
    location: "Bengaluru",
    year: "2025",
    cat: "Corporate",
    size: "wide",
    row: 2,
    description:
      "A tech-industry product reveal with a cinematic stage design. We captured the countdown, the curtain drop, and the hands-on demos — delivering a content package that launched alongside the product.",
  },
  {
    img: hero1,
    title: "Influencer Meet & Greet",
    location: "Goa",
    year: "2024",
    cat: "Influencers",
    size: "square",
    row: 2,
    description:
      "An intimate creator-economy gathering by the beach. We documented the collaborations, the conversations, and the content that was born in real time — a masterclass in community-driven storytelling.",
  },
  {
    img: hero2,
    title: "Luxury Auto Showcase",
    location: "Mumbai",
    year: "2025",
    cat: "Luxury",
    size: "hero",
    row: 3,
    description:
      "A private unveiling of a limited-edition hypercar. Every curve was lit like a museum piece, every detail captured with the reverence it deserved — a visual love letter to automotive artistry.",
  },
  {
    img: hero3,
    title: "Gala Charity Dinner",
    location: "New Delhi",
    year: "2025",
    cat: "Awards",
    size: "small",
    row: 3,
    description:
      "A black-tie charity gala raising funds for education. We captured the generosity, the speeches, and the quiet moments of connection that made the evening unforgettable.",
  },
  {
    img: hero4,
    title: "Brand Ambassador Shoot",
    location: "Jaipur",
    year: "2024",
    cat: "Influencers",
    size: "tall",
    row: 3,
    description:
      "A two-day brand ambassador shoot in the palaces of Jaipur. We blended heritage architecture with modern brand storytelling — a cross-platform content package that felt both timeless and now.",
  },
];

/* ─────────────────────────────────────────────
   LAYOUT CONFIG
   ───────────────────────────────────────────── */

const sizeClasses: Record<CardSize, string> = {
  hero: "md:col-span-8 md:row-span-2 aspect-[16/10] md:aspect-auto md:h-full",
  tall: "md:col-span-4 md:row-span-2 aspect-[3/4] md:aspect-auto md:h-full",
  wide: "md:col-span-6 aspect-[16/9]",
  square: "md:col-span-4 aspect-square",
  small: "md:col-span-4 aspect-[4/3]",
};

const rowAnimConfig: Record<number, RowAnim> = {
  0: "fade-up",
  1: "slide-left",
  2: "slide-right",
  3: "scale-in",
};

function getAnimVariant(anim: RowAnim) {
  switch (anim) {
    case "fade-up":
      return {
        initial: { opacity: 0, y: 40 },
        whileInView: { opacity: 1, y: 0 },
      };
    case "slide-left":
      return {
        initial: { opacity: 0, x: -60 },
        whileInView: { opacity: 1, x: 0 },
      };
    case "slide-right":
      return {
        initial: { opacity: 0, x: 60 },
        whileInView: { opacity: 1, x: 0 },
      };
    case "scale-in":
      return {
        initial: { opacity: 0, scale: 0.92 },
        whileInView: { opacity: 1, scale: 1 },
      };
  }
}

/* ─────────────────────────────────────────────
   PARALLAX HOOK
   ───────────────────────────────────────────── */

function useScrollParallax() {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const dist = center - window.innerHeight / 2;
        setOffset(dist * -0.05);
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return { ref, offset };
}

/* ─────────────────────────────────────────────
   PORTFOLIO CARD
   ───────────────────────────────────────────── */

function PortfolioCard({
  item,
  index,
  onOpen,
}: {
  item: Item;
  index: number;
  onOpen: (i: number) => void;
}) {
  const anim = rowAnimConfig[item.row] ?? "fade-up";
  const variant = getAnimVariant(anim);
  const isLarge = item.size === "hero" || item.size === "tall";

  return (
    <motion.div
      layout
      {...variant}
      viewport={{ once: false, margin: "-80px" }}
      transition={{
        duration: 0.8,
        delay: (index % 3) * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`group relative overflow-hidden cursor-pointer ${sizeClasses[item.size]}`}
      style={{
        borderRadius: "22px",
        animation: `floatY 7s ease-in-out infinite`,
        animationDelay: `${index * 0.5}s`,
      }}
      onClick={() => onOpen(index)}
    >
      {/* Image with parallax zoom */}
      <div className="absolute inset-0 overflow-hidden" style={{ borderRadius: "22px" }}>
        <img
          src={item.img}
          alt={item.title}
          loading="lazy"
          className="h-full w-full object-cover transition-all duration-[1200ms] ease-out group-hover:scale-[1.05] group-hover:brightness-110"
          style={{ filter: "brightness(0.82)" }}
        />
      </div>

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          borderRadius: "22px",
          background:
            "linear-gradient(180deg, rgba(1,34,60,0.15) 0%, rgba(1,34,60,0.4) 50%, rgba(1,34,60,0.95) 100%)",
          opacity: 0.85,
        }}
      />

      {/* Hover burgundy glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          borderRadius: "22px",
          boxShadow: "inset 0 0 60px rgba(128,0,32,0.4), 0 0 50px rgba(128,0,32,0.25)",
        }}
      />

      {/* Gold border on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          borderRadius: "22px",
          border: "1px solid rgba(212,175,55,0.6)",
        }}
      />

      {/* Content */}
      <div className="absolute inset-x-0 bottom-0 p-6 md:p-7 transition-transform duration-500 ease-out group-hover:-translate-y-1">
        <span className="font-ui text-[10px] tracking-[0.35em] uppercase text-gold/90">
          {item.cat}
        </span>
        <h3
          className={`font-heading text-parchment mt-2 leading-[1.15] ${
            isLarge ? "text-2xl md:text-3xl" : "text-xl"
          }`}
        >
          {item.title}
        </h3>
        <div className="flex items-center gap-2 mt-2">
          <span className="font-ui text-[12px] text-parchment/60">{item.location}</span>
          <span className="text-parchment/30 text-[10px]">●</span>
          <span className="font-ui text-[12px] text-parchment/60">{item.year}</span>
        </div>
      </div>

      {/* Premium shadow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          borderRadius: "22px",
          boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
        }}
      />
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   LIGHTBOX
   ───────────────────────────────────────────── */

function Lightbox({
  items,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  items: Item[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const item = items[index];
  if (!item) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10"
      style={{ backdropFilter: "blur(20px)", background: "rgba(1,34,60,0.88)" }}
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="absolute top-5 right-5 md:top-8 md:right-8 z-10 w-11 h-11 rounded-full border border-gold/30 text-parchment/70 hover:text-gold hover:border-gold transition-all flex items-center justify-center"
        aria-label="Close"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M2 2L14 14M14 2L2 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>

      {/* Prev / Next */}
      {items.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            className="absolute left-3 md:left-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full border border-gold/30 text-parchment/70 hover:text-gold hover:border-gold transition-all flex items-center justify-center"
            aria-label="Previous"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M11 2L4 9L11 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            className="absolute right-3 md:right-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full border border-gold/30 text-parchment/70 hover:text-gold hover:border-gold transition-all flex items-center justify-center"
            aria-label="Next"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M7 2L14 9L7 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </>
      )}

      {/* Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative max-w-5xl w-full grid md:grid-cols-2 gap-0 overflow-hidden"
          style={{
            borderRadius: "24px",
            background: "rgba(1,34,60,0.6)",
            border: "1px solid rgba(212,175,55,0.15)",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Image */}
          <div className="relative aspect-[4/5] md:aspect-auto md:h-[600px] overflow-hidden">
            <img
              src={item.img}
              alt={item.title}
              className="h-full w-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, transparent 60%, rgba(1,34,60,0.8))",
              }}
            />
          </div>

          {/* Details */}
          <div className="flex flex-col justify-center p-8 md:p-12">
            <span className="font-ui text-[10px] tracking-[0.4em] uppercase text-gold">
              {item.cat}
            </span>
            <h2 className="font-heading text-3xl md:text-4xl text-parchment mt-4 leading-[1.1]">
              {item.title}
            </h2>
            <div className="flex items-center gap-3 mt-3">
              <span className="font-ui text-sm text-parchment/60">{item.location}</span>
              <span className="text-parchment/30 text-[10px]">●</span>
              <span className="font-ui text-sm text-parchment/60">{item.year}</span>
            </div>
            <div className="h-px w-16 bg-gold/30 mt-6" />
            <p className="justify-pretty mt-6 text-parchment/70 leading-[1.8]">
              {item.description}
            </p>
            <div className="mt-8 flex items-center gap-2 text-parchment/40 text-[11px] tracking-[0.2em] uppercase font-ui">
              <span>{index + 1}</span>
              <span className="h-px flex-1 bg-parchment/10" />
              <span>{items.length}</span>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   PORTFOLIO PAGE
   ───────────────────────────────────────────── */

function Portfolio() {
  const [cat, setCat] = useState<string>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const { ref, offset } = useScrollParallax();

  const filtered =
    cat === "All" ? allItems : allItems.filter((i) => i.cat === cat);

  const openLightbox = useCallback((i: number) => setLightboxIndex(i), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const prevLightbox = useCallback(
    () => setLightboxIndex((p) => (p === null ? null : (p - 1 + filtered.length) % filtered.length)),
    [filtered.length],
  );
  const nextLightbox = useCallback(
    () => setLightboxIndex((p) => (p === null ? null : (p + 1) % filtered.length)),
    [filtered.length],
  );

  // ESC to close lightbox + arrow navigation
  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prevLightbox();
      if (e.key === "ArrowRight") nextLightbox();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightboxIndex, closeLightbox, prevLightbox, nextLightbox]);

  // Group items by row for editorial layout
  const rows = Array.from(new Set(filtered.map((i) => i.row))).sort();
  const itemsByRow = rows.map((r) => filtered.filter((i) => i.row === r));

  // Flatten with global index for lightbox
  let globalIndex = 0;

  return (
    <div className="relative bg-navy pt-40 pb-32 min-h-screen overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 radial-gold-glow opacity-30 pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 900px 500px at 80% 20%, rgba(128,0,32,0.12), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* ─── Header ─── */}
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-burgundy-bright" />
          <span className="font-ui text-[11px] tracking-[0.4em] uppercase text-burgundy-bright">
            From Our Portfolio
          </span>
        </div>
        <h1 className="mt-6 font-heading text-5xl md:text-7xl leading-[1.02] text-parchment max-w-4xl">
          Every event we've been{" "}
          <em className="italic text-parchment/60">inside.</em>
        </h1>
        <p className="justify-pretty mt-8 max-w-2xl text-parchment/70">
          A living archive of the rooms we've stood in, the stages we've circled,
          and the moments we've moved from the venue to the feed — in real time.
        </p>

        {/* ─── Filter Chips ─── */}
        <div className="mt-16 flex flex-wrap gap-3">
          {categories.map((c) => {
            const active = c === cat;
            return (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`font-ui text-[11px] tracking-[0.25em] uppercase px-5 py-2.5 rounded-full border transition-all duration-300 ${
                  active
                    ? "bg-burgundy border-burgundy text-white shadow-[0_0_20px_rgba(128,0,32,0.5)] scale-105"
                    : "border-gold/20 text-parchment/60 hover:border-gold/60 hover:text-gold hover:scale-105 hover:shadow-[0_0_15px_rgba(212,175,55,0.2)]"
                }`}
              >
                {c}
              </button>
            );
          })}
        </div>

        {/* ─── Editorial Gallery ─── */}
        <div ref={ref} className="mt-20 space-y-8 md:space-y-12">
          <AnimatePresence mode="popLayout">
            {rows.map((rowKey) => {
              const rowItems = itemsByRow[rows.indexOf(rowKey)] ?? [];
              if (rowItems.length === 0) return null;

              return (
                <motion.div
                  key={`${cat}-${rowKey}`}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8"
                  style={{
                    gridAutoRows: "minmax(280px, auto)",
                  }}
                >
                  {rowItems.map((item) => {
                    const idx = globalIndex++;
                    return (
                      <PortfolioCard
                        key={`${item.title}-${cat}`}
                        item={item}
                        index={idx}
                        onOpen={openLightbox}
                      />
                    );
                  })}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* ─── Footer note ─── */}
        <div className="mt-24 flex items-center gap-4">
          <span className="h-px flex-1 hairline-gold" />
          <span className="font-ui text-[10px] tracking-[0.4em] uppercase text-parchment/40">
            End of Archive
          </span>
          <span className="h-px flex-1 hairline-gold" />
        </div>
      </div>

      {/* ─── Lightbox ─── */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            items={filtered}
            index={lightboxIndex}
            onClose={closeLightbox}
            onPrev={prevLightbox}
            onNext={nextLightbox}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
