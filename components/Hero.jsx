import React from "react";

const Hero = () => {
  return (
    <div className="h-screen z-10 py-0">
      <div className="relative">
        {/* Background text */}
        <div className="relative bg-text font-garalama tracking-widest text-[25em] flex flex-col overflow-x-hidden">
          <div className="text-black text-center relative py-0 -top-28">
            <span className="absolute top-0 left-0 text-white/80 text-center w-screen -z-1">
              CAREER
            </span>
            <span className="relative">CAREER</span>
          </div>

          <div className="lower-text text-black relative left-[-3em]  -top-[0.95em] whitespace-nowrap">
            <span className="absolute top-0 left-0 text-white/80 -z-1 text-nowrap">
              CAREER TECH
            </span>
            <span className="relative ">CAREER TECH</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="main-text absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-secondary md:text-[15em] text-5xl overflow-hidden">
          <div className="flex justify-center items-center h-full mx-auto whitespace-nowrap">
            <h1 className="text-center">CAREER CONF</h1>
          </div>
          <div className="flex flex-row justify-between">
            <h1>GDSC</h1>
            <h1 className="text-primary">2024</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
