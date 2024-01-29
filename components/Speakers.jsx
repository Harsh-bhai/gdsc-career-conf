/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import Image from "next/image";
const Speakers = () => {
  const speakers = [
    {
      name: "Hansraj Sharma",
      img: "/hansraj.png",
      title: "Product Management Associate",
      LinkedInUrl: "https://www.linkedin.com/in/hansajsharma",
      topic: "Product Management",
    },
    {
      name: "Dewanch Thakur",
      img: "/dewansh.png",
      title: "Full Stack Developer",
      LinkedInUrl: "https://www.linkedin.com/in/dewanshthakur",
      topic: "Open Source & Remote",
    },
    {
      name: "Nikhil Aparajit",
      img: "/nikhil.png",
      title: "Community Management Specialist",
      LinkedInUrl: "https://www.linkedin.com/in/nikhil-aparajit",
      topic: "WEB3, Community Manager",
    },
    {
      name: "Tejas Agarwal",
      img: "/tejas.png",
      title: "Product Designer",
      LinkedInUrl: "https://www.linkedin.com/in/thetejasagrawal",
      topic: "UI/UX Design",
    },
    {
      name: "Sanskar Tayal",
      img: "/sanskar.png",
      title: "Founder GrainBazaar, Game Developer",
      LinkedInUrl: "https://www.linkedin.com/in/sanskar-tayal-43587b176",
      topic: "Game Development",
    },
    {
      name: "Sanskriti Harmukh",
      img: "/sanskriti.png",
      title: "GtiHub Campus Expert | Developer Advocate",
      LinkedInUrl: "https://www.linkedin.com/in/sanskriti-harmukh/",
      topic: "Git Checkout Opportunities",
    },
  ];
  return (
    <div className="w-5/6  md:flex flex-col justify-center md:gap-28 gap-8 md:mt-56 md:mb-0 my-28 px-4 mx-auto ">
      <div className="flex flex-col justify-center">
        <h2 className="font-secondary md:text-[3.5vw] text-4xl md:p-0 text-center ">
          Meet our Speakers
        </h2>
        <div className="flex flex-wrap md:gap-y-36  gap-12  items-center justify-center mx-auto md:mt-36 my-20">
          {speakers.map(({ name, img, title, LinkedInUrl, topic, index }) => (
            <Link
              href={LinkedInUrl}
              key={index}
              className="md:w-[23vw] w-full h-44 md:border-4 border-2 rounded-[40px] border-primary text-sm grid grid-cols-2"
            >
              <div className="relative">
                <Image
                  src={img}
                  height={300}
                  width={200}
                  alt={name}
                  className="absolute bottom-2 left-2 rounded-l-b-[60px] "
                />
              </div>

              <div className="h-44 flex flex-col justify-center p-4">
                <span className="md:text-lg text-base">{name}</span>
                <span className="text-yellow-500 text-xs block">{title}</span>
                {/* Add additional description or content here */}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Speakers;
