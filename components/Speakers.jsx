import React from "react";
import Link from "next/link";
import Image from "next/image";
const Speakers = () => {
  const speakers = [
    {
      name: "Hansraj Sharma",
      img: "/tejas bkr 1.png",
      title: "Product Management Associate",
      LinkedInUrl: "https://www.linkedin.com/in/hansajsharma",
      topic: "Product Mangement",
    },
    {
      name: "Dewanch Thakur",
      img: "/tejas bkr 1.png",
      title: "Full Stack Developer",
      LinkedInUrl: "https://www.linkedin.com/in/dewanshthakur",
      topic: "Open Source & Remote",
    },
    {
      name: "Nikhil Aparajit",
      img: "/tejas bkr 1.png",
      title: "Community Management Specialist",
      LinkedInUrl: "https://www.linkedin.com/in/nikhil-aparajit",
      topic: "WEB3, Community Manager",
    },
    {
      name: "Tejas Agarwal",
      img: "/tejas bkr 1.png",
      title: "Product Designer",
      LinkedInUrl: "https://www.linkedin.com/in/thetejasagrawal",
      topic: "UI/UX Design",
    },
    {
      name: "Sanskar Tayal",
      img: "/tejas bkr 1.png",
      title: "Founder GrainBazaar, Game Developer",
      LinkedInUrl: "https://www.linkedin.com/in/sanskar-tayal-43587b176",
      topic: "Game Development",
    },
  ];
  return (
    <div
      className="w-screen md:mt-56 hidden
    md:mb-0 my-28 px-4  mx-auto min-h-screen md:flex flex-col justify-center md:gap-20 gap-8"
    >
      <div className="community-partners flex flex-col justify-center">
        <h2 className="font-secondary md:text-[3.5vw] text-4xl md:p-0  text-center ">
          Meet our incredible Sponsors
        </h2>
        <div className="s-row grid grid-cols-1 gap-x-4 gap-y-16 md:grid-cols-3 w-4/5 mx-auto md:my-[4rem] my-[2.5rem]">
          {speakers.map(({ name, img, title, LinkedInUrl, topic, index }) => (
            <div
              key={index}
              className=" border-l-4 border-t-4 border-[6px] rounded-2xl border-indigo-500 text-sm flex items-center space-x-10"
            >
              <Image
                src={img}
                width={1600}
                height={900}
                className="w-1/2"
                alt={name}
                srcset=""
              />
              <div className="flex flex-col text-left ">
                <span className="text-sm">{name}</span>
                <span className="text-red-500 text-xs">
                  {title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Speakers;

// {speakers.map(({ name, img, title, LinkedInUrl, topic,index }) => (
//   <Link
//     target="blank"
//     className="s-col border-2 border-text flex items-center justify-center md:py-auto py-8 px-12 z-10"
//     href={LinkedInUrl}
//     id={name.toLowerCase()}
//     key={index}
//   >
// <Image
//   src={img}
//   width={1600}
//   height={900}
//   className="w-90"
//   alt={name}
//   srcset=""
// />
//   </Link>
// ))}
