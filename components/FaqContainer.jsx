import Image from "next/image";
import React, { useState } from "react";

const FaqContainer = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const faqData = [
    {
      question: "What is Hackathon?",
      reply:
        "A hackathon is a creative, time-bound gathering where individuals collaborate to rapidly innovate, typically within a technology-focused context, fostering solutions and ideas.",
    },
    {
      question: "Who can participate?? ",
      reply:
        "OpinHacks welcomes all and presents you with a chance to be an enthusiastic coder who is passionate about learning, developing and growing together.",
    },
    {
      question:
        "Can we bring our own team or do we have to form a team at the event?",
      reply:
        "Participants can either bring their own team or form a team at the event. The team size should consist of 2 to 4 individuals.",
    },
    {
      question: "Is there any registration fee?",
      reply: "FREE. This hackathon is free for all participants.",
    },
    {
      question: "Where can I find participant guidebook?",
      links:
        "https://www.notion.so/opinhacksguide/Participant-Guidebook-17a10c97f0864b92bfa93ae532b0e906",
    },
    {
      question: "What is the Code of Conduct for OpinHacks?",
      reply: "Code of Conduct:-",
      links:
        "https://www.notion.so/opinhacksguide/Code-of-Conduct-665acd3aa6d945fe90c788fcc977d16e",
    },
    {
      question: "Accommodation /food??",
      reply:
        " Don't worry about where to stay and what to eat! We've got you covered. All participants will be cozy and comfortable in the college hostels with all the necessary amenities and meals. It's time to hack and relax! ",
    },
    {
      question: "What should you bring with you for the hackathon?",
      reply:
        "A laptop and necessary charging equipment Any software or hardware tools needed for your project A valid government-issued ID for verification purposes A positive attitude towards collaboration",
    },
    {
      question: "Where will the event take place?",
      reply: `The venue of the event will be Bhilai Institute of Technology, Durg.`,
      links: "https://maps.app.goo.gl/Xg6qmbtKg8DXxEgZ8",
    },
    {
      question: "Where can you find teammates?",
      reply:
        "If you do not have a team and are looking for people with a specific tech stack, you can join our discord server to network with others and form your teams.",
      links: "https://discord.gg/KnthBxzApR",
    },
    {
      question:
        "More specific themes and problem statement will be disclosed soon??",
      reply:
        "Whichever track you choose, you can ideate & build either a software or a hardware project!",
    },
    {
      question: "Have a question aside from these?",
      reply: "Reach out to us at : ",
      links: "opinhacks@gmail.com",
    },
  ];

  const faqTab = (question, reply, links, index) => {
    return (
      <>
        <div
          className={`faq-tab group relative bg-primary/70 -primary p-3 text-light border-b-[1px] border-primary shadow-lg flex flex-col justify-center`}
        >
          <input
            className="faq-input peer/input appearance-none"
            type="checkbox"
            name="faq"
            id={`id${index}`}
            onChange={() => {
              handleClick(index);
            }}
          />
          <label
            htmlFor={`id${index}`}
            className="cursor-pointer inline-flex flex-row flex-nowrap items-center justify-between transition-opacity duration-300 
          after:content-['+'] after:h-6 after:w-6 after:text-grey after:flex after:items-center after:justify-center after:text-3xl after:opacity-30
          after:transition-transform
          after:duration-200
          group-hover:after:opacity-100
          peer-checked/input:after:rotate-[135deg]
          "
          >
            <h2 className="font-normal text-light pr-2 text-base">
              {question}
            </h2>
          </label>
          <div className="faq-content max-h-0 overflow-hidden ease-in-out duration-200 peer-checked/input:max-h-screen">
            <h5 className="font-normal pt-2 w-[80%] opacity-70 ">{reply}</h5>
            {links ? (
              <a
                href={links.includes("@gmail.com") ? `mailto:${links}` : links}
                target="_blank"
                rel="noreferrer"
                className="faq-links text-primary pt-0 text-xs font-bold"
              >
                {links.includes("@gmail.com")
                  ? links
                  : links.replace("mailto:", "")}
              </a>
            ) : (
              " "
            )}
          </div>
        </div>
      </>
    );
  };

  return (
    <section id="Faq" className="faq-section flex flex-col relative">
      <div className="w-screen h-auto relative overflow-x-hidden">
        <div className="text-[19.5vw] font-garalama text-black text-center z-0 heading-outline">
          QUESTIONS
        </div>
        <div className="absolute font-garalama md:text-7xl  translate-y-4 translate-x-2
        md:translate-y-0 md:-translate-x-40 z-10 bg-center">
          Common Queries
        </div>
      </div>
      <div className="flex flex-row items-center md:p-8 p-0 mt-8 overflow-hidden md:-mt-32">
        <div className="faqs-container flex flex-row flex-1  z-1 m-0 max-w-7xl md:p-8 ml-6 md:ml-0">
          <div className="flex flex-col gap-3 items-center ">
            <div className="md:w-[70%] w-[100%] max-h-[50vh] overflow-y-scroll custom-scrollbar flex flex-col ">
              <div className="grid gap-6 mr-3">
                {faqData.map((data, index) => {
                  return faqTab(data.question, data.reply, data.links, index);
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="image-container relative h-[515px] w-[515px] md:block hidden">
          <Image
            src="/faqBg.png"
            width={515}
            height={515}
            alt=""
            className="absolute top-0 -left-12 -z-[1]"
          />
          <div className=" h-fit">
            <Image src="/faqImage.png" width={402} height={500} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqContainer;
