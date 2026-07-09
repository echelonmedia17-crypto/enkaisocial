import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import {
  ALL_PROJECTS_ENKAI,
  type Project,
} from "./projectdata";
import { ProjectLightbox } from "@/components/enkai/ProjectLightbox";

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
   PORTFOLIO CARD (ORIGINAL EDITORIAL LISTING)
   ───────────────────────────────────────────── */
function PortfolioCard({
  item,
  index,
  onOpen,
}: {
  item: Project;
  index: number;
  onOpen: (i: number) => void;
}) {
  const imageFirst = index % 2 === 0;
  const split70 = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-120px" }}
      transition={{
        duration: 0.9,
        delay: index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative overflow-hidden cursor-pointer mx-auto"
      style={{ borderRadius: "20px" }}
      onClick={() => onOpen(index)}
    >
      {/* Gold border base (premium glass) */}
      <div
        className="absolute inset-0 pointer-events-none opacity-100"
        style={{
          borderRadius: "20px",
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(212,175,55,0.28)",
          boxShadow: "inset 0 0 0 1px rgba(212,175,55,0.08)",
          backdropFilter: "blur(14px)",
        }}
      />

      {/* Hover glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          borderRadius: "20px",
          border: "1px solid rgba(212,175,55,0.7)",
          boxShadow: "0 0 0 1px rgba(212,175,55,0.12), 0 0 42px rgba(212,175,55,0.18)",
        }}
      />

      {/* Layout row (single card per row) */}
      <div className="relative flex items-stretch h-[420px] md:h-[480px]" style={{ borderRadius: "20px" }}>
        {imageFirst ? (
          <>
            <div className={split70 ? "w-[70%]" : "w-[50%]"}>
              <motion.div
                className="relative h-full overflow-hidden"
                initial={{ scale: 1.08 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: false, margin: "-120px" }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              >
                <img
                  src={item.img}
                  alt={item.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[500ms] ease-out group-hover:scale-[1.04]"
                  style={{ filter: "brightness(0.78)" }}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(1,34,60,0.10) 0%, rgba(1,34,60,0.40) 55%, rgba(1,34,60,0.92) 100%)",
                  }}
                />
              </motion.div>
            </div>

            <div className={split70 ? "w-[30%]" : "w-[50%]"}>
              <div className="h-full p-6 md:p-8 flex flex-col justify-end overflow-hidden">
                <div className="flex flex-col gap-4">
                  <span className="font-ui text-[10px] tracking-[0.35em] uppercase text-gold/90">
                    {item.category}
                  </span>
                  <h3 className="font-heading text-parchment leading-[1.12] text-xl md:text-3xl">
                    {item.name}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="font-ui text-[12px] text-parchment/60">{item.location}</span>
                    <span className="text-parchment/30 text-[10px]">●</span>
                    <span className="font-ui text-[12px] text-parchment/60">{item.year}</span>
                  </div>
                  <p className="text-parchment/70 text-sm leading-[1.6] justify-pretty line-clamp-3">
                    {item.blurb}
                  </p>
                  <div className="mt-1 flex items-center">
                    <button className="ml-0 inline-flex items-center gap-2 text-parchment/80 text-xs tracking-[0.25em] uppercase font-ui hover:text-gold transition-colors duration-500">
                      <span className="h-0.5 w-14 bg-gold/30" />
                      <span>View Project →</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className={split70 ? "w-[30%]" : "w-[50%]"}>
              <div className="h-full p-6 md:p-8 flex flex-col justify-end overflow-hidden">
                <div className="flex flex-col gap-4">
                  <span className="font-ui text-[10px] tracking-[0.35em] uppercase text-gold/90">
                    {item.category}
                  </span>
                  <h3 className="font-heading text-parchment leading-[1.12] text-xl md:text-3xl">
                    {item.name}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="font-ui text-[12px] text-parchment/60">{item.location}</span>
                    <span className="text-parchment/30 text-[10px]">●</span>
                    <span className="font-ui text-[12px] text-parchment/60">{item.year}</span>
                  </div>
                  <p className="text-parchment/70 text-sm leading-[1.6] justify-pretty line-clamp-3">
                    {item.blurb}
                  </p>
                  <div className="mt-1 flex items-center">
                    <button className="ml-0 inline-flex items-center gap-2 text-parchment/80 text-xs tracking-[0.25em] uppercase font-ui hover:text-gold transition-colors duration-500">
                      <span className="h-0.5 w-14 bg-gold/30" />
                      <span>View Project →</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className={split70 ? "w-[70%]" : "w-[50%]"}>
              <motion.div
                className="relative h-full overflow-hidden"
                initial={{ scale: 1.08 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: false, margin: "-120px" }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              >
                <img
                  src={item.img}
                  alt={item.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[500ms] ease-out group-hover:scale-[1.04]"
                  style={{ filter: "brightness(0.78)" }}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(1,34,60,0.10) 0%, rgba(1,34,60,0.40) 55%, rgba(1,34,60,0.92) 100%)",
                  }}
                />
              </motion.div>
            </div>
          </>
        )}
      </div>

      {/* Luxury shadow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          borderRadius: "20px",
          boxShadow: "0 28px 80px rgba(0,0,0,0.55)",
        }}
      />
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   MAIN PORTFOLIO SCREEN
   ───────────────────────────────────────────── */
function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const filteredProjects = ALL_PROJECTS_ENKAI;

  const openLightbox = (p: Project) => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem("enkaiPortfolioScrollY", String(window.scrollY || 0));
      sessionStorage.setItem("enkaiPortfolioRestorePending", "true");
      window.history.pushState({ projectModalOpen: true }, "");
    }
    setSelectedProject(p);
  };

  const closeLightbox = () => {
    setSelectedProject(null);
    (window as any).__lenisStart?.();
    if (typeof window !== "undefined" && window.history.state?.projectModalOpen) {
      window.history.back();
    }
    const pendingRaw = sessionStorage.getItem("enkaiPortfolioRestorePending");
    if (pendingRaw === "true") {
      const raw = sessionStorage.getItem("enkaiPortfolioScrollY");
      const value = raw == null ? 0 : Number(raw);
      sessionStorage.setItem("enkaiPortfolioRestorePending", "false");
      window.scrollTo({ top: Number.isFinite(value) ? value : 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handlePopState = () => {
      if (selectedProject) {
        setSelectedProject(null);
        const pendingRaw = sessionStorage.getItem("enkaiPortfolioRestorePending");
        if (pendingRaw === "true") {
          const raw = sessionStorage.getItem("enkaiPortfolioScrollY");
          const value = raw == null ? 0 : Number(raw);
          sessionStorage.setItem("enkaiPortfolioRestorePending", "false");
          window.scrollTo({ top: Number.isFinite(value) ? value : 0, behavior: "smooth" });
        }
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [selectedProject]);

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
        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-burgundy-bright" />
            <span className="font-ui text-[11px] tracking-[0.4em] uppercase text-burgundy-bright">
              From Our Portfolio
            </span>
            <span className="h-px w-8 bg-burgundy-bright" />
          </div>
          <h1 className="mt-6 font-heading text-5xl md:text-7xl leading-[1.02] text-parchment max-w-4xl">
            Every event we've been{" "}
            <em className="italic text-parchment/60">inside.</em>
          </h1>
        </div>

        {/* Featured Projects */}
        <div className="mt-16 space-y-14">
          <div className="mt-10 space-y-14">
            {ALL_PROJECTS_ENKAI.map((item, idx) => (
              <div key={item.name} className="mx-auto w-[90%] md:w-[95%]">
                <PortfolioCard item={item} index={idx} onOpen={() => openLightbox(item)} />
              </div>
            ))}
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-24 flex items-center gap-4">
          <span className="h-px flex-1 hairline-gold" />
          <span className="font-ui text-[10px] tracking-[0.4em] uppercase text-parchment/40">
            End of Archive
          </span>
          <span className="h-px flex-1 hairline-gold" />
        </div>
      </div>

      {/* ─── Premium Lightbox ─── */}
      {selectedProject && (
        <ProjectLightbox
          project={selectedProject}
          allProjects={filteredProjects}
          onClose={closeLightbox}
          onSelectProject={setSelectedProject}
        />
      )}
    </div>
  );
}