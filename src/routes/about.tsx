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

function About() {
  return (
    <div className="relative overflow-hidden bg-navy text-parchment pt-32 pb-24 min-h-screen">
      <div className="absolute inset-0 radial-gold-glow opacity-30" />
      
      <div className="relative mx-auto max-w-3xl px-6">
        
        {/* What is Enkai? */}
        <section className="mt-20 text-center max-w-2xl mx-auto">
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="font-heading text-3xl md:text-4xl leading-[1.1] text-parchment mb-6"
          >
            What is <em className="italic text-parchment/60">Enkai?</em>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="justify-pretty md:text-center text-parchment/75 text-[15px] leading-[1.8]"
          >
            Enkai represents presence, moments, and meaningful experiences. It's about being where stories unfold and preserving them with purpose.
          </motion.p>
        </section>

        {/* Why Social? */}
        <section className="mt-24 text-center max-w-2xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="font-heading text-3xl md:text-4xl leading-[1.1] text-parchment mb-6"
          >
            Why <em className="italic text-parchment/60">Social?</em>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="justify-pretty md:text-center text-parchment/75 text-[15px] leading-[1.8]"
          >
            Today, every event lives beyond the venue. Social is where moments become conversations, memories become content, and experiences reach the world.
          </motion.p>
        </section>

        {/* Together, Enkai Social */}
        <section className="mt-24 border-t border-gold/10 pt-24 text-center max-w-2xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="font-heading text-3xl md:text-4xl leading-[1.1] text-parchment mb-6"
          >
            Together<br />
            <em className="italic text-parchment/60">Enkai Social</em>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="justify-pretty md:text-center text-parchment/75 text-[15px] leading-[1.8] mb-6"
          >
            Enkai Social transforms live events into premium digital stories through cinematic content, instant publishing, and strategic social amplification.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="justify-pretty md:text-center text-parchment/75 text-[15px] leading-[1.8]"
          >
            From corporate summits and luxury launches to concerts, weddings, and celebrity appearances—we ensure every event creates an impact both on-ground and online.
          </motion.p>
        </section>

        {/* Why Enkai Social? */}
        <section className="mt-24 border-t border-gold/10 pt-24 text-center max-w-2xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="font-heading text-3xl md:text-4xl leading-[1.1] text-parchment mb-6"
          >
            Why <em className="italic text-parchment/60">Enkai Social?</em>
          </motion.h2>
          
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.9, delay: 0.2 }}
             className="text-lg md:text-xl text-parchment font-heading mb-6 leading-snug"
          >
            Most events are remembered by those who attended.<br className="hidden md:block" />
            <span className="text-gold mt-1 block">Enkai Social makes them remembered by everyone.</span>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="justify-pretty md:text-center text-parchment/75 text-[15px] leading-[1.8]"
          >
            We capture, create, publish, and amplify your event while it's happening—helping brands extend their reach, increase engagement, and maximize the value of every moment.
          </motion.p>
        </section>

        {/* Closing Statement */}
        <section className="mt-32 pb-20 text-center">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1 }}
            className="hairline-gold h-px w-24 mx-auto mb-10 origin-center opacity-60"
          />
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="font-script text-4xl md:text-5xl gold-text leading-[1.4]"
          >
            Where Every Event Goes Social.
          </motion.h3>
        </section>
      </div>
    </div>
  );
}
