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
    const isActive = index === activeIndex;
    const activeClass = isActive ? "border border-primary" : "";

    return (
      <>
        <div
          className={`faq-tab group relative bg-primary/70 font-secondary p-3 text-light rounded-lg shadow-lg flex flex-col justify-center ${activeClass}`}
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
            <h2 className="font-normal font-secondary text-base text-light  pr-2 md:text-[10px]/3 md:p-0">
              {question}
            </h2>
          </label>
          <div className="faq-content max-h-0 overflow-hidden ease-in-out duration-200 peer-checked/input:max-h-screen">
            <h5 className="md:text-[0.85rem] font-secondary font-normal pt-2 w-[80%] opacity-70 text-[0.5rem]">
              {reply}
            </h5>
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
    <section
      id="Faq"
      className="faq-section flex flex-row items-center  md:p-8 p-0  overflow-hidden"
    >
      <div className="faqs-container flex flex-row flex-1  z-1 m-0 max-w-7xl p-8 ">
        <div className="flex flex-col gap-3 items-center ">
          <div className="text-light md:text-5xl text-4xl md:ml-0 ml-6 font-Satoshi tracking-wide font-bold mb-5 w-full">
            Some of the frequently <br /> asked questions
          </div>
          <div className="md:w-[70%] w-[100%] max-h-[60vh] overflow-y-scroll custom-scrollbar grid gap-4 ">
            <div className="grid gap-4 mr-3">
              {faqData.map((data, index) => {
                return faqTab(data.question, data.reply, data.links, index);
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="image-container relative">
        <Image
          src="/faqBg.png"
          width={400}
          height={900}
          alt=""
          className=" absolute z-[-1]"
        />
        <div className=" h-fit">
          <Image src="/faqImage.png" width={400} height={900} alt="" />
        </div>
      </div>
    </section>
  );
};

export default FaqContainer;
