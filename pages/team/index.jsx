import React from "react";
import ImageComponent from "@/components/imageComponent";
const Team = () => {
  const teamMembers = [
    { imgUrl: "r8xjoe-removebg-preview 1.png", personName: "Dhruv Advadkar", Type: "Design Team" },
    { imgUrl: "r8xjoe-removebg-preview 1.png", personName: "Member 2", Type: "Marketing Team" },
    { imgUrl: "r8xjoe-removebg-preview 1.png", personName: "Member 2", Type: "Marketing Team" },
    { imgUrl: "r8xjoe-removebg-preview 1.png", personName: "Member 2", Type: "Marketing Team" },
    { imgUrl: "r8xjoe-removebg-preview 1.png", personName: "Member 2", Type: "Marketing Team" },
    { imgUrl: "r8xjoe-removebg-preview 1.png", personName: "Dhruv Advadkar", Type: "Design Team" },
    { imgUrl: "r8xjoe-removebg-preview 1.png", personName: "Member 2", Type: "Marketing Team" },
    { imgUrl: "r8xjoe-removebg-preview 1.png", personName: "Member 2", Type: "Marketing Team" },
    { imgUrl: "r8xjoe-removebg-preview 1.png", personName: "Member 2", Type: "Marketing Team" },
    { imgUrl: "r8xjoe-removebg-preview 1.png", personName: "Member 2", Type: "Marketing Team" },
    
  ];
  return (
    <div className=" justify-center items-center min-h-screen ">
      <h1 className="font-secondary text-4xl text-center px-8 mb-7  md:text-[2.5vw]">OUR TEAM</h1>
      <div className=" flex flex-wrap justify-center  gap-20 mt-10">
      {teamMembers.map((member, index) => (
      <ImageComponent
        key={index}
        imgUrl={member.imgUrl}
        personName={member.personName}
        Type={member.Type}
        className="s-col  border-primary flex items-center justify-center p-[40px] z-10 "
      />
    ))}
    
      </div>
    </div>
  );
};

export default Team;
