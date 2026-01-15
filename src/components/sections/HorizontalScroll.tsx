import React from "react";

const images: string[] = [
  "https://images.unsplash.com/photo-1523437237164-d442d57cc3c9",
  "https://images.unsplash.com/photo-1421930866250-aa0594cea05c",
  "https://images.unsplash.com/photo-1536152470836-b943b246224c",
  "https://images.unsplash.com/photo-1491824989090-cc2d0b57eb0d",
  "https://images.unsplash.com/photo-1518717202715-9fa9d099f58a",
  "https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7",
  "https://images.unsplash.com/photo-1459213599465-03ab6a4d5931",
  "https://images.unsplash.com/photo-1495107334309-fcf20504a5ab",
  "https://images.unsplash.com/photo-1453791052107-5c843da62d97",
  "https://images.unsplash.com/photo-1471978445661-ad6ec1f5ba50",
  "https://images.unsplash.com/photo-1523978591478-c753949ff840",
  "https://images.unsplash.com/photo-1489549132488-d00b7eee80f1",
  "https://images.unsplash.com/photo-1559827291-72ee739d0d9a",
  "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
  "https://images.unsplash.com/photo-1495312040802-a929cd14a6ab",
  "https://images.unsplash.com/photo-1465147264724-326b45c3c59b",
  "https://images.unsplash.com/photo-1584148721201-b6432e0d5106"
].map(
  (url) =>
    `${url}?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&w=300&q=80`
);

const HorizontalScroll: React.FC = () => {
  return (
    <>
      <h1>Horizontal Scroll</h1>

      <div className="track-wrapper">
        <ul className="track">
          {images.map((src, index) => (
            <li className="track__item" key={index}>
              <img src={src} alt={`img-${index}`} />
            </li>
          ))}
        </ul>
      </div>

      <style>{`
        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }

        body {
          background: #e5e7eb;
          display: grid;
          place-items: center;
          min-height: 100vh;
          font-family: system-ui, sans-serif;
        }

        .track-wrapper {
          width: 80%;
          overflow: hidden;
          -webkit-mask:
            linear-gradient(90deg, transparent 0, black 15% 85%, transparent),
            linear-gradient(0deg, black, black),
            linear-gradient(0deg, black, black);
          -webkit-mask-size:
            100% calc(100% - 2rem),
            100% 1rem,
            100% 1rem;
          -webkit-mask-position:
            0 50%,
            50% 0,
            50% 100%;
          -webkit-mask-repeat: no-repeat;
        }

        .track {
          --size: clamp(200px, 40vmin, 50rem);
          height: var(--size);
          display: flex;
          gap: 1rem;
          padding: 1rem 33%;
          list-style: none;
          margin: 0;
          overflow-x: auto;
          scroll-snap-type: x mandatory;

          -webkit-mask:
            radial-gradient(#0000 0 30%, #000 30.5%) 50%
              calc(var(--size) * 0.5) / 300% 100%,
            linear-gradient(0deg, black, black) 50% 0 / 100% 1rem,
            linear-gradient(0deg, black, black) 50% 100% / 100% 1rem;
          -webkit-mask-repeat: no-repeat;
        }

        .track__item {
          height: 100%;
          aspect-ratio: 1;
          scroll-snap-align: center;
          background: #ef4444;
        }

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        h1 {
          position: fixed;
          bottom: 1rem;
          right: 1rem;
          margin: 0;
          opacity: 0.5;
          font-size: 1rem;
        }
      `}</style>
    </>
  );
};

export default HorizontalScroll;
