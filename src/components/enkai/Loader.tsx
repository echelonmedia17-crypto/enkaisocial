import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Loader() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setShow(false), 2000);
    return () => clearTimeout(t);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] grid place-items-center bg-navy-deep"
        >
          <div className="absolute inset-0 radial-gold-glow" />
          <motion.div
            initial={{ scale: 0.6, opacity: 0, filter: "blur(10px)" }}
            animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex flex-col items-center gap-6"
          >
            <div className="relative grid h-24 w-24 place-items-center rounded-full border border-gold/50">
              <div className="absolute inset-0 rounded-full animate-gold-pulse bg-gold/10" />
              <span className="font-heading text-4xl gold-text">E</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-gold/50" />
              <span className="font-heading tracking-[0.4em] text-parchment text-sm">
                ENKAI SOCIAL
              </span>
              <span className="h-px w-8 bg-gold/50" />
            </div>
            <span className="font-script text-2xl gold-text gold-glow -mt-2">
              Where Every Event Goes Social
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
