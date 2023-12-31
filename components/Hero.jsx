import React from "react";

const Hero = () => {
  return (
    <div className="h-screen z-10">
      <div className="bg-text font-garalama text-[12em] flex flex-col">
        <div className="upper-text text-black relative">
          <span className="absolute top-0 left-0 text-white -z-1 w-screen">
            CAREER
          </span>
          <span className="relative">CAREER</span>
        </div>

        <div className="lower-text text-black relative">
          <span className="absolute top-0 left-0 text-white -z-1">
            CAREER TECH
          </span>
          <span className="relative ">CAREER TECH</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
