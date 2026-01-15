import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Envelop = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleReadMore = () => {
    setIsOpen(true);
    setTimeout(() => {
      navigate('/index');
    }, 1000);
  };

  return (
    <div className="bg-gradient-to-r from-slate-800 via-red-500 to-slate-950 grid place-content-center min-h-screen">
      <div className={`group relative bg-black w-[600px] sm:w-[750px] transition-all duration-700 aspect-video flex items-center justify-center ${isOpen ? 'open-letter' : ''}`}>
        {/* letter */}
        <div className="transition-all pt-3 justify-start duration-300 group-hover:duration-1000 open-letter:duration-1000 w-full h-full absolute group-hover:-translate-y-16 open-letter:-translate-y-16 bg-white text-center">
          {/* clip left */}
          <div className="w-1/2 h-full float-left [shape-outside:polygon(0_25%,100%_80%,100%_100%,0_100%)]"></div>
          {/* clip right */}
          <div className="w-1/2 h-full float-right [shape-outside:polygon(0_80%,100%_25%,100%_100%,0_100%)]"></div>
          {/* letter contents */}
          <p className="text-xl sm:text-2xl font-semibold text-gray-500 font-serif">
            Thank You  for reading  so far ...
          </p>
          <p className="px-10 m-3 text-[10px] sm:text-[12px] text-gray-700">
            This letter is just a small token of my appreciation to Puchuu for everything you've done. Your love, support, and understanding have meant the world to me. I hope this letter brings a smile to your face and express my true emotion to you . Thank you for being my Half Brain cell else I would die without you my Bokri.
          </p>
          <button onClick={handleReadMore} className="cursor-pointer">
            <span className="inline-block mt-4 px-4 py-2 bg-rose-500 text-slate-100 rounded-full text-sm hover:bg-rose-600 transition-colors duration-300 cursor-pointer">Read More</span>
          </button>
        </div>
        {/* button/seal */}
        <button type="button" className="seal bg-rose-500 text-slate-100 size-10 aspect-square rounded-full z-40 text-[0.7rem] grid place-content-center [clip-path:polygon(50%_0%,_80%_10%,_100%_35%,_100%_70%,_80%_90%,_50%_100%,_20%_90%,_0%_70%,_0%_35%,_20%_10%)] group-hover:opacity-0 open-letter:opacity-0 transition-all duration-1000 group-hover:scale-0 open-letter:scale-0 group-hover:rotate-180 open-letter:rotate-180 border-4 border-rose-900">open</button>
        {/* envelope - top */}
        <div className="w-full h-full transition-all duration-1000 group-hover:duration-100 open-letter:duration-100 bg-neutral-800 absolute group-hover:[clip-path:polygon(50%_0%,_100%_0,_0_0)] open-letter:[clip-path:polygon(50%_0%,_100%_0,_0_0)] [clip-path:polygon(50%_50%,_100%_0,_0_0)]"></div>
        {/* envelope - left */}
        <div className="transition-all duration-700 absolute w-full h-full bg-neutral-900 [clip-path:polygon(50%_50%,_0_0,_0_100%)] X-opacity-70"></div>
        {/* envelope - right */}
        <div className="transition-all duration-700 absolute w-full h-full bg-neutral-800 [clip-path:polygon(50%_50%,_100%_0,_100%_100%)] X-opacity-70"></div>
        {/* envelope - bottom */}
        <div className="transition-all duration-700 absolute w-full h-full bg-neutral-900 [clip-path:polygon(50%_50%,_100%_100%,_0_100%)] X-opacity-70"></div>
      </div>
    </div>
  );
};

export default Envelop;
