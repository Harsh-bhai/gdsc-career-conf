import React from "react";
import ImageComponent from "@/components/imageComponent";
import Image from "next/image";
import Sponsors from "@/components/Sponsors";
const Team = () => {
  const organizer = [
    {
      imgUrl: "poorva.png",
      personName: "Poorva Diwan",
      Type: "Organizer",
    },
    {
      imgUrl: "shashwat.png",
      personName: "Shashwat Gupta",
      Type: "Organizer",
    },
    {
      imgUrl: "dhruv.png",
      personName: "Dhruv Adavadkar",
      Type: "Organizer",
    },
    {
      imgUrl: "vaibhav.png",
      personName: "Vaibhav Shukla",
      Type: "Organizer",
    },
  ];

  const coreTeam = [
    {
      imgUrl: "Shashank.png",
      personName: "Shashank Yadav",
      Type: "Design Team",
    },
    {
      imgUrl: "Shruti pandey.png",
      personName: "Shruti Pandey",
      Type: "Web Team",
    },
    {
      imgUrl: "",
      personName: "Aditi Sharma",
      Type: "Marketing Team",
    },
    {
      imgUrl: "Harsh Dewangan.png",
      personName: "Harsh Dewangan",
      Type: "Design Team",
    },
    {
      imgUrl: "Rishabh Singh.png",
      personName: "Rishabh Singh",
      Type: "Marketing Team",
    },
    {
      imgUrl: "Shreya badgaiyan.png",
      personName: "Shreya Badgaiyan",
      Type: "Marketing Team",
    },
    {
      imgUrl: "Prapti Sanghi.png",
      personName: "Prapti Sanghi",
      Type: "Design Team",
    },
    {
      imgUrl: "Tanu Shree.png",
      personName: "Tanu Shree",
      Type: "Design Team",
    },
    {
      imgUrl: "Priyansh Gupta.png",
      personName: "Priyansh Gupta",
      Type: "Design Team",
    },
    {
      imgUrl: "",
      personName: "Ansh Joseph",
      Type: "Design Team",
    },
    {
      imgUrl: "",
      personName: "Priyansh Gupta",
      Type: "Design Team",
    },
  ];

  const volunteers = [
    {
      imgUrl: "Hardik Pawar.png",
      personName: "Hardik Pawar",
      Type: "Volunteer",
    },
    {
      imgUrl: "Anandita .png",
      personName: "Anandita Singh",
      Type: "Volunteer",
    },
    {
      imgUrl: "Dev Dewangan.png",
      personName: "Dev Dewangan",
      Type: "Volunteer",
    },
    {
      imgUrl: "Rahul Dewangan.png",
      personName: "Rahul Dewangan",
      Type: "Volunteer",
    },
    {
      imgUrl: "Nupoor.png",
      personName: "Nupoor Narayan",
      Type: "Volunteer",
    },
    {
      imgUrl: "Tanisha Rathore.png",
      personName: "Tanisha Rathore",
      Type: "Volunteer",
    },
    {
      imgUrl: "Apoorva Sinha.png",
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
              imgUrl={item.imgUrl !== "" ? item.imgUrl : "bg-placeholder.png"}
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
              imgUrl={item.imgUrl !== "" ? item.imgUrl : "bg-placeholder.png"}
              personName={item.personName}
              Type={item.Type}
            />
          ))}
        </div>
      </div>
      <div className="mt-24 mt-12 md:w-[90%]">
        <h1 className=" text-primary text-3xl md:text-5xl text-center font-semibold md:font-extrabold">
          Volunteers
        </h1>
        <div className="flex flex-wrap justify-center md:gap-20 gap-4 mt-10">
          {volunteers.map((item, index) => (
            <ImageComponent
              key={index}
              imgUrl={item.imgUrl !== "" ? item.imgUrl : "bg-placeholder.png"}
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
