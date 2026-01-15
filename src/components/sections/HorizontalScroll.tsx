import React, { useEffect, useRef } from "react";

const images = [
  "https://images.unsplash.com/photo-1523437237164-d442d57cc3c9",
  "https://images.unsplash.com/photo-1421930866250-aa0594cea05c",
  "https://images.unsplash.com/photo-1536152470836-b943b246224c",
  "https://images.unsplash.com/photo-1491824989090-cc2d0b57eb0d",
  "https://images.unsplash.com/photo-1518717202715-9fa9d099f58a",
  "https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7",
  "https://images.unsplash.com/photo-1459213599465-03ab6a4d5931",
  "https://images.unsplash.com/photo-1495107334309-fcf20504a5ab",
  "https://images.unsplash.com/photo-1453791052107-5c843da62d97",
  "https://images.unsplash.com/photo-1471978445661-ad6ec1f5ba50"
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
