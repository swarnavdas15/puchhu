import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Envelop = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleReadMore = () => {
    setIsOpen(true);
    setTimeout(() => {
      navigate("/index");
    }, 900);
  };

  return (
    <div className="bg-gradient-to-r from-slate-200 via-red-300 to-gray-400 grid place-content-center min-h-screen px-3">
      <div
        className={`
          group relative bg-black
          w-[92vw] max-w-[600px]
          sm:max-w-[700px]
          md:max-w-[800px]
          aspect-video
          transition-all duration-700
          flex items-center justify-center
          ${isOpen ? "open-letter" : ""}
        `}
      >
        {/* LETTER */}
        <div
           className={`
    absolute inset-0
    bg-white text-center
    overflow-hidden
    pt-3 sm:pt-5
    max-h-[85%] sm:max-h-full
    transition-all duration-300
    group-hover:duration-1000
    open-letter:duration-1000
    group-hover:-translate-y-16
    open-letter:-translate-y-16
    sm:group-hover:-translate-y-16
    sm:open-letter:-translate-y-16
  `}
        >
          {/* shape helpers */}
          <div className="w-1/2 h-full float-left [shape-outside:polygon(0_25%,100%_80%,100%_100%,0_100%)]" />
          <div className="w-1/2 h-full float-right [shape-outside:polygon(0_80%,100%_25%,100%_100%,0_100%)]" />

          {/* CONTENT */}
          <div
             className={`
    transition-all duration-500 delay-200
    opacity-100 visible
    sm:opacity-0 sm:invisible
    sm:group-hover:opacity-100 sm:group-hover:visible
    ${isOpen ? "sm:opacity-100 sm:visible" : ""}
  `}
          >
            <p className="text-sm sm:text-xl md:text-2xl font-semibold text-gray-500 font-serif px-2">
              Thank you for reading so far…
            </p>

            {/* MOBILE-SAFE TEXT WRAPPER */}
            <div
              className="
                mx-auto
                w-full
                max-w-[92%]
                sm:max-w-[85%]
                md:max-w-[80%]
                px-4
                sm:px-[clamp(14px,4vw,30px)]
                mt-3
              "
            >
              <p
                className="
                  text-[11px]
                  sm:text-[12px]
                  md:text-sm
                  text-gray-700
                  leading-[1.55]
                  sm:leading-relaxed
                  text-center
                  break-words
                "
              >
                This letter is just a small token of my appreciation to Puchuu
                for everything you have done. Your love, support, and
                understanding have meant the world to me. I hope this letter
                brings a smile to your face and expresses my true emotions.
                Thank you for being my half brain cell—without you, I would be
                lost.
              </p>
            </div>
         {/* MOBILE READ MORE */}
<div className="hidden sm:block mt-4">
  <button onClick={handleReadMore}>
    <span className="px-4 py-2 bg-rose-500 text-white rounded-full text-xs">
      Read More
    </span>
  </button>
</div>
{/* DESKTOP READ MORE */}
<div className="visible sm:hidden mt-1">
  <button onClick={handleReadMore}>
    <span className="px-4 py-1 bg-rose-500 text-white rounded-full text-sm hover:bg-rose-600 transition">
      Read More
    </span>
  </button>
</div>
          </div>
        </div>

        {/* SEAL */}
        <button
          type="button"
          className="
            seal bg-rose-500 text-slate-100
            size-9 sm:size-10
            aspect-square rounded-full
            z-40 text-[0.65rem] sm:text-[0.7rem]
            grid place-content-center
            [clip-path:polygon(50%_0%,80%_10%,100%_35%,100%_70%,80%_90%,50%_100%,20%_90%,0_70%,0_35%,20%_10%)]
            border-4 border-rose-900
            transition-all duration-1000
            group-hover:opacity-0 group-hover:scale-0 group-hover:rotate-180
            open-letter:opacity-0 open-letter:scale-0 open-letter:rotate-180
          "
        >
          open
        </button>

        {/* ENVELOPE PARTS */}
        <div className="absolute inset-0 bg-neutral-800 transition-all duration-1000 group-hover:duration-100 open-letter:duration-100 [clip-path:polygon(50%_50%,100%_0,0_0)] group-hover:[clip-path:polygon(50%_0,100%_0,0_0)] open-letter:[clip-path:polygon(50%_0,100%_0,0_0)]" />
        <div className="absolute inset-0 bg-neutral-900 [clip-path:polygon(50%_50%,0_0,0_100%)]" />
        <div className="absolute inset-0 bg-neutral-800 [clip-path:polygon(50%_50%,100%_0,100%_100%)]" />
        <div className="absolute inset-0 bg-neutral-900 [clip-path:polygon(50%_50%,100%_100%,0_100%)]" />
      </div>
    </div>
  );
};

export default Envelop;
