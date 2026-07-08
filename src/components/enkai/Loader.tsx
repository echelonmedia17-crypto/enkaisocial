import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.jpg";

export function Loader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShow(false), 3200);
    return () => clearTimeout(t);
  }, []);

  // Precomputed particle positions (deterministic — no hydration mismatch)
  const particles = Array.from({ length: 18 }, (_, i) => ({
    left: ((i * 53) % 100),
    top: ((i * 79) % 100),
    delay: (i % 6) * 0.4,
    duration: 6 + (i % 5),
    size: 2 + (i % 3),
  }));

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] grid place-items-center overflow-hidden"
          style={{ background: "#012A4A" }}
        >
          {/* animated gradient wash */}
          <motion.div
            aria-hidden
            className="absolute inset-0"
            initial={{ opacity: 0.4 }}
            animate={{ opacity: [0.4, 0.75, 0.4] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            style={{
              background:
                "radial-gradient(ellipse 900px 600px at 30% 40%, rgba(212,175,55,0.18), transparent 60%), radial-gradient(ellipse 800px 500px at 70% 65%, rgba(128,0,32,0.35), transparent 65%)",
            }}
          />

          {/* floating particles */}
          <div aria-hidden className="absolute inset-0">
            {particles.map((p, i) => (
              <motion.span
                key={i}
                className="absolute rounded-full bg-gold/40"
                style={{
                  left: `${p.left}%`,
                  top: `${p.top}%`,
                  width: p.size,
                  height: p.size,
                  boxShadow: "0 0 8px rgba(212,175,55,0.6)",
                }}
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: [0, 0.9, 0], y: [-10, -40, -70] }}
                transition={{
                  duration: p.duration,
                  delay: p.delay,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          <div className="relative flex flex-col items-center gap-6 px-6 text-center">
            {/* Step 1: logo */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 120, damping: 14, delay: 0.1 }}
              className="relative"
            >
              <motion.span
                aria-hidden
                className="absolute inset-[-18px] rounded-full blur-2xl"
                style={{
                  background:
                    "radial-gradient(circle, rgba(212,175,55,0.55), rgba(128,0,32,0.3) 55%, transparent 75%)",
                }}
                animate={{ opacity: [0.5, 0.9, 0.5], scale: [1, 1.12, 1] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              />
              <span className="relative block h-28 w-28 md:h-32 md:w-32 rounded-full overflow-hidden border border-white/40 bg-white/5 backdrop-blur-md shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
                <img src={logo} alt="Enkai Social" className="h-full w-full object-cover" />
              </span>
            </motion.div>

            {/* Step 2: brand name */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-4"
            >
              <span className="h-px w-10 bg-gold/60" />
              <span className="font-heading tracking-[0.5em] text-parchment text-sm md:text-base">
                ENKAI SOCIAL
              </span>
              <span className="h-px w-10 bg-gold/60" />
            </motion.div>

            {/* Step 3: tagline */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6, ease: [0.22, 1, 0.36, 1] }}
              className="font-script text-2xl md:text-3xl gold-text gold-glow -mt-1"
            >
              Where Every Event Goes Social.
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
