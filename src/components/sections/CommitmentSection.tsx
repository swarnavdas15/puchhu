import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const CommitmentSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const commitments = [
    {
      title: "Better Communication",
      description: "Speaking up instead of shutting down. Sharing thoughts before they become distance.",
    },
    {
      title: "Consistent Appreciation",
      description: "Showing gratitude through actions, not just intentions. Every day, not just when reminded.",
    },
    {
      title: "Emotional Presence",
      description: "Being here—truly here—when you need me. Not just physically, but wholly.",
    },
    {
      title: "Active Effort",
      description: "Choosing us, again and again. Making love a verb, not just a feeling.",
    },
  ];

  return (
    <section ref={ref} className="py-24 px-6 bg-lavender/30">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
            What Changes Now
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground">
            Not promises. Intentions.
          </h2>
        </motion.div>

        <div className="grid gap-6">
          {commitments.map((commitment, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
              className="bg-background/60 backdrop-blur-sm rounded-lg p-6 border border-border/50"
            >
              <h3 className="font-serif text-lg md:text-xl text-foreground mb-2">
                {commitment.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {commitment.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1.5 }}
          className="text-center text-sm text-muted-foreground mt-12 italic"
        >
          These are not empty words. They are the foundation I'm building—one day at a time.
        </motion.p>
      </div>
    </section>
  );
};

export default CommitmentSection;
