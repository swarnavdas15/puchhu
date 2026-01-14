import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const ApologySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayedText, setDisplayedText] = useState("");
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  const lines = [
    "I'm sorry for the silence when you needed words.",
    "I'm sorry for the distance when you reached for closeness.",
    "I'm sorry for taking your love as guaranteed.",
    "I'm sorry for every moment I made you feel unseen.",
  ];

  useEffect(() => {
    if (isInView && currentLineIndex < lines.length) {
      setIsTyping(true);
      const line = lines[currentLineIndex];
      let charIndex = 0;

      const typingInterval = setInterval(() => {
        if (charIndex <= line.length) {
          setDisplayedText(line.slice(0, charIndex));
          charIndex++;
        } else {
          clearInterval(typingInterval);
          setIsTyping(false);
          setTimeout(() => {
            setCurrentLineIndex((prev) => prev + 1);
          }, 1500);
        }
      }, 50);

      return () => clearInterval(typingInterval);
    }
  }, [isInView, currentLineIndex]);

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-12"
        >
          I'm Sorry
        </motion.p>

        <div className="min-h-[200px] flex flex-col justify-center">
          {/* Completed lines */}
          {lines.slice(0, currentLineIndex).map((line, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0.5 }}
              animate={{ opacity: 0.6 }}
              className="font-serif text-xl md:text-2xl text-foreground/60 leading-relaxed mb-6"
            >
              {line}
            </motion.p>
          ))}

          {/* Currently typing line */}
          {currentLineIndex < lines.length && (
            <p className="font-serif text-xl md:text-2xl text-foreground leading-relaxed mb-6">
              {displayedText}
              {isTyping && (
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                  className="inline-block w-0.5 h-6 bg-primary ml-1 align-middle"
                />
              )}
            </p>
          )}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView && currentLineIndex >= lines.length ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-serif text-lg italic text-muted-foreground mt-8"
        >
          I know words don't undo hurt. But silence won't heal it either.
        </motion.p>
      </div>
    </section>
  );
};

export default ApologySection;
