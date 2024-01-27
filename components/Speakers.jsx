import React from "react";

const Speakers = () => {
  const speakers = [
    {
      name: "Hansraj Sharma",
      title: "Product Management Associate",
      LinkedInUrl: "https://www.linkedin.com/in/hansajsharma",
      topic: "Product Mangement",
    },
    {
      name: "Dewanch Thakur",
      title: "Full Stack Developer",
      LinkedInUrl: "https://www.linkedin.com/in/dewanshthakur",
      topic: "Open Source & Remote",
    },
    {
      name: "Nikhil Aparajit",
      title: "Community Management Specialist",
      LinkedInUrl: "https://www.linkedin.com/in/nikhil-aparajit",
      topic: "WEB3, Community Manager",
    },
    {
      name: "Tejas Agarwal",
      title: "Product Designer",
      LinkedInUrl: "https://www.linkedin.com/in/thetejasagrawal",
      topic: "UI/UX Design",
    },
    {
      name: "Sanskar Tayal",
      title: "Founder GrainBazaar, Game Developer",
      LinkedInUrl: "https://www.linkedin.com/in/sanskar-tayal-43587b176",
      topic: "Game Development",
    },
  ];
  return (
    <div className="w-screen my-20 px-4 md:w-5/6 mx-auto flex flex-col justify-center md:gap-20 gap-8">
      <h2 className="font-secondary md:text-[3.5vw] text-4xl md:p-0  text-center ">
        Meet our Successful Speakers
      </h2>{" "}
    </div>
  );
};

export default Speakers;
