import React from "react";
import { useRef } from "react";

function Timeline() {
  const partsScrollRef = useRef(null);
  const timelineData = [
    {
      time: "09:00 AM",
      title: "Check-In Starts",
    },
    {
      time: "10:45 AM",
      title: "Speaker 1: Tejas Agarwal",
    },
    {
      time: "11:35 AM",
      title: "Speaker 2: Hansaj Sharma",
    },
    {
      time: "12:10 PM",
      title: "Sponsor Section: Sanskriti Harmukh",
    },
    {
      time: "12:40 PM",
      title: "Lunch 🍔",
    },
    {
      time: "02:00 PM",
      title: "Speaker 3: Nikhil Aparjit",
    },
    {
      time: "02:45 PM",
      title: "Speaker 4: Sanskar Tayal",
    },
    {
      time: "03:30 PM",
      title: "Speaker 5: Dewansh Thakur",
    },
    {
      time: "04:20 PM",
      title: "Closing Ceremony",
    },
  ];

  return (
    <div className="h-auto md:my-36" id="timeline">
      <h1 className="font-secondary text-white text-center px-8 md:text-[3.5vw] text-4xl pt-14 font-karrera ">
        Timeline
      </h1>
      <div
        className="w-screen overflow-x-auto flex  items-center snap-x snap-mandatory  pl-[calc((50vw-100px))] md:h-64 h-48 relative mb-7 md:scrollbar-thin"
        style={{
          scrollbarWidth: "thin", // Firefox
          scrollbarColor: "var(--primary-color) #fff", // Firefox
        }}
        ref={partsScrollRef}
      >
        <div className="absolute left-0 h-full border-b-2 boder-white border-dashed   w-screen -z-1  md:-top-[calc(50%-21px)] -top-[calc(50%-24px)] md:-top-[calc(50%-21px)]  "></div>
        {timelineData.map((part, index) => (
          <div
            className="text-white z-1 text-center text-xl md:text-base p-2 snap-center leading-normal font-black flex items-center justify-center relative md:w-[200px] w-[350px] shrink-0 border-b-2 before:content=[''] before:absolute before:h-2 before:w-6 before:rounded-full before:bg-primary before:left-1/2 before:bottom-0 before:-translate-x-[50%] before:translate-y-[50%]"
            key={index}
          >
            <div className="relative">
              <div>{part.time}</div>
            </div>
            <div className="font-secondary absolute top-16 flex items-center text-yellow-300">
              {part.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Timeline;
