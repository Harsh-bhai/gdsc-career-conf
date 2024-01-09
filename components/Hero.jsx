import React from "react";
import { motion } from "framer-motion";
import { FaCalendarAlt } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="h-[80vh] md:h-screen z-10 md:mt-0 mt-44"
    >
      <div className="relative">
        {/* Background text */}
        <div className="bg-text font-garalama tracking-widest text-[17vw] flex flex-col overflow-x-hidden pt-4 md:block hidden">
          <h1 className="font-outline-2 text-center text-black hover:font-outline-4 relative py-0 -top-24">
            CAREER
          </h1>
          <h1 className="font-outline-2 text-center text-black relative left-[-3em] -top-[0.85em] whitespace-nowrap">
            TECH TECH TECH
          </h1>
        </div>

        {/* Main Content */}
        <div className="main-text absolute md:top-1/4 md:left-1/2 transform md:-translate-x-1/2 md:-translate-y-1/2 top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/3 font-secondary md:text-[13vw] text-7xl overflow-hidden">
          <div className="flex justify-center items-center h-full mx-auto whitespace-nowrap">
            <h1 className="md:text-center flex md:flex-row flex-col md:gap-20">
              <span>CAREER</span>
              <span>CONF</span>
            </h1>
          </div>
          <div className="flex md:flex-row md:px-40 flex-col md:justify-between items-start">
            <h1>GDSC</h1>
            <h1 className="text-primary">2024</h1>
          </div>
        </div>

        {/* Location and Venue */}
        <div className="p-8 relative md:-top-[11em] top-[15em] left-1/2 transform -translate-x-1/2 flex flex-col gap-8 md:text-3xl text-xl">
          <div className="quote text-center">
            A <span className="text-primary">one-day conference</span> to infuse
            fresh perspectives.
          </div>
          <div className="info flex flex-row gap-4 items-center justify-center font-secondary md:text-4xl">
            <div className="date flex flex-row gap-2">
              <FaCalendarAlt style={{ color: "var(--primary-color)" }} />
              <span>04.02.2024</span>
            </div>
            <div className="loc flex flex-row gap-2">
              <FaMapLocationDot style={{ color: "var(--primary-color)" }} />
              <span>BIT Durg</span>
            </div>
          </div>
        </div>

        {/* Badges */}
        {/* <div className="relative md:top-[-25em] top-[30em]">
          <Badges />
        </div> */}
      </div>
    </motion.div>
  );
};

export default Hero;
