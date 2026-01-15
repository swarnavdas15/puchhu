import React, { useEffect, useRef } from "react";

const images = [
  "https://raw.githubusercontent.com/swarnavdas15/personal-doc/refs/heads/main/document/WhatsApp%20Image%202026-01-15%20at%2016.42.09.jpeg",
  "https://raw.githubusercontent.com/swarnavdas15/personal-doc/refs/heads/main/document/WhatsApp%20Image%202026-01-15%20at%2016.39.15%20(1).jpeg",
  "https://raw.githubusercontent.com/swarnavdas15/personal-doc/refs/heads/main/document/WhatsApp%20Image%202026-01-15%20at%2016.39.15.jpeg",

  "https://raw.githubusercontent.com/swarnavdas15/personal-doc/refs/heads/main/document/WhatsApp%20Image%202026-01-15%20at%2016.39.17%20(1).jpeg",
  "https://raw.githubusercontent.com/swarnavdas15/personal-doc/refs/heads/main/document/WhatsApp%20Image%202026-01-15%20at%2016.39.17.jpeg",
  "https://raw.githubusercontent.com/swarnavdas15/personal-doc/refs/heads/main/document/WhatsApp%20Image%202026-01-15%20at%2016.39.18%20(1).jpeg",
  "https://raw.githubusercontent.com/swarnavdas15/personal-doc/refs/heads/main/document/WhatsApp%20Image%202026-01-15%20at%2016.39.18%20(2).jpeg",
  "https://raw.githubusercontent.com/swarnavdas15/personal-doc/refs/heads/main/document/WhatsApp%20Image%202026-01-15%20at%2016.39.18.jpeg",
  "https://raw.githubusercontent.com/swarnavdas15/personal-doc/refs/heads/main/document/WhatsApp%20Image%202026-01-15%20at%2016.39.19%20(1).jpeg",
  "https://raw.githubusercontent.com/swarnavdas15/personal-doc/refs/heads/main/document/WhatsApp%20Image%202026-01-15%20at%2016.39.19%20(2).jpeg",
  "https://raw.githubusercontent.com/swarnavdas15/personal-doc/refs/heads/main/document/WhatsApp%20Image%202026-01-15%20at%2016.39.19.jpeg",
].map(
  (url) =>
    `${url}?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&w=600&q=80`
);

const HorizontalScroll: React.FC = () => {
  const trackRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
  const track = trackRef.current;
  if (!track) return;

  let current = 0;
  let target = 0;
  let rafId: number;

  const lerp = (start: number, end: number, amt: number) =>
    start + (end - start) * amt;

  const animate = () => {
    current = lerp(current, target, 0.05); // smoothness factor
    track.scrollLeft = current;

    if (Math.abs(current - target) > 0.5) {
      rafId = requestAnimationFrame(animate);
    }
  };

  const onScroll = () => {
    const rect = track.getBoundingClientRect();
    const vh = window.innerHeight;

    if (rect.top > vh || rect.bottom < 0) return;

    const progress =
      1 - Math.min(Math.max(rect.top / vh, 0), 1);

    const maxScroll =
      track.scrollWidth - track.clientWidth;

    target = progress * maxScroll;

    cancelAnimationFrame(rafId);
    rafId = requestAnimationFrame(animate);
  };

  window.addEventListener("scroll", onScroll, { passive: true });

  return () => {
    window.removeEventListener("scroll", onScroll);
    cancelAnimationFrame(rafId);
  };
}, []);


  return (
    <section className="hs-section">
      <div className="hs-track-wrapper">
        <ul className="hs-track" ref={trackRef}>
          {images.map((src, i) => (
            <li className="hs-item" key={i}>
              <img src={src} alt="" />
            </li>
          ))}
        </ul>
      </div>

      <style>{`
        .hs-section {
          height: 60vh;
          display: flex;
          align-items: center;
          width: 100%;
        }

        .hs-track-wrapper {
          width: 100%;
          overflow: hidden;

          -webkit-mask:
            linear-gradient(
              90deg,
              transparent 0,
              black 15% 85%,
              transparent
            ) 0 50% / 100% calc(100% - 3rem) no-repeat,
            linear-gradient(0deg, black, black) 50% 0 / 100% 1.5rem no-repeat,
            linear-gradient(0deg, black, black) 50% 100% / 100% 1.5rem no-repeat;
        }

        .hs-track {
          --size: clamp(420px, 60vmin, 1000px);

          height: var(--size);
          display: flex;
          gap: 1.5rem;
          list-style: none;
          margin: 0;
          padding: 2.5rem 42%;

          overflow-x: auto;
          scroll-snap-type: x mandatory;
          scrollbar-width: none;

          -webkit-mask:
            radial-gradient(#0000 0 30%, #000 30.5%)
              50% calc(var(--size) * 0.5) / 300% 100%,
            linear-gradient(0deg, black, black)
              50% 0 / 100% 1.5rem no-repeat,
            linear-gradient(0deg, black, black)
              50% 100% / 100% 1.5rem no-repeat;
        }

        .hs-track::-webkit-scrollbar {
          display: none;
        }

        .hs-item {
          height: 100%;
          aspect-ratio: 1;
          scroll-snap-align: center;
          background: hsl(0 80% 50%);
          flex: 0 0 auto;
        }

        .hs-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
      `}</style>
    </section>
  );
};

export default HorizontalScroll;
