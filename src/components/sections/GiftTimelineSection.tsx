import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Heart } from "lucide-react";

interface Gift {
  phase: string;
  title: string;
  meaning: string;
}

const gifts: Gift[] = [
  {
    phase: "When I was lost",
    title: "Your patience",
    meaning: "You waited for me to find myself, never rushing, never leaving.",
  },
  {
    phase: "When I was silent",
    title: "Your understanding",
    meaning: "You heard what I couldn't say and loved me through my quiet.",
  },
  {
    phase: "When I forgot to try",
    title: "Your consistency",
    meaning: "You kept showing up, even when I stopped meeting you halfway.",
  },
  {
    phase: "Every single day",
    title: "Your love",
    meaning: "Unconditional, unwavering, undeserved—yet freely given.",
  },
];

const GiftCard = ({ gift, index }: { gift: Gift; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative"
    >
      <div className="flex items-start gap-6 md:gap-8">
        {/* Timeline dot */}
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-10 h-10 rounded-full bg-blush/50 flex items-center justify-center"
          >
            <Heart className="w-4 h-4 text-soft-rose" />
          </motion.div>
          {index < gifts.length - 1 && (
            <motion.div
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="w-px h-24 bg-gradient-to-b from-primary/30 to-transparent origin-top"
            />
          )}
        </div>

        {/* Content */}
        <div className="flex-1 pb-8">
          <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">
            {gift.phase}
          </p>
          <h3 className="font-serif text-xl md:text-2xl text-foreground mb-3">
            {gift.title}
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            {gift.meaning}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const GiftTimelineSection = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section className="py-24 px-6 bg-ivory/50">
      <div className="max-w-2xl mx-auto">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Things You Gave Me
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground">
            Gifts I failed to cherish
          </h2>
        </motion.div>

        <div className="space-y-2">
          {gifts.map((gift, index) => (
            <GiftCard key={index} gift={gift} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GiftTimelineSection;
