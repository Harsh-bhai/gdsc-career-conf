import React from "react";
import { useRef } from "react";

function Timeline() {
  const partsScrollRef = useRef(null);
  const timelineData = JSON.parse(`[
    {
      "time": "01:00 PM",
      "title": "Check-In Starts"
    },
    {
      "time": "04:00 PM",
      "title": "Opening Ceremony"
    },
    {
      "time": "07:00 PM",
      "title": "Hacking Hours Start"
    },
    {
      "time": "11:00 PM",
      "title": "Mentoring R1"
    },
    {
      "time": "01:00 AM",
      "title": "Mini Event 01"
    },
    {
      "time": "08:00 AM",
      "title": "Mentoring R2"
    },
    {
      "time": "11:00 AM",
      "title": "Speaker Session 01"
    },
    {
      "time": "03:30 PM",
      "title": "Judging R1"
    },
    {
      "time": "06:30 PM",
      "title": "Speaker Session 02"
    },
    {
      "time": "09:30 PM",
      "title": "Mentoring R3"
    },
    {
      "time": "12:00 AM",
      "title": "Mini Event 02"
    },
    {
      "time": "03:00 AM",
      "title": "Games"
    },
    {
      "time": "07:00 AM",
      "title": "Hacking Hours End"
    },
    {
      "time": "08:00 AM",
      "title": "Final Submission"
    },
    {
      "time": "08:30 AM",
      "title": "Final Judging Round"
    },
    {
      "time": "11:00 AM",
      "title": "Closing Ceremony"
    }
  ]`);

  return (
    <div className="h-80 mt-10 md:mt-40" id="timeline">
      <h2 className="font-secondary md:text-[3.5vw] text-4xl md:p-0 text-center ">
          Timeline
        </h2>
      <div
        className="w-screen overflow-auto flex  items-center snap-x snap-mandatory  pl-[calc((10vw-100px))] h-40 relative my-7 scrollbar-thin"
        ref={partsScrollRef}
      >
        <div className="absolute  left-0 h-full   border-b-2 boder-white border-dashed   w-screen -z-1  -top-[calc(50%-23.5px)] md:-top-[calc(50%-21px)]  "></div>

        {timelineData.map((part, index) => (
          <div key={index} className="text-yellow-500 z-1 text-center text-xl md:text-base p-2 snap-center leading-normal font-black flex items-center justify-center relative md:w-[200px] w-[350px] shrink-0 border-b-2 before:content=[''] before:absolute before:h-2 before:w-6 before:rounded-full before:bg-primary before:left-1/2 before:bottom-0 before:-translate-x-[50%] before:translate-y-[50%]">
            <div className="relative">
              <div>{part.time}</div>
              {/* <div className="absolute -top-8  left-1/2 -translate-x-1/2 px-4 py-[2px] flex justify-center items-center text-center font-tertiary text-sm whitespace-nowrap border-primary border-[1px] rounded-full bg-green-300/20 md:text-sm text-primary ">
                {index < 4 ? "DAY 1" : index < 10 ? "DAY 2" : "DAY 3"}
              </div> */}
            </div>
            <div className="font-tertiary absolute -bottom-10 text-white">
              {part.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Timeline;
