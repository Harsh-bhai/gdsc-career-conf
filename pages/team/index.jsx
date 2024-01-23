import React from "react";
import ImageComponent from "@/components/imageComponent";
import Image from "next/image";
import Sponsors from "@/components/Sponsors";
const Team = () => {

  const organizer = [
    {
      imgUrl: "r8xjoe-removebg-preview 1.png",
      personName: "Poorva Diwan",
      Type: "Organizer",
    },
    {
      imgUrl: "r8xjoe-removebg-preview 1.png",
      personName: "Shashwat Gupta",
      Type: "Organizer",
    },
    {
      imgUrl: "r8xjoe-removebg-preview 1.png",
      personName: "Dhruv Adavadkar",
      Type: "Organizer",
    },
    {
      imgUrl: "r8xjoe-removebg-preview 1.png",
      personName: "Vaibhav Shukla",
      Type: "Organizer",
    },
  ];
  
  const coreTeam = [
    {
      imgUrl: "r8xjoe-removebg-preview 1.png",
      personName: "Shashank Yadav",
      Type: "Design Team",
    },
    {
      imgUrl: "r8xjoe-removebg-preview 1.png",
      personName: "Shruti Pandey",
      Type: "Web Team",
    },
    {
      imgUrl: "r8xjoe-removebg-preview 1.png",
      personName: "Aditi Sharma",
      Type: "Marketing Team",
    },
    {
      imgUrl: "r8xjoe-removebg-preview 1.png",
      personName: "Harsh Dewangan",
      Type: "Design Team",
    },
    {
      imgUrl: "r8xjoe-removebg-preview 1.png",
      personName: "Risabh Gupta",
      Type: "Marketing Team",
    },
    {
      imgUrl: "r8xjoe-removebg-preview 1.png",
      personName: "Shreya Badgaiyan",
      Type: "Marketing Team",
    },
    {
      imgUrl: "r8xjoe-removebg-preview 1.png",
      personName: "Prapti Sanghi",
      Type: "Design Team",
    },
    {
      imgUrl: "r8xjoe-removebg-preview 1.png",
      personName: "Tanu Shree",
      Type: "Design Team",
    },
    {
      imgUrl: "r8xjoe-removebg-preview 1.png",
      personName: "Priyansh Gupta",
      Type: "Design Team",
    },
    {
      imgUrl: "r8xjoe-removebg-preview 1.png",
      personName: "Ansh Joseph",
      Type: "Design Team",
    },
    {
      imgUrl: "r8xjoe-removebg-preview 1.png",
      personName: "Priyansh Gupta",
      Type: "Design Team",
    },
  ];

  const volunteers = [
    {
      imgUrl: "r8xjoe-removebg-preview 1.png",
      personName: "Hardik Pawar",
      Type: "Volunteer",
    },
    {
      imgUrl: "r8xjoe-removebg-preview 1.png",
      personName: "Anandita Singh",
      Type: "Volunteer",
    },
    {
      imgUrl: "r8xjoe-removebg-preview 1.png",
      personName: "Dev Dewangan",
      Type: "Volunteer",
    },
    {
      imgUrl: "r8xjoe-removebg-preview 1.png",
      personName: "Rahul Dewangan",
      Type: "Volunteer",
    },
    {
      imgUrl: "r8xjoe-removebg-preview 1.png",
      personName: "Nupoor Narayan",
      Type: "Volunteer",
    },
    {
      imgUrl: "r8xjoe-removebg-preview 1.png",
      personName: "Tanisha Rathore",
      Type: "Volunteer",
    },
    {
      imgUrl: "r8xjoe-removebg-preview 1.png",
      personName: "Apoorva Sinha",
      Type: "Volunteer",
    },
  ];

  return (
    <div className="relative text-white flex flex-col items-center min-h-screen md:pt-36 pt-24">
      <h1 className="text-4xl text-center px-8  font-semibold md:text-6xl ">
        MEET OUR TEAM
      </h1>
      <div className="mt-12">
        <h1 className=" text-primary text-3xl md:text-5xl text-center font-semibold md:font-extrabold">
          Organizers
        </h1>
        <div className="grid md:grid-cols-4 grid-cols-2 justify-center md:gap-24 gap-4 mt-10">
          {organizer.map((item, index) => (
            <ImageComponent
              key={index}
              imgUrl={item.imgUrl || "https://via.placeholder.com/150x150/000000/000000.png"}
              personName={item.personName}
              Type={item.Type}
              size={"large"}
              
            />
          ))}
        </div>
      </div>
      <div className="md:mt-24 mt-12 md:w-[95%]">
        <h1 className=" text-primary text-3xl md:text-5xl text-center font-semibold md:font-extrabold">
          Core Team
        </h1>
        <div className="flex flex-wrap justify-center md:gap-20 gap-4 mt-10">
          {coreTeam.map((item, index) => (
            <ImageComponent
              key={index}
              imgUrl={item.imgUrl  || "https://via.placeholder.com/150x150/000000/000000.png"}
              personName={item.personName}
              Type={item.Type}
            />
          ))}
        </div>
      </div>
      <div className="mt-24 mt-12 md:w-[95%]">
        <h1 className=" text-primary text-3xl md:text-5xl text-center font-semibold md:font-extrabold">
          Volunteers
        </h1>
        <div className="flex flex-wrap justify-center md:gap-20 gap-4 mt-10">
          {volunteers.map((item, index) => (
            <ImageComponent
              key={index}
              imgUrl={item.imgUrl  || "https://via.placeholder.com/150x150/000000/000000.png"}
              personName={item.personName}
              Type={item.Type}
            />
          ))}
        </div>
      </div>
      <Image
        src={"/bg-asset.svg"}
        height={700}
        width={500}
        alt=""
        className="-z-30 absolute right-0 bottom-0 "
      />
    </div>
  );
};

export default Team;
