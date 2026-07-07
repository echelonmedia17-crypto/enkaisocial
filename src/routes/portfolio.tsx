import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";

import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import pf1 from "@/assets/pf-1.jpg";
import pf2 from "@/assets/pf-2.jpg";
import pf3 from "@/assets/pf-3.jpg";
import pf4 from "@/assets/pf-4.jpg";
import pf5 from "@/assets/pf-5.jpg";
import pf6 from "@/assets/pf-6.jpg";

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

const categories = ["All", "Cultural", "Corporate", "Weddings", "Launches", "Awards"];

type Item = {
  img: string;
  title: string;
  cat: string;
  h: number; // row-span
};

const items: Item[] = [
  { img: portfolio1, title: "DAV Cultural Fest", cat: "Cultural", h: 34 },
  { img: pf3, title: "Screen Awards Night", cat: "Awards", h: 40 },
  { img: pf2, title: "Sangeet · Delhi", cat: "Weddings", h: 26 },
  { img: portfolio2, title: "Leadership Summit", cat: "Corporate", h: 30 },
  { img: pf1, title: "Runway Debut", cat: "Launches", h: 44 },
  { img: pf4, title: "Stadium Finale", cat: "Cultural", h: 24 },
  { img: pf5, title: "Club Launch · Mumbai", cat: "Launches", h: 34 },
  { img: pf6, title: "Product Reveal", cat: "Corporate", h: 30 },
];

function Portfolio() {
  const [cat, setCat] = useState("All");
  const filtered = cat === "All" ? items : items.filter((i) => i.cat === cat);

  return (
    <div className="relative bg-navy pt-40 pb-32 min-h-screen">
      <div className="absolute inset-0 radial-gold-glow opacity-40 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-burgundy-bright" />
          <span className="font-ui text-[11px] tracking-[0.4em] uppercase text-burgundy-bright">
            The Archive
          </span>
        </div>
        <h1 className="mt-6 font-heading text-5xl md:text-7xl leading-[1.02] text-parchment max-w-4xl">
          Every event we've been <em className="italic text-parchment/60">inside.</em>
        </h1>
        <p className="justify-pretty mt-8 max-w-2xl text-parchment/70">
          A living archive of the rooms we've stood in, the stages we've circled, and
          the moments we've moved from the venue to the feed — in real time.
        </p>

        {/* filter chips */}
        <div className="mt-14 flex flex-wrap gap-3">
          {categories.map((c) => {
            const active = c === cat;
            return (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`font-ui text-[11px] tracking-[0.25em] uppercase px-5 py-2.5 rounded-full border transition-all ${
                  active
                    ? "bg-burgundy border-gold text-white shadow-[0_0_18px_rgba(212,175,55,0.35)]"
                    : "border-gold/30 text-parchment/70 hover:border-gold hover:text-gold"
                }`}
              >
                {c}
              </button>
            );
          })}
        </div>

        {/* masonry via CSS columns */}
        <div className="mt-16 columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:balance]">
          {filtered.map((it, i) => (
            <motion.figure
              key={it.title + cat}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: (i % 6) * 0.06 }}
              className="mb-6 break-inside-avoid group relative overflow-hidden rounded-xl border border-white/5"
            >
              <img
                src={it.img}
                alt={it.title}
                loading="lazy"
                className="w-full h-auto object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
                style={{ filter: "grayscale(20%) brightness(0.8)" }}
                onMouseEnter={(e) => (e.currentTarget.style.filter = "none")}
                onMouseLeave={(e) => (e.currentTarget.style.filter = "grayscale(20%) brightness(0.8)")}
              />
              <figcaption
                className="absolute inset-x-0 bottom-0 p-5 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500"
                style={{
                  background:
                    "linear-gradient(180deg, transparent, rgba(0,0,0,0.9))",
                }}
              >
                <p className="font-ui text-[10px] tracking-[0.35em] uppercase text-gold">
                  {it.cat}
                </p>
                <p className="font-heading text-xl text-parchment mt-1">{it.title}</p>
              </figcaption>
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl ring-[1.5px] ring-gold/70" />
            </motion.figure>
          ))}
        </div>
      </div>
    </div>
  );
}
