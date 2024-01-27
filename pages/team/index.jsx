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
      imgUrl: "shashank.png",
      personName: "Shashank Yadav",
      Type: "Core Team",
    },
    {
      imgUrl: "shrutipandey.png",
      personName: "Shruti Pandey",
      Type: "Core Team",
    },
    {
      imgUrl: "aditi.png",
      personName: "Aditi Sharma",
      Type: "Core Team",
    },
    {
      imgUrl: "Harsh Dewangan.png",
      personName: "Harsh Dewangan",
      Type: "Core Team",
    },
    {
      imgUrl: "Rishabh Singh.png",
      personName: "Rishabh Singh",
      Type: "Core Team",
    },
    {
      imgUrl: "shreya.png",
      personName: "Shreya Badgaiyan",
      Type: "Core Team",
    },
    {
      imgUrl: "Prapti Sanghi.png",
      personName: "Prapti Sanghi",
      Type: "Core Team",
    },
    {
      imgUrl: "Tanu Shree.png",
      personName: "Tanu Shree",
      Type: "Core Team",
    },
    {
      imgUrl: "Priyansh Gupta.png",
      personName: "Priyansh Gupta",
      Type: "Core Team",
    },
    {
      imgUrl: "nalini.png",
      personName: "Nalini Ajwani",
      Type: "Core Team",
    },
    {
      imgUrl: "kavya.png",
      personName: "Kavya Swarnkar",
      Type: "Core Team",
    },
    {
      imgUrl: "ansh.png",
      personName: "Ansh Joseph",
      Type: "Core Team",
    },
  ];

  const volunteers = [
    {
      imgUrl: "Hardik Pawar.png",
      personName: "Hardik Pawar",
      Type: "Volunteer",
    },
    {
      imgUrl: "kritika.png",
      personName: "G Kirtika",
      Type: "Volunteer",
    },
    {
      imgUrl: "Apoorva Sinha.png",
      personName: "Apoorva Sinha",
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
      imgUrl: "Anandita.png",
      personName: "Anandita Singh",
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
  ];

  const advisors = [
    {
      personName: "Chaitali Choudhary",
      imgUrl: "chaitali.png",
      LinkedlnUrl: "https://www.linkedin.com/in/chaitali-choudhary-8402b925/",
      Type: "Advisor",
    },
  ];

  return (
    <div className="relative text-white flex flex-col items-center min-h-screen md:pt-28 pt-24">
      {/* ORGANIZERS */}
      <div className="md:px-12">
        <h1 className=" text-primary text-3xl md:text-5xl text-center font-semibold md:font-extrabold">
          Organizers
        </h1>
        <div className="grid md:grid-cols-4 grid-cols-2 justify-center md:gap-20 gap-4 md:mt-10 mt-4">
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
      {/* ADVISOR */}
      <div className="md:mt-20 mt-12 md:px-12">
        <h1 className=" text-primary text-3xl md:text-5xl text-center font-semibold md:font-extrabold">
          Advisors
        </h1>
        <div className="grid justify-center md:gap-24 gap-4 md:mt-10 mt-4">
          {advisors.map((item, index) => (
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
      {/* CORE TEAM */}
      <div className="md:mt-24 mt-12 md:w-[95%] md:px-12">
        <h1 className=" text-primary text-3xl md:text-5xl text-center font-semibold md:font-extrabold">
          Core Team
        </h1>
        <div className="flex flex-wrap justify-center md:gap-16 gap-4 md:mt-10 mt-4">
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
      {/* VOLUNTEER */}
      <div className="mt-24 mt-12 md:w-[95%] md:px-12">
        <h1 className=" text-primary text-3xl md:text-5xl text-center font-semibold md:font-extrabold">
          Volunteers
        </h1>
        <div className="flex flex-wrap justify-center md:gap-20 gap-4 md:mt-10 mt-4 md:w-5/6 mx-auto">
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
        className="-z-30 absolute right-0 top-1/3 "
      />
    </div>
  );
};

export default Team;
