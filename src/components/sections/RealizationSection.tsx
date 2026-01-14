import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const RealizationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const lines = [
    "You gave effort when I gave silence.",
    "You stayed when I became careless.",
    "You showed up when I looked away.",
    "And I took it all for granted.",
  ];

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-12 text-center"
        >
          The Realization
        </motion.p>

        <div className="space-y-8">
          {lines.map((line, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.4 + 0.5 }}
              className="font-serif text-xl md:text-2xl text-center text-foreground/90 leading-relaxed"
            >
              {line}
            </motion.p>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 2.5 }}
          className="mt-16 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
        />
      </div>
    </section>
  );
};

export default RealizationSection;
