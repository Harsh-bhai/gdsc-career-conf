import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative flex flex-col items-center h-[90vh] z-10 mt-24">
      <div className="main-heading flex flex-col mx-auto justify-center">
        <div className="img-container relative h-[55vh]">
          <Image
            src={"/Conf-Owl.png"}
            alt="GDSC Conf"
            fill={true}
            objectFit="contain"
          ></Image>
          <div className="absolute bottom-0 w-full h-8 bg-gradient-to-t from-dark via-30% via-dark to-transparent md:block hidden"></div>
        </div>
        <div className="header flex flex-col items-center justify-center md:text-[9vw] text-[12vw] tracking-wide	leading-none font-header md:-mt-12 -mt-24 z-10">
          <div className="text-gradient bg-clip-text text-transparent bg-gradient-to-t from-dark via-60%  via-fade to-primary">
            CAREER CONF
          </div>
          <div className="md:-mt-12 -mt-4 text-gradient bg-clip-text text-transparent bg-gradient-to-t from-dark to-white">
            GDSC 2024
          </div>
        </div>
      </div>

      <motion.div
        className="scroll-to-move flex justify-center absolute md:bottom-8 bottom-44 md:text-2xl text-xl text-gray-500"
        initial={{ y: 0 }} // Initial position
        animate={{
          y: [0, -15, 0],
          transition: { duration: 1, repeat: Infinity, repeatDelay: 1.5 },
        }}
      >
        Scroll Down To Move
      </motion.div>

      {/* Location and Venue */}
      {/* <div className="p-8 relative md:-top-[13em] top-[15em] left-1/2 transform -translate-x-1/2 flex flex-col gap-8 md:text-3xl text-xl">
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
      </div> */}
    </div>
  );
};

export default Hero;
