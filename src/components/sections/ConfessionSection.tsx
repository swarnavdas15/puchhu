import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const ConfessionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center py-24 px-6 relative overflow-hidden">
      {/* Subtle pulsing heart background */}
      <motion.div
        animate={isInView ? { scale: [1, 1.1, 1], opacity: [0.03, 0.06, 0.03] } : {}}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <svg
          className="w-[600px] h-[600px] text-primary"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      </motion.div>

      <div className="max-w-2xl mx-auto text-center relative z-10">
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-12"
        >
          What You Mean To Me
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-relaxed mb-12"
        >
          You are my clarity when everything blurs.
        </motion.h2>

        <div className="space-y-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed"
          >
            You are the calm I didn't know I needed, the strength I leaned on without saying thank you, the warmth I forgot to feel because it was always there.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed"
          >
            I never stopped feeling it. I just stopped showing it.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="font-serif text-xl md:text-2xl italic text-foreground mt-10"
          >
            And that was my greatest failure.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default ConfessionSection;
