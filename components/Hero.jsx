import React from "react";
import Badges from "./Badges";
import { FaCalendarAlt } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="h-screen z-10 py-0">
      <div className="relative">
        {/* Background text */}
        <div className="bg-text font-garalama tracking-widest text-[20em] flex flex-col overflow-x-hidden pt-4 md:block hidden">
          <h1 class="font-outline-2 text-center text-black hover:font-outline-4 relative py-0 -top-24">
            CAREER
          </h1>
          <h1 class="font-outline-2 text-center text-black relative left-[-3em]  -top-[0.85em] whitespace-nowrap">
            TECH TECH TECH
          </h1>
        </div>

        {/* Main Content */}
        <div className="main-text absolute md:top-1/4 md:left-1/2 transform md:-translate-x-1/2 md:-translate-y-1/2 -top-36 left-1/2 -translate-x-1/2 translate-y-3/4 font-secondary md:text-[15em] text-7xl overflow-hidden">
          <div className="flex justify-center items-center h-full mx-auto whitespace-nowrap">
            <h1 className="md:text-center flex md:flex-row flex-col md:gap-20">
              <span>CAREER</span>
              <span>CONF</span>
            </h1>
          </div>
          <div className="flex md:flex-row flex-col md:justify-between items-start">
            <h1>GDSC</h1>
            <h1 className="text-primary">2024</h1>
          </div>
        </div>

        {/* Location and Venue */}
        <div className="p-8 relative md:-top-[11em] top-[20em] left-1/2 transform -translate-x-1/2 flex flex-col gap-8 md:text-3xl text-xl">
          <div className="quote text-center">
            A <span className="text-primary">one-day conference</span> to infuse
            fresh perspectives.
          </div>
          <div className="info flex flex-row gap-4 items-center justify-center font-secondary md:text-4xl">
            <FaCalendarAlt style={{ color: "var(--primary-color)" }} />{" "}
            04.02.2024 &nbsp;
            <FaMapLocationDot style={{ color: "var(--primary-color)" }} /> BIT
            Durg
          </div>
        </div>

        {/* Badges */}
        {/* <div className="relative md:top-[-25em] top-[30em]">
          <Badges />
        </div> */}
      </div>
    </div>
  );
};

export default Hero;
