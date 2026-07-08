import { useCallback, useRef, useState } from "react";
import { motion } from "framer-motion";

/* ─────────────────────────────────────────────
   DATA
   ───────────────────────────────────────────── */

type Celebrity = {
  name: string;
  event: string;
  img: string;
  targetId: string;
};

const celebrities: Celebrity[] = [
  {
    name: "Javed Ali",
    event: "DAV United Fest",
    img: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
    targetId: "glimpse-dav-jit",
  },
  {
    name: "Rekha Gupta",
    event: "Leadership Summit",
    img: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
    targetId: "glimpse-boardroom",
  },
  {
    name: "Tapsee Pannu",
    event: "Screen Awards",
    img: "https://images.pexels.com/photos/1844547/pexels-photo-1844547.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
    targetId: "glimpse-boardroom",
  },
  {
    name: "Anupam Kher",
    event: "Keynote Address",
    img: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
    targetId: "glimpse-boardroom",
  },
  {
    name: "Kumar Sanu",
    event: "Karaoke Night",
    img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
    targetId: "glimpse-dav-jit",
  },
];

/* ─────────────────────────────────────────────
   AVATAR
   ───────────────────────────────────────────── */

function Avatar({
  celeb,
  index,
  onNavigate,
}: {
  celeb: Celebrity;
  index: number;
  onNavigate: (targetId: string) => void;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      type="button"
      data-celebrity={celeb.name.toLowerCase().replace(/\s+/g, "-")}
      onClick={() => onNavigate(celeb.targetId)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group flex flex-col items-center gap-4 shrink-0 cursor-pointer"
      style={{ width: "180px" }}
    >
      <div
        className="celeb-avatar relative rounded-full overflow-hidden transition-all duration-[250ms] ease-out"
        style={{
          width: "90px",
          height: "90px",
          border: "2px solid rgba(212,175,55,0.6)",
          filter: "grayscale(60%)",
          animation: `celebBob 3.5s ease-in-out infinite`,
          animationDelay: `${index * 0.4}s`,
          ...(hovered && {
            filter: "none",
            transform: "scale(1.08)",
            borderColor: "rgba(212,175,55,1)",
            boxShadow: "0 0 24px rgba(212,175,55,0.4)",
          }),
        }}
      >
        <img
          src={celeb.img}
          alt={celeb.name}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </div>
      <div
        className="text-center transition-all duration-[250ms] ease-out"
        style={{
          opacity: hovered ? 1 : 0,
          transform: hovered ? "translateY(0)" : "translateY(4px)",
        }}
      >
        <p className="font-ui text-[13px] text-gold leading-tight">
          {celeb.name}
        </p>
        <p className="font-ui text-[10px] text-parchment/50 leading-tight mt-0.5">
          {celeb.event}
        </p>
      </div>
    </button>
  );
}

/* ─────────────────────────────────────────────
   CELEBRITY STRIP
   ───────────────────────────────────────────── */

export function CelebrityStrip() {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

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

  // Duplicate the list for seamless infinite marquee
  const loop = [...celebrities, ...celebrities];

  return (
    <section className="relative bg-navy overflow-hidden py-16 md:py-20">
      {/* Radial gold glow behind avatars */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 900px 300px at 50% 50%, rgba(212,175,55,0.15), transparent 70%)",
        }}
      />

      {/* Top vignette — blends into hero above */}
      <div
        className="absolute inset-x-0 top-0 h-24 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(1,34,60,0.8) 0%, transparent 100%)",
        }}
      />

      {/* Bottom vignette — blends into next section below */}
      <div
        className="absolute inset-x-0 bottom-0 h-24 pointer-events-none"
        style={{
          background:
            "linear-gradient(0deg, rgba(1,34,60,0.8) 0%, transparent 100%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Eyebrow label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7 }}
          className="flex items-center justify-center gap-4"
        >
          <span className="h-px w-8 bg-gold/30" />
          <span className="font-ui text-[12px] tracking-[0.45em] uppercase text-parchment/50">
            Trusted by India's Biggest Names
          </span>
          <span className="h-px w-8 bg-gold/30" />
        </motion.div>

        {/* Playfair Display sub-heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mt-5 text-center font-heading text-3xl md:text-4xl text-parchment leading-[1.2]"
        >
          The Faces Behind Our Biggest Moments
        </motion.h2>
      </div>

      {/* Marquee */}
      <div
        className="relative mt-14 overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        style={{
          maskImage:
            "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
        }}
      >
        <div
          ref={marqueeRef}
          className="flex gap-12 w-max"
          style={{
            animation: "celebMarquee 30s linear infinite",
            animationPlayState: paused ? "paused" : "running",
          }}
        >
          {loop.map((celeb, i) => (
            <Avatar
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
