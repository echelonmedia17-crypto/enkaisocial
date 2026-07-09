import { useState, useEffect, useRef, type CSSProperties, type SyntheticEvent } from "react";
import {
  CalendarDays,
  Clock3,
  ChevronLeft,
  ChevronRight,
  Instagram,
  MapPin,
  Play,
  Quote,
  X,
  User,
  LayoutGrid,
  ClipboardList,
  Target,
  Fingerprint,
  MessageSquare,
  Image as ImageIcon,
  FileText,
  Globe,
  ShieldCheck,
  Award,
  Rocket,
  Users,
  Trophy,
  Edit3,
  Megaphone,
  TrendingUp,
  BarChart3,
  Star,
  Handshake,
  type LucideIcon,
} from "lucide-react";

import {
  type Project,
  type ProjectImpactStat,
  type ProjectHighlightIcon,
  GALLERY_PREVIEW_COUNT_ENKAI,
} from "../../routes/projectdata";
import { Navbar } from "./Navbar";

/* ─────────────────────────────────────────────
   SCOPED LIGHTBOX DARK PALETTE
   ───────────────────────────────────────────── */
const overlayThemeVars = {
  "--pf-bg": "#121014",
  "--pf-panel": "#1c181f",
  "--pf-panel-2": "#221e25",
  "--pf-fg": "#f6f2ea",
  "--pf-fg-soft": "rgba(246,242,234,0.75)",
  "--pf-fg-mute": "rgba(246,242,234,0.5)",
  "--pf-border": "rgba(212,175,55,0.18)",
  "--amber": "#d4af37",
} as CSSProperties;

function getInstagramHandle(url: string) {
  return url.split("/")[3]?.split("?")[0] ?? "enkai.social";
}

function isVideoSource(src: string) {
  return /\.(mp4|mov|webm)(\?.*)?$/i.test(src);
}

function getRoundedCounterValue(rawValue: string) {
  const match = rawValue.trim().match(/^([0-9]+(?:\.[0-9]+)?)(.*)$/);
  if (!match) {
    return { value: 0, suffix: rawValue.trim() };
  }
  return {
    value: Number.parseFloat(match[1]),
    suffix: match[2].trim(),
  };
}

/* ─────────────────────────────────────────────
   SUB-COMPONENTS
   ───────────────────────────────────────────── */

type ProjectMediaProps = {
  src: string;
  alt: string;
  className?: string;
  mediaClassName?: string;
  fallbackRatio?: string;
  fit?: "cover" | "contain";
  eager?: boolean;
  onClick?: () => void;
  showPlayBadge?: boolean;
  objectPosition?: string;
  autoPlay?: boolean;
  controls?: boolean;
  poster?: string;
  lockAspectRatio?: boolean;
};

function ProjectMedia({
  src,
  alt,
  className,
  mediaClassName,
  fallbackRatio = "1 / 1",
  fit = "cover",
  eager = false,
  onClick,
  showPlayBadge = false,
  objectPosition = "center",
  autoPlay = false,
  controls = false,
  poster,
  lockAspectRatio = false,
}: ProjectMediaProps) {
  const videoSource = isVideoSource(src);
  const [aspectRatio, setAspectRatio] = useState(fallbackRatio);
  const showVideoFallbackPoster = videoSource && !poster && !autoPlay && !controls;

  useEffect(() => {
    setAspectRatio(fallbackRatio);
  }, [fallbackRatio, src]);

  const wrapperStyle: CSSProperties = {
    ...(lockAspectRatio ? {} : { aspectRatio }),
  };

  const mediaStyle: CSSProperties = {
    objectPosition,
  };

  const handleImageLoad = (event: SyntheticEvent<HTMLImageElement>) => {
    const { naturalWidth, naturalHeight } = event.currentTarget;
    if (naturalWidth > 0 && naturalHeight > 0) {
      setAspectRatio(`${naturalWidth} / ${naturalHeight}`);
    }
  };

  const handleVideoLoaded = (event: SyntheticEvent<HTMLVideoElement>) => {
    const { videoWidth, videoHeight } = event.currentTarget;
    if (!lockAspectRatio && videoWidth > 0 && videoHeight > 0) {
      setAspectRatio(`${videoWidth} / ${videoHeight}`);
    }
  };

  const mediaClasses = [
    "block h-full w-full",
    fit === "cover" ? "object-cover" : "object-contain",
    mediaClassName,
  ]
    .filter(Boolean)
    .join(" ");

  const inner = (
    <>
      {videoSource ? (
        <>
          {showVideoFallbackPoster ? (
            <div className="absolute inset-0 flex items-center justify-center bg-[var(--pf-panel-2)]">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--amber)] text-[var(--pf-bg)] shadow-lg">
                <Play className="ml-0.5 h-4 w-4 fill-current" />
              </span>
            </div>
          ) : null}
          <video
            src={src}
            poster={poster}
            autoPlay={autoPlay}
            muted={autoPlay || !controls}
            loop={!controls}
            playsInline
            preload="metadata"
            controls={controls}
            className={mediaClasses}
            style={mediaStyle}
            onLoadedMetadata={handleVideoLoaded}
            onClick={(event) => {
              if (!controls) {
                event.preventDefault();
              }
            }}
          />
        </>
      ) : (
        <img
          src={src}
          alt={alt}
          loading={eager ? "eager" : "lazy"}
          className={mediaClasses}
          style={mediaStyle}
          onLoad={handleImageLoad}
        />
      )}

      {showPlayBadge && videoSource && (
        <div className="pointer-events-none absolute inset-0 grid place-items-center">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--amber)] bg-[rgba(0,0,0,0.55)] text-[var(--amber)] shadow-lg">
            <Play className="ml-0.5 h-4 w-4 fill-current" />
          </span>
        </div>
      )}
    </>
  );

  const sharedClasses = [
    "relative block overflow-hidden",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        className={sharedClasses}
        style={wrapperStyle}
      >
        {inner}
      </button>
    );
  }

  return (
    <div className={sharedClasses} style={wrapperStyle}>
      {inner}
    </div>
  );
}

function AnimatedCounter({ value }: { value: string }) {
  const [displayValue, setDisplayValue] = useState("0");
  const [didAnimate, setDidAnimate] = useState(false);
  const counterRef = useRef<HTMLSpanElement | null>(null);
  const { value: numericTarget, suffix } = getRoundedCounterValue(value);

  useEffect(() => {
    const element = counterRef.current;
    if (!element || didAnimate) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return;
        }

        setDidAnimate(true);

        const duration = 1500;
        const startTime = performance.now();

        const step = (now: number) => {
          const elapsed = Math.min((now - startTime) / duration, 1);
          const eased = 1 - Math.pow(1 - elapsed, 3);
          const currentValue = Math.round(numericTarget * eased);

          setDisplayValue(currentValue.toLocaleString());

          if (elapsed < 1) {
            requestAnimationFrame(step);
          } else {
            setDisplayValue(numericTarget.toLocaleString());
          }
        };

        requestAnimationFrame(step);
        observer.disconnect();
      },
      { threshold: 0.45 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [didAnimate, numericTarget]);

  return (
    <span ref={counterRef}>
      {displayValue}
      {suffix}
    </span>
  );
}

function SectionLabel({ children }: { children: string }) {
  return (
    <div className="font-heading text-[15px] font-bold uppercase tracking-[0.08em] text-[var(--pf-fg)]">
      {children}
    </div>
  );
}

const HIGHLIGHT_ICON_MAP: Record<ProjectHighlightIcon, LucideIcon> = {
  user: User,
  grid: LayoutGrid,
  clock: Clock3,
  device: Edit3,
  clipboard: ClipboardList,
  target: Target,
  fingerprint: Fingerprint,
  message: MessageSquare,
  image: ImageIcon,
  file: FileText,
  globe: Globe,
  shield: ShieldCheck,
  award: Award,
  rocket: Rocket,
  users: Users,
  trophy: Trophy,
  pencil: Edit3,
  megaphone: Megaphone,
  trending: TrendingUp,
  barChart: BarChart3,
  star: Star,
  handshake: Handshake,
};

function HighlightIcon({
  icon,
  className,
}: {
  icon: ProjectHighlightIcon;
  className?: string;
}) {
  const Icon = HIGHLIGHT_ICON_MAP[icon] ?? Target;
  return <Icon className={className} />;
}

function ImpactStatCard({ icon, number, label }: ProjectImpactStat) {
  return (
    <div className="flex min-w-0 flex-col items-center justify-center gap-1 rounded-[10px] border border-[rgba(212,175,55,0.28)] bg-[rgba(212,175,55,0.05)] px-2 py-5 text-center shadow-[0_0_0_1px_rgba(212,175,55,0.06)]">
      <div className="flex items-center justify-center gap-3">
        <span className="shrink-0 text-[16px] leading-none text-[var(--amber)]">{icon}</span>
        <span className="sr-only">divider</span>
      </div>

      <div className="font-heading text-[clamp(15px,1.8vw,20px)] font-medium leading-none text-[var(--amber)]">
        <AnimatedCounter value={number} />
      </div>

      <div className="font-sans text-[8px] uppercase leading-tight tracking-[0.1em] text-[var(--pf-fg-mute)]">
        {label}
      </div>
    </div>
  );
}

function ProjectNavFooter({
  selectedProject,
  filteredProjects,
  setSelectedProject,
  closeLightbox,
}: {
  selectedProject: Project;
  filteredProjects: Project[];
  setSelectedProject: (p: Project) => void;
  closeLightbox: () => void;
} & any) {
  return (
    <section className="mt-10 border-t border-[var(--pf-border)] pt-5">
      <div className="flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={() => {
            const currentIndex = filteredProjects.findIndex((project) => project.id === selectedProject.id);
            const targetProject = filteredProjects[(currentIndex - 1 + filteredProjects.length) % filteredProjects.length];
            setSelectedProject(targetProject);
          }}
          className="font-sans text-[13px] font-semibold text-[var(--amber)] transition-colors duration-300 hover:text-[var(--pf-fg)]"
        >
          ← Previous Project
        </button>

        <button
          type="button"
          onClick={closeLightbox}
          aria-label="Back to listing"
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--pf-border)] text-[var(--amber)] transition-colors duration-300 hover:bg-[var(--amber)] hover:text-[var(--pf-bg)]"
        >
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M4 4h7v7H4V4Zm9 0h7v7h-7V4ZM4 13h7v7H4v-7Zm9 0h7v7h-7v-7Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <button
          type="button"
          onClick={() => {
            const currentIndex = filteredProjects.findIndex((project) => project.id === selectedProject.id);
            const targetProject = filteredProjects[(currentIndex + 1) % filteredProjects.length];
            setSelectedProject(targetProject);
          }}
          className="font-sans text-[13px] font-semibold text-[var(--amber)] transition-colors duration-300 hover:text-[var(--pf-fg)]"
        >
          Next Project →
        </button>
      </div>
    </section>
  );
}

function MediaModal({
  src,
  alt,
  onClose,
}: {
  src: string;
  alt: string;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-[980] flex items-center justify-center px-4 py-8"
      style={{ backgroundColor: "rgba(0,0,0,0.82)" }}
      onClick={onClose}
    >
      <button
        type="button"
        aria-label="Close media preview"
        onClick={onClose}
        className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--pf-border)] bg-[var(--pf-panel)] text-[var(--pf-fg)] transition-colors duration-300 hover:bg-[var(--amber)] hover:text-[var(--pf-bg)]"
      >
        <X className="h-4 w-4" />
      </button>

      <div
        className="max-h-[85vh] max-w-[92vw]"
        onClick={(event) => event.stopPropagation()}
      >
        <ProjectMedia
          src={src}
          alt={alt}
          fit="contain"
          autoPlay
          controls={isVideoSource(src)}
          className="max-h-[85vh] max-w-[92vw] rounded-[18px] bg-[var(--pf-panel)] shadow-2xl"
          mediaClassName="max-h-[85vh] max-w-[92vw]"
          fallbackRatio="4 / 3"
          lockAspectRatio
          eager
        />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   MAIN COMPONENT
   ───────────────────────────────────────────── */
export interface ProjectLightboxProps {
  project: Project;
  allProjects: Project[];
  onClose: () => void;
  onSelectProject: (project: Project) => void;
}

export function ProjectLightbox({
  project,
  allProjects,
  onClose,
  onSelectProject,
}: ProjectLightboxProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeLightbox, setActiveLightbox] = useState<string | null>(null);
  const [showFullGallery, setShowFullGallery] = useState(false);

  const overlayRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const behindScenesRef = useRef<HTMLDivElement | null>(null);

  // Sync state on project changes
  useEffect(() => {
    setShowFullGallery(false);
    setActiveLightbox(null);
    setScrollProgress(0);

    const overlayElement = overlayRef.current;
    if (overlayElement) {
      overlayElement.scrollTo({ top: 0, behavior: "auto" });
    }

    requestAnimationFrame(() => {
      handleOverlayScroll();
    });

    const contentElement = contentRef.current;
    if (contentElement) {
      contentElement.animate(
        [{ transform: "translateY(50px)", opacity: 0 }, { transform: "translateY(0)", opacity: 1 }],
        { duration: 500, easing: "cubic-bezier(0.22,1,0.36,1)", fill: "forwards" }
      );
    }
  }, [project.id]);

  // Lock scroll
  useEffect(() => {
    const lenisStop = (window as any).__lenisStop as undefined | (() => void);
    const lenisStart = (window as any).__lenisStart as undefined | (() => void);

    document.body.style.overflow = "hidden";
    lenisStop?.();

    return () => {
      document.body.style.overflow = "";
      lenisStart?.();
    };
  }, []);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (activeLightbox) {
          setActiveLightbox(null);
          return;
        }
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [activeLightbox, onClose]);

  const handleOverlayScroll = () => {
    const overlayElement = overlayRef.current;
    if (!overlayElement) return;

    const maxScroll = overlayElement.scrollHeight - overlayElement.clientHeight;
    if (maxScroll <= 0) {
      setScrollProgress(100);
      return;
    }
    setScrollProgress((overlayElement.scrollTop / maxScroll) * 100);
  };

  const openGalleryLightbox = (src: string) => {
    setActiveLightbox(src);
  };

  const visibleGallery = project
    ? project.gallery.filter((src) => !src.includes("placeholder.jpg"))
    : [];

  const displayedGallery = showFullGallery
    ? visibleGallery
    : visibleGallery.slice(0, GALLERY_PREVIEW_COUNT_ENKAI);
  const hasMoreGallery = visibleGallery.length > GALLERY_PREVIEW_COUNT_ENKAI;

  return (
    <div
      ref={overlayRef}
      style={overlayThemeVars}
      className="fixed inset-0 z-[900] overflow-y-auto overflow-x-hidden bg-[var(--pf-bg)] text-[var(--pf-fg)] [scrollbar-width:none] overscroll-none [scrollbar-color:transparent_transparent] [&::-webkit-scrollbar]:hidden"
      onScroll={handleOverlayScroll}
      onClick={(e) => e.stopPropagation()}
      data-lenis-prevent
    >
      {/* Scroll Progress Bar */}
      <div
        className="fixed left-0 top-0 z-[930] h-[2px] bg-[var(--amber)] transition-[width] duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Header inside overlay */}
      <div className="fixed inset-x-0 top-0 z-[950] [&_header]:bg-[var(--pf-bg)]/70 [&_header]:backdrop-blur-xl">
        <Navbar />
      </div>

      {/* Close Trigger Button */}
      <button
        type="button"
        onClick={onClose}
        className="fixed right-5 top-5 z-[940] inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--pf-border)] bg-[var(--pf-panel)] text-[var(--pf-fg)] transition-colors duration-300 hover:bg-[var(--amber)] hover:text-[var(--pf-bg)]"
      >
        <X className="h-4 w-4" />
      </button>

      <div ref={contentRef} className="relative mx-auto w-full max-w-5xl px-6 pb-16 pt-28 md:pt-32">
        <>
          {/* Hero segment */}
          <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch">
            <div className="space-y-3.5 lg:pt-1">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="font-sans text-[11px] font-bold tracking-[0.2em] text-[var(--amber)] uppercase">
                  {project.category}
                </span>
                {project.year ? (
                  <span className="inline-flex items-center gap-1 font-sans text-[12px] text-[var(--pf-fg-mute)] leading-none">
                    <CalendarDays className="h-3.5 w-3.5 text-[var(--amber)]" />
                    <span>{project.year}</span>
                  </span>
                ) : null}
              </div>

              <h2 className="max-w-2xl font-heading text-[clamp(32px,4.4vw,56px)] font-extrabold leading-[0.95] text-[var(--pf-fg)]">
                {project.name}
              </h2>

              <p className="max-w-xl font-italic-tagline text-[clamp(14px,1.6vw,18px)] leading-snug text-[var(--amber)]">
                {project.blurb}
              </p>

              {(project.location || project.duration) ? (
                <div className="flex flex-wrap gap-2">
                  {project.location ? (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--pf-border)] bg-[var(--pf-panel)] px-3 py-1.5 font-sans text-[12px] text-[var(--pf-fg-soft)]">
                      <MapPin className="h-3.5 w-3.5 text-[var(--amber)]" />
                      {project.location}
                    </span>
                  ) : null}

                  {project.duration ? (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--pf-border)] bg-[var(--pf-panel)] px-3 py-1.5 font-sans text-[12px] text-[var(--pf-fg-soft)]">
                      <Clock3 className="h-3.5 w-3.5 text-[var(--amber)]" />
                      {project.duration}
                    </span>
                  ) : null}
                </div>
              ) : null}

              <div className="flex flex-wrap items-center gap-2.5">
                <a
                  href={project.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--pf-border)] bg-transparent px-4 py-2.5 font-sans text-[12.5px] font-semibold text-[var(--pf-fg)] transition-colors duration-300 hover:bg-[var(--amber)] hover:text-[var(--pf-bg)]"
                >
                  <Instagram className="h-4 w-4" />
                  <span className="font-semibold text-[var(--pf-fg)]">@{getInstagramHandle(project.instagram)}</span>
                  <span className="mx-2 text-[var(--amber)]">|</span>
                  <span>View on Instagram ↗</span>
                </a>
              </div>

              <p className="max-w-xl font-sans text-[13px] leading-relaxed text-[var(--pf-fg-soft)] text-justify">
                {project.description}
              </p>
            </div>

            <ProjectMedia
              src={project.img}
              alt={project.name}
              className="h-full min-h-[300px] w-full rounded-[14px] bg-[var(--pf-panel)] shadow-xl"
              mediaClassName="rounded-[14px]"
              fit="cover"
              lockAspectRatio
              eager
            />
          </section>

          {/* What we delivered + Stats strip */}
          <section className="mt-10 border-t border-[var(--pf-border)] pt-6">
            <div className={`grid gap-6 ${project.stats?.length ? "lg:grid-cols-[0.85fr_1.15fr] lg:items-center" : "grid-cols-1"}`}>
              <div className="space-y-3">
                <SectionLabel>What We Delivered</SectionLabel>
                <ul className="space-y-2 pt-1">
                  {project.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-start gap-2 font-sans text-[13px] leading-relaxed text-[var(--pf-fg-soft)]"
                    >
                      <span className="mt-0.5 text-[13px] font-bold leading-none text-[var(--amber)]">+</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {project.stats?.length ? (
                <div className="flex flex-wrap overflow-hidden rounded-[14px] border border-[var(--pf-border)] bg-[var(--pf-panel)] divide-x divide-[var(--pf-border)]">
                  {project.stats.map((stat) => (
                    <div
                      key={`${stat.label}-${stat.number}`}
                      className="flex-1 min-w-[110px] px-4 py-5 text-center"
                    >
                      <div className="font-heading text-[clamp(24px,3vw,34px)] font-black leading-none text-[var(--amber)]">
                        {stat.number}
                      </div>
                      <div className="mt-2 font-sans text-[9.5px] uppercase tracking-[0.14em] text-[var(--pf-fg-mute)]">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          </section>

          {/* Highlights Gallery */}
          {visibleGallery.length > 0 ? (
            <section className="mt-10 space-y-3.5">
              <SectionLabel>Highlights</SectionLabel>

              <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
                {displayedGallery.map((src, index) => {
                  const isFeatured = !showFullGallery && index === 0;

                  return (
                    <ProjectMedia
                      key={`${src}-${index}`}
                      src={src}
                      alt={`${project.name} gallery ${index + 1}`}
                      onClick={() => openGalleryLightbox(src)}
                      showPlayBadge
                      className={`group relative w-full cursor-zoom-in rounded-[8px] border border-transparent bg-[var(--pf-panel)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--amber)] hover:shadow-[0_0_0_1px_rgba(0,0,0,0.02),0_0_16px_rgba(245,166,35,0.22)] ${
                        isFeatured ? "row-span-2 md:row-span-2 md:col-span-1 md:h-full" : "aspect-[4/3]"
                      }`}
                      mediaClassName="rounded-[8px] transition-transform duration-300 group-hover:scale-[1.02]"
                      fit="cover"
                      lockAspectRatio
                      autoPlay={false}
                      controls={false}
                    />
                  );
                })}
              </div>

              {hasMoreGallery ? (
                <div className="pt-1 text-center">
                  <button
                    type="button"
                    onClick={() => setShowFullGallery((prev) => !prev)}
                    className="inline-flex items-center gap-2 rounded-full border border-[var(--amber)] bg-transparent px-4 py-2 font-sans text-[12.5px] font-semibold text-[var(--amber)] transition-colors duration-300 hover:bg-[var(--amber)] hover:text-[var(--pf-bg)]"
                  >
                    <span>{showFullGallery ? "Show Less" : "View Full Gallery"}</span>
                    <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M4 4h7v7H4V4Zm9 0h7v7h-7V4ZM4 13h7v7H4v-7Zm9 0h7v7h-7v-7Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
              ) : null}
            </section>
          ) : null}

          {/* Behind the Scenes Carousel */}
          {project.behindScenes?.length ? (
            <section className="mt-10 space-y-3.5">
              <SectionLabel>Behind The Scenes</SectionLabel>

              <div className="relative">
                <button
                  type="button"
                  onClick={() => behindScenesRef.current?.scrollBy({ left: -300, behavior: "smooth" })}
                  className="absolute left-1 top-1/2 z-10 -translate-y-1/2 inline-flex h-9 w-9 items-center justify-center rounded-full bg-[var(--amber)] text-[var(--pf-bg)] shadow-lg transition-transform duration-300 hover:scale-105"
                  aria-label="Scroll behind the scenes left"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>

                <div
                  ref={behindScenesRef}
                  className="flex snap-x snap-mandatory gap-3 overflow-x-auto px-11 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                  style={{ msOverflowStyle: "none" }}
                >
                  {project.behindScenes.map((src, index) => (
                    <ProjectMedia
                      key={`${src}-${index}`}
                      src={src}
                      alt={`${project.name} behind the scenes ${index + 1}`}
                      className="h-[190px] w-auto snap-start flex-none rounded-[10px] border border-transparent bg-[var(--pf-panel)] shadow-sm"
                      mediaClassName="rounded-[10px]"
                      fallbackRatio="4 / 3"
                      fit="cover"
                      autoPlay={false}
                      controls={false}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => behindScenesRef.current?.scrollBy({ left: 300, behavior: "smooth" })}
                  className="absolute right-1 top-1/2 z-10 -translate-y-1/2 inline-flex h-9 w-9 items-center justify-center rounded-full bg-[var(--amber)] text-[var(--pf-bg)] shadow-lg transition-transform duration-300 hover:scale-105"
                  aria-label="Scroll behind the scenes right"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </section>
          ) : null}

          {/* Impact Narrative & Testimony */}
          {(project.impactText || project.impactStats?.length || project.testimonial) ? (
            <section className="mt-10">
              <div className="grid grid-cols-1 gap-4 md:gap-5 lg:grid-cols-[0.75fr_1.25fr_0.8fr] lg:gap-6 lg:items-start">
                {project.impactText ? (
                  <div>
                    <div className="font-sans text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--amber)]">
                      THE IMPACT
                    </div>
                    <div className="mt-2 h-[2px] w-[26px] bg-[var(--amber)]" />
                    <p className="mt-3 font-sans text-[12.5px] leading-[1.7] text-[var(--pf-fg-soft)] text-justify">
                      {project.impactText}
                    </p>
                  </div>
                ) : null}

                {project.impactStats?.length ? (
                  <div className="grid min-w-0 grid-cols-4 gap-2">
                    {project.impactStats.slice(0, 5).map((stat) => (
                      <ImpactStatCard key={`${stat.label}-${stat.number}`} {...stat} />
                    ))}
                  </div>
                ) : null}

                {project.testimonial ? (
                  <div className="relative overflow-hidden rounded-[10px] border-l-[3px] border-l-[var(--amber)] bg-[var(--pf-panel)] px-4 py-3.5">
                    <Quote className="pointer-events-none absolute right-2 top-0 h-[56px] w-[56px] select-none text-[var(--amber)] opacity-[0.14]" />
                    <p className="relative z-[1] font-sans text-[12.5px] italic leading-[1.6] text-[var(--pf-fg)]">
                      "{project.testimonial.quote}"
                    </p>
                    <div className="my-2.5 h-px w-full bg-[var(--pf-border)]" />
                    <div className="relative z-[1] font-sans text-[11.5px] font-bold text-[var(--pf-fg)]">
                      – {project.testimonial.author} / {project.testimonial.designation}
                    </div>
                  </div>
                ) : null}
              </div>
            </section>
          ) : null}

          {/* Technologies */}
          {project.technologies?.length ? (
            <section className="mt-10 space-y-3.5">
              <SectionLabel>Technologies</SectionLabel>

              <div className="flex flex-wrap gap-2 pt-0.5">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-[var(--pf-border)] bg-[var(--pf-panel)] px-3 py-1.5 font-sans text-[12px] font-medium text-[var(--pf-fg-soft)] transition-colors duration-300 hover:bg-[var(--amber)] hover:text-[var(--pf-bg)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>
          ) : null}

          {/* Navigation Footer */}
          <ProjectNavFooter
            selectedProject={project}
            filteredProjects={allProjects}
            setSelectedProject={onSelectProject}
            closeLightbox={onClose}
          />
        </>
      </div>

      {activeLightbox ? (
        <MediaModal
          src={activeLightbox}
          alt={`${project.name} preview`}
          onClose={() => setActiveLightbox(null)}
        />
      ) : null}
    </div>
  );
}
