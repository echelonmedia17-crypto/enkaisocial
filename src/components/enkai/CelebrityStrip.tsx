import { useCallback, useRef, useState } from "react";
import { motion } from "framer-motion";

/* ─────────────────────────────────────────────
   DATA
   ───────────────────────────────────────────── */

type Celebrity = {
  name: string;
  event: string;
  year: string;
  img: string;
  targetId: string;
};

const celebrities: Celebrity[] = [
  {
    name: "Javed Ali",
    event: "DAV United Fest",
    year: "2024",
    img: "https://images.pexels.com/photos/167632/pexels-photo-167632.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
    targetId: "glimpse-dav-jit",
  },
  {
    name: "Kumar Sanu",
    event: "Karaoke Night",
    year: "2024",
    img: "https://images.pexels.com/photos/164465/pexels-photo-164465.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
    targetId: "glimpse-dav-jit",
  },
  {
    name: "Rekha Gupta",
    event: "Leadership Summit",
    year: "2024",
    img: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
    targetId: "glimpse-boardroom",
  },
  {
    name: "Tapsee Pannu",
    event: "Screen Awards",
    year: "2023",
    img: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
    targetId: "glimpse-boardroom",
  },
  {
    name: "Anupam Kher",
    event: "Keynote Address",
    year: "2024",
    img: "https://images.pexels.com/photos/1223824/pexels-photo-1223824.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
    targetId: "glimpse-boardroom",
  },
];

/* ─────────────────────────────────────────────
   FILM CARD
   ───────────────────────────────────────────── */

function FilmCard({
  celeb,
  index,
  onNavigate,
}: {
  celeb: Celebrity;
  index: number;
  onNavigate: (targetId: string) => void;
}) {
  const [hovered, setHovered] = useState(false);

  // Stagger overlap: even-indexed cards sit slightly higher
  const offset = index % 2 === 0 ? 0 : 24;

  return (
    <button
      type="button"
      data-celebrity={celeb.name.toLowerCase().replace(/\s+/g, "-")}
      onClick={() => onNavigate(celeb.targetId)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative shrink-0 cursor-pointer origin-bottom transition-all duration-300 ease-out"
      style={{
        width: 240,
        height: 360,
        marginLeft: index === 0 ? 0 : -36, // 15% overlap
        marginTop: offset,
        zIndex: hovered ? 50 : 10 + index,
        transform: hovered ? "scale(1.06) translateY(-12px)" : "scale(1) translateY(0)",
      }}
    >
      {/* Card container with rounded corners */}
      <div
        className="relative w-full h-full overflow-hidden rounded-lg transition-all duration-300"
        style={{
          boxShadow: hovered
            ? "0 12px 40px rgba(212,175,55,0.3), 0 8px 24px rgba(0,0,0,0.5)"
            : "0 4px 20px rgba(0,0,0,0.4)",
        }}
      >
        {/* Image with cinematic treatment */}
        <img
          src={celeb.img}
          alt={celeb.name}
          loading="lazy"
          className="w-full h-full object-cover transition-all duration-500"
          style={{
            filter: hovered
              ? "none"
              : "grayscale(50%) contrast(1.1) brightness(0.75)",
          }}
        />

        {/* Gradient scrim at bottom */}
        <div
          className="absolute inset-x-0 bottom-0 pointer-events-none transition-opacity duration-300"
          style={{
            height: "55%",
            background:
              "linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.6) 40%, transparent 90%)",
          }}
        />

        {/* Text overlay */}
        <div
          className="absolute inset-x-0 bottom-0 p-5 transition-all duration-300"
          style={{
            transform: hovered ? "translateY(0)" : "translateY(4px)",
          }}
        >
          <p
            className="font-heading text-xl text-parchment leading-tight transition-all duration-300"
            style={{
              textShadow: "0 2px 8px rgba(0,0,0,0.8)",
              ...(hovered && { color: "#f4f1ea" }),
            }}
          >
            {celeb.name}
          </p>
          <p
            className="font-ui text-[11px] text-parchment/60 mt-1 tracking-wide transition-all duration-300"
            style={{
              ...(hovered && { color: "rgba(244,241,234,0.85)" }),
            }}
          >
            {celeb.event}, {celeb.year}
          </p>
        </div>

        {/* Gold border glow on hover */}
        <div
          className="absolute inset-0 rounded-lg pointer-events-none transition-opacity duration-300"
          style={{
            opacity: hovered ? 1 : 0,
            boxShadow: "inset 0 0 0 2px rgba(212,175,55,0.6)",
          }}
        />
      </div>
    </button>
  );
}

/* ─────────────────────────────────────────────
   SPOTLIGHT SECTION
   ───────────────────────────────────────────── */

export function CelebrityStrip() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const scrollLeft = useRef(0);

  const scrollToTile = useCallback((targetId: string) => {
    const el = document.getElementById(targetId);
    if (!el) return;

    const lenis = (window as any).__lenis;
    if (lenis && typeof lenis.scrollTo === "function") {
      lenis.scrollTo(el, { offset: -120, duration: 1.5 });
    } else {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }

    // Gold glow pulse
    el.style.transition = "box-shadow 500ms ease-out";
    el.style.boxShadow = "0 0 40px rgba(212,175,55,0.6)";
    setTimeout(() => {
      el.style.boxShadow = "0 0 0 rgba(212,175,55,0)";
      setTimeout(() => {
        el.style.transition = "";
        el.style.boxShadow = "";
      }, 600);
    }, 1000);
  }, []);

  // Drag handling for manual scroll
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    dragStartX.current = e.pageX - scrollContainerRef.current.offsetLeft;
    scrollLeft.current = scrollContainerRef.current.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - dragStartX.current) * 1.5;
    scrollContainerRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <section className="relative bg-navy overflow-hidden py-20 md:py-28">
      {/* Spotlight beam effect behind filmstrip */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          background:
            "radial-gradient(ellipse 1200px 400px at 30% 60%, rgba(212,175,55,0.12), transparent 60%), radial-gradient(ellipse 800px 300px at 70% 40%, rgba(212,175,55,0.08), transparent 55%)",
        }}
      />

      {/* Soft diagonal light shafts */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          background:
            "linear-gradient(115deg, transparent 20%, rgba(212,175,55,0.06) 35%, transparent 50%), linear-gradient(145deg, transparent 40%, rgba(212,175,55,0.04) 55%, transparent 70%)",
        }}
      />

      {/* Top vignette — blends into hero above */}
      <div
        className="absolute inset-x-0 top-0 h-32 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(1,34,60,0.95) 0%, transparent 100%)",
        }}
      />

      {/* Bottom vignette — blends into next section below */}
      <div
        className="absolute inset-x-0 bottom-0 h-32 pointer-events-none"
        style={{
          background:
            "linear-gradient(0deg, rgba(1,34,60,0.95) 0%, transparent 100%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Gold eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7 }}
          className="flex items-center justify-center gap-4"
        >
          <span className="h-px w-10 bg-gold/40" />
          <span className="font-ui text-[11px] tracking-[0.5em] uppercase text-gold">
            In The Spotlight
          </span>
          <span className="h-px w-10 bg-gold/40" />
        </motion.div>

        {/* Playfair Display heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mt-5 text-center font-heading text-3xl md:text-5xl text-parchment leading-[1.15]"
        >
          Stars We've Shared The Stage With
        </motion.h2>
      </div>

      {/* Filmstrip - static, draggable scroll */}
      <div
        className="relative mt-14 overflow-x-auto overflow-y-hidden no-scrollbar"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        style={{
          maskImage:
            "linear-gradient(90deg, transparent, #000 3%, #000 97%, transparent)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent, #000 3%, #000 97%, transparent)",
          cursor: isDragging ? "grabbing" : "grab",
        }}
      >
        <div
          ref={scrollContainerRef}
          className="flex pl-6 pr-6"
        >
          {celebrities.map((celeb, i) => (
            <FilmCard
              key={`${celeb.name}-${i}`}
              celeb={celeb}
              index={i}
              onNavigate={scrollToTile}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
