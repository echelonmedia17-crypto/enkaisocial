import { useRef, type MouseEvent, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "ghost";
  as?: "button" | "a";
  href?: string;
  className?: string;
};

export function MagneticButton({
  children,
  onClick,
  variant = "primary",
  as = "button",
  href,
  className = "",
}: Props) {
  const ref = useRef<HTMLElement | null>(null);

  const handleMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - (r.left + r.width / 2);
    const y = e.clientY - (r.top + r.height / 2);
    el.style.transform = `translate(${x * 0.25}px, ${y * 0.35}px)`;
  };
  const handleLeave = () => {
    const el = ref.current;
    if (el) el.style.transform = "translate(0,0)";
  };

  const base =
    "relative inline-flex items-center gap-3 px-8 py-4 font-ui text-sm tracking-[0.14em] uppercase transition-[transform,box-shadow,background,border-color] duration-500 ease-out will-change-transform";
  const styles =
    variant === "primary"
      ? "bg-burgundy text-white border border-gold/40 hover:border-gold hover:shadow-[0_0_28px_rgba(212,175,55,0.4)] hover:scale-[1.03]"
      : "bg-transparent text-gold border border-gold/50 hover:border-gold hover:bg-gold/10";

  const inner = (
    <span
      ref={ref as any}
      className={`${base} ${styles} ${className}`}
      style={{ willChange: "transform" }}
    >
      <span className="relative z-10">{children}</span>
      <span aria-hidden className="relative z-10 h-px w-8 bg-current opacity-60" />
    </span>
  );

  if (as === "a") {
    return (
      <a
        href={href}
        onClick={onClick}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        className="inline-block"
      >
        {inner}
      </a>
    );
  }
  return (
    <button
      onClick={onClick}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="inline-block"
      type="button"
    >
      {inner}
    </button>
  );
}
