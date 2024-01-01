import React from "react";
import Badges from "./Badges";

const Hero = () => {
  return (
    <div className="h-screen z-10 py-0">
      <div className="relative">
        {/* Background text */}
        <div className="bg-text font-garalama tracking-widest text-[20em] flex flex-col overflow-x-hidden pt-4">
          <h1 class="font-outline-2 text-center text-black hover:font-outline-4 relative py-0 -top-28">
            CAREER
          </h1>
          <h1 class="font-outline-2 text-center text-black relative left-[-3em]  -top-[0.95em] whitespace-nowrap">
            CAREER TECH
          </h1>
        </div>

        {/* Main Content */}
        <div className="main-text absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-secondary md:text-[13em] text-5xl overflow-hidden">
          <div className="flex justify-center items-center h-full mx-auto whitespace-nowrap">
            <h1 className="text-center">CAREER CONF</h1>
          </div>
          <div className="flex flex-row justify-between">
            <h1>GDSC</h1>
            <h1 className="text-primary">2024</h1>
          </div>
        </div>
        {/* Badges */}
        <div className="relative top-[-30em]">
          <Badges />
        </div>
      </div>
    </div>
  );
};

export default Hero;
