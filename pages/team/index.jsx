import React from "react";
import ImageComponent from "@/components/imageComponent";
import Image from "next/image";
const Team = () => {
  const teamMembers = [
    {
      imgUrl: "r8xjoe-removebg-preview 1.png",
      personName: "Dhruv Advadkar",
      Type: "Design Team",
    },
    {
      imgUrl: "r8xjoe-removebg-preview 1.png",
      personName: "Vaibhav Shukla",
      Type: "Web Team",
    },
    {
      imgUrl: "r8xjoe-removebg-preview 1.png",
      personName: "Member 2",
      Type: "Marketing Team",
    },
    {
      imgUrl: "r8xjoe-removebg-preview 1.png",
      personName: "Member 2",
      Type: "Marketing Team",
    },
    {
      imgUrl: "r8xjoe-removebg-preview 1.png",
      personName: "Member 2",
      Type: "Marketing Team",
    },
    {
      imgUrl: "r8xjoe-removebg-preview 1.png",
      personName: "Dhruv Advadkar",
      Type: "Design Team",
    },
    {
      imgUrl: "r8xjoe-removebg-preview 1.png",
      personName: "Member 2",
      Type: "Marketing Team",
    },
    {
      imgUrl: "r8xjoe-removebg-preview 1.png",
      personName: "Member 2",
      Type: "Marketing Team",
    },
    {
      imgUrl: "r8xjoe-removebg-preview 1.png",
      personName: "Member 2",
      Type: "Marketing Team",
    },
    {
      imgUrl: "r8xjoe-removebg-preview 1.png",
      personName: "Member 2",
      Type: "Marketing Team",
    },
  ];

  const sectionNames=[ "Organizers", "Core Team", "Volunteers"]

  return (
    <div className="relative text-white  justify-center items-center  min-h-screen pt-20 ">
      <h1 className="mb-20  text-4xl text-center px-8  font-semibold md:text-6xl ">
        {" "}
        MEET OUR TEAM
      </h1>
      { sectionNames.map((item)=>{
        return(
          <section key={item} className="pb-40" >
        <h1 className=" text-primary text-3xl md:text-5xl text-center font-semibold md:font-extrabold">{item}</h1>
        <div className=" flex flex-wrap justify-center  gap-20 mt-10">
          {teamMembers.map((member, index) => (
            <ImageComponent
              key={index}
              imgUrl={member.imgUrl}
              personName={member.personName}
              Type={member.Type}
            />
          ))}
        </div>
      </section>
        )
      })}
        <Image
        src={"/bg-asset.svg"}
        height={700}
        width={500}
        alt=""
        className="-z-30 absolute left-0 top-0 rotate-180"
      />
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
