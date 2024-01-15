import React from "react";
import ArrowList from "./AboutInfoItem";

const AboutInfo = () => {
  const arrowinfo = [
    "Get To Know About 	The Unexplored Paths In Tech",
    "Deep Dive Into Current Trends In the Tech",
    "Learn About Emerging Fields In Tech",
    "Connect With Like Minded Individuals and Professionals",
  ];
  return (
    <div className="flex flex-col w-5/6 items-end mx-auto" id="arrowList">
      <div className="md:flex md:flex-col md:gap-8 hidden">
        {arrowinfo.map((item, index) => {
          return <ArrowList key={index} description={item} />;
        })}
      </div>
    </div>
  );
};

export default AboutInfo;
