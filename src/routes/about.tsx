import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Enkai Social" },
      {
        name: "description",
        content: "What is Enkai? Enkai Social transforms live events into premium digital stories.",
      },
    ],
  }),
  component: About,
});

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

function Divider() {
  return (
    <motion.div
      initial={{ scaleX: 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      className="h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent origin-center my-14 md:my-20"
    />
  );
}

function About() {
  return (
    <div className="relative bg-navy text-parchment overflow-hidden">
      {/* Global background glow */}
      <div className="absolute inset-0 radial-gold-glow opacity-20 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6">

        <Divider />

        {/* SECTION 1 — What is Enkai? */}
        <section className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
          <motion.h2
            custom={0}
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            viewport={{ once: true }}
            className="font-heading text-6xl md:text-7xl lg:text-8xl leading-[1.05] text-parchment"
          >
            What is <br /> Enkai?
          </motion.h2>

          <motion.div
            custom={0.18}
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            viewport={{ once: true }}
            className="flex flex-col justify-center gap-6 pt-3 md:pt-10"
          >
            <div className="h-px w-10 bg-gold/60" />
            <p className="text-parchment/75 text-lg leading-[1.85] max-w-[38ch] text-justify">
              Enkai represents presence, moments, and meaningful experiences. It's about being where stories unfold and preserving them with purpose.
            </p>
          </motion.div>
        </section>

        <Divider />

        {/* SECTION 2 — Why Social? (reversed) */}
        <section className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            viewport={{ once: true }}
            className="flex flex-col justify-center gap-6 pt-3 md:pt-10 md:order-1"
          >
            <div className="h-px w-10 bg-gold/60" />
            <p className="text-parchment/75 text-lg leading-[1.85] max-w-[38ch] text-justify">
              Today, every event lives beyond the venue. Social is where moments become conversations, memories become content, and experiences reach the world.
            </p>
          </motion.div>

          <motion.h2
            custom={0.18}
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            viewport={{ once: true }}
            className="font-heading text-6xl md:text-7xl lg:text-8xl leading-[1.05] text-parchment md:order-2 md:text-right"
          >
            Why<br /> Social?
          </motion.h2>
        </section>

        <Divider />

      </div>

      {/* SECTION 3 — Enkai Social centerpiece */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 900px 500px at 50% 50%, rgba(101,0,25,0.2), transparent 70%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="h-px w-24 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-16 origin-center"
          />

          <motion.h2
            custom={0.15}
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            viewport={{ once: true }}
            className="font-heading text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-[1.02] text-parchment"
          >
            Enkai<br /> Social
          </motion.h2>

          <motion.p
            custom={0.35}
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            viewport={{ once: true }}
            className="mt-14 text-parchment/65 text-lg leading-[1.85] max-w-[45ch] mx-auto text-center"
          >
            Transforming live events into premium digital stories through cinematic content, instant publishing, and strategic social amplification.
          </motion.p>

          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="h-px w-24 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-16 origin-center"
          />
        </div>
      </section>

      <div className="relative mx-auto max-w-7xl px-6">

        {/* SECTION 4 — Premium quote block */}
        <section className="py-16 md:py-24 text-center">
          <motion.p
            custom={0}
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            viewport={{ once: true }}
            className="font-heading text-3xl md:text-4xl lg:text-5xl text-parchment/60 leading-[1.2] max-w-3xl"
          >
            Most events are remembered<br className="hidden md:block" /> by those who attended.
          </motion.p>

          <motion.p
            custom={0.2}
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            viewport={{ once: true }}
            className="mt-6 font-heading text-3xl md:text-4xl lg:text-5xl text-gold leading-[1.15] max-w-3xl"
          >
            Enkai Social makes them remembered by everyone.
          </motion.p>

          <motion.div
            custom={0.38}
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            viewport={{ once: true }}
            className="mt-10"
          >
            <div className="h-px w-10 bg-gold/60 mb-8" />
            <p className="text-parchment/60 text-[15px] leading-[1.9] max-w-[38ch]">
              We capture, create, publish and amplify every moment while it happens—helping brands increase visibility, engagement and lasting impact.
            </p>
          </motion.div>
        </section>

      </div>

      {/* CLOSING */}
      <section className="py-16 md:py-24 text-center">
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="h-px w-24 bg-gradient-to-r from-transparent via-gold/50 to-transparent mx-auto mb-12 origin-center"
        />
        <motion.p
          custom={0.2}
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          viewport={{ once: true }}
          className="font-script text-5xl md:text-6xl gold-text leading-[1.4]"
          style={{ textShadow: "0 0 40px rgba(212,175,55,0.35)" }}
        >
          Where Every Event Goes Social.
        </motion.p>
      </section>
    </div>
  );
}
