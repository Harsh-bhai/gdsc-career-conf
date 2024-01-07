"use client";

import React from "react";

const BgHeader = ({ header, bgHeader }) => {
  // const spans = document.querySelectorAll(".heading-outline span");

  // spans.forEach((span, index) => {
  //   span.style.animationDelay = `${index * 0.2}s`; // Adjust delay as needed
  // });
  const bgHeaderArray = bgHeader.split("");
  console.log(bgHeaderArray);
  return (
    <div className="w-full overflow-hidden relative flex flex-col justify-center items-center">
      <div className="text-[19vw] text-center font-garalama text-black z-0 heading-outline">
        {bgHeaderArray.map((item, index) => (
          <span key={index} style={{ animationDelay: `${index * 0.2}s` }}>
            {item}
          </span>
        ))}
      </div>
      <div className="absolute font-garalama text-2xl md:text-7xl z-10">
        {header}
      </div>
    </div>
  );
};

export default BgHeader;
