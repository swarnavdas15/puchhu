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
            pt-4 pb-6

            /* mobile */
            overflow-y-auto

            /* desktop */
            sm:overflow-hidden

            transition-all duration-300
            group-hover:-translate-y-14
            open-letter:-translate-y-14
            sm:group-hover:-translate-y-16
            sm:open-letter:-translate-y-16
          `}
        >
          {/* ================= DESKTOP CONTENT ================= */}
          <div className="hidden sm:block">
            {/* shape helpers (desktop only) */}
            <div className="w-1/2 h-full float-left [shape-outside:polygon(0_25%,100%_80%,100%_100%,0_100%)]" />
            <div className="w-1/2 h-full float-right [shape-outside:polygon(0_80%,100%_25%,100%_100%,0_100%)]" />

            <p className="text-xxl md:text-4xl font-semibold text-gray-500 font-serif px-2">
              Thank you for reading so far…
            </p>

            <div className="mx-auto max-w-[72%] px-6 mt-5">
              <p className="text-sm text-gray-700 leading-relaxed text-center">
                This letter is just a small token of my appreciation to Puchuu
                for everything you have done. Your love, support, and
                understanding have meant the world to me. I hope this letter
                brings a smile to your face and expresses my true emotions.
                Thank you for being my half brain cell—without you, I would be
                lost.
              </p>
            </div>

            <div className="mt-4">
              <button onClick={handleReadMore}>
                <span className="px-4 py-2 bg-rose-500 text-white rounded-full text-sm hover:bg-rose-600 transition">
                  Read More
                </span>
              </button>
            </div>
          </div>

          {/* ================= MOBILE CONTENT ================= */}
          <div className="block sm:hidden px-6 text-center">
            <p className="text-base font-semibold text-gray-500 font-serif">
              Thank you for reading so far…
            </p>

            <p className="mt-3 text-[10px] text-gray-700 leading-relaxed px-1">
              Puchuu !  I dont have Wealth like Shah Jahan but a little gesture of applogy I crafted for you , Kindly accept it and Forgive  this Garib Shah Jahan ...
            </p>

            <div className="mt-4">
              <button onClick={handleReadMore}>
                <span className="px-4 py-1 bg-rose-500 text-white rounded-full text-sm">
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
