import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const ClosingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Editable values
  const partnerName = "My Love";
  const currentDate = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center py-24 px-6 bg-gradient-to-b from-background to-warm-beige/30">
      <div className="max-w-2xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-12"
        >
          If You're Willing
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          className="space-y-8"
        >
          <p className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground leading-relaxed">
            I don't ask you to forget.
          </p>

          <p className="font-serif text-xl md:text-2xl text-muted-foreground leading-relaxed">
            I only ask for a chance to be better—consistently.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 1 }}
          className="my-16 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="space-y-4"
        >
          <p className="font-serif text-3xl md:text-4xl text-foreground italic">
            {partnerName}
          </p>
          <p className="text-sm text-muted-foreground tracking-wide">
            {currentDate}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 2 }}
          className="mt-20"
        >
          <p className="text-xs text-muted-foreground/50 italic">
            With all my heart, imperfect as it is.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ClosingSection;
