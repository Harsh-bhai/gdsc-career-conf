import React from "react";
import ImageComponent from "@/components/imageComponent";
import Image from "next/image";
const Team = () => {
  const organizer = [
    {
      imgUrl: "poorva.png",
      personName: "Poorva Diwan",
      Type: "Organizer",
      LinkedInUrl:
        "https://www.linkedin.com/in/poorva-diwan-a019971a7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      imgUrl: "shashwat.png",
      personName: "Shashwat Gupta",
      Type: "Organizer",
      LinkedInUrl: "https://www.linkedin.com/in/shashwhatt/",
    },
    {
      imgUrl: "dhruv.png",
      personName: "Dhruv Adavadkar",
      Type: "Organizer",
      LinkedInUrl:
        "https://www.linkedin.com/in/dhruv-adavadkar-0aa626226?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      imgUrl: "vaibhav.png",
      personName: "Vaibhav Shukla",
      Type: "Organizer",
      LinkedInUrl: "https://www.linkedin.com/in/vaibhav-shukla-319045210/",
    },
  ];

  const coreTeam = [
    {
      imgUrl: "shashank.png",
      personName: "Shashank Yadav",
      Type: "Core Team",
      LinkedInUrl:
        "https://www.linkedin.com/in/shashank-yadav-36b360239?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      imgUrl: "shrutipandey.png",
      personName: "Shruti Pandey",
      Type: "Core Team",
      LinkedInUrl: "",
    },
    {
      imgUrl: "aditi.png",
      personName: "Aditi Sharma",
      Type: "Core Team",
      LinkedInUrl:
        "https://www.linkedin.com/in/aditi-sharma-622393238?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      imgUrl: "Harsh Dewangan.png",
      personName: "Harsh Dewangan",
      Type: "Core Team",
      LinkedInUrl: "https://www.linkedin.com/in/harsh-dewangan-3a44b5232/",
    },
    {
      imgUrl: "Rishabh Singh.png",
      personName: "Rishabh Singh",
      Type: "Core Team",
      LinkedInUrl: "https://www.linkedin.com/in/singhrishabh1670",
    },
    {
      imgUrl: "shreya.png",
      personName: "Shreya Badgaiyan",
      Type: "Core Team",
      LinkedInUrl: "",
    },
    {
      imgUrl: "Prapti Sanghi.png",
      personName: "Prapti Sanghi",
      Type: "Core Team",
      LinkedInUrl: "",
    },
    {
      imgUrl: "Tanu Shree.png",
      personName: "Tanu Shree",
      Type: "Core Team",
      LinkedInUrl:
        "https://www.linkedin.com/in/tanu-shree-95525b255?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      imgUrl: "Priyansh Gupta.png",
      personName: "Priyansh Gupta",
      Type: "Core Team",
      LinkedInUrl: "https://www.linkedin.com/in/priyanshg02",
    },
    {
      imgUrl: "nalini.png",
      personName: "Nalini Ajwani",
      Type: "Core Team",
      LinkedInUrl: "https://www.linkedin.com/in/nalini-ajwani/",
    },
    {
      imgUrl: "kavya.png",
      personName: "Kavya Swarnkar",
      Type: "Core Team",
      LinkedInUrl:
        "https://www.linkedin.com/in/kavya-swarnkar-a2b55924a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    },
    {
      imgUrl: "ansh.png",
      personName: "Ansh Joseph",
      Type: "Core Team",
      LinkedInUrl:
        "https://www.linkedin.com/in/anshjoseph?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
  ];

  const volunteers = [
    {
      imgUrl: "Hardik Pawar.png",
      personName: "Hardik Pawar",
      Type: "Volunteer",
      LinkedInUrl: "https://www.linkedin.com/in/hardik-pawar-971616250",
    },
    {
      imgUrl: "kritika.png",
      personName: "G Kirtika",
      Type: "Volunteer",
      LinkedInUrl: "",
    },
    {
      imgUrl: "Apoorva Sinha.png",
      personName: "Apoorva Sinha",
      Type: "Volunteer",
      LinkedInUrl:
        "https://www.linkedin.com/in/apoorva-sinha-84bb01272?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      imgUrl: "Dev Dewangan.png",
      personName: "Dev Dewangan",
      Type: "Volunteer",
      LinkedInUrl: "https://www.linkedin.com/in/dev-dewangan-788b75281",
    },
    {
      imgUrl: "Rahul Dewangan.png",
      personName: "Rahul Dewangan",
      Type: "Volunteer",
      LinkedInUrl:
        "https://www.linkedin.com/in/rahul-dewangan-72323a256?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      imgUrl: "Anandita.png",
      personName: "Anandita Singh",
      Type: "Volunteer",
      LinkedInUrl: "https://in.linkedin.com/in/anandita-singh-21736b272",
    },
    {
      imgUrl: "Nupoor.png",
      personName: "Nupoor Narayan",
      Type: "Volunteer",
      LinkedInUrl: "",
    },
    {
      imgUrl: "Tanisha Rathore.png",
      personName: "Tanisha Rathore",
      Type: "Volunteer",
      LinkedInUrl: "https://www.linkedin.com/in/tanisha-19-rathore",
    },
  ];

  const advisors = [
    {
      personName: "Chaitali Choudhary",
      imgUrl: "chaitali.png",
      LinkedInUrl: "https://www.linkedin.com/in/chaitali-choudhary-8402b925/",
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
              LinkedInUrl={item.LinkedInUrl}
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
              LinkedInUrl={item.LinkedInUrl}
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
              LinkedInUrl={item.LinkedInUrl}
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
              LinkedInUrl={item.LinkedInUrl}
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
