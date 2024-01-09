import Image from "next/image";
import React from "react";
import BgHeader from "./BgHeader";

const FaqContainer = () => {
  const faqData = [
    {
      question: "How can I register for CareerConf?",
      reply:
        "Stay tuned! We'll soon be releasing a range of tickets for CareerConf, available for purchase both online and offline. Keep an eye on our website for updates on ticket options and secure your spot for CareerConf.",
    },
    {
      question: "Who should attend CareerConf?",
      reply:
        "CareerConf is open to anyone interested in exploring tech careers or looking to enhance their skills in the field. From students and recent graduates to professionals looking to advance their careers in the tech industry, CareerConf offers valuable insights and networking opportunities for everyone.",
    },
    {
      question: "Will there be food and refreshments?",
      reply:
        "Yes, we've got you covered! It's our way of ensuring you stay energized and focused on soaking in all the valuable information and networking opportunities CareerConf has to offer.",
    },
    {
      question: "How can I stay updated on event details?",
      reply:
        "Stay in the loop by following us on social media. We'll keep you posted on important updates, speaker announcements, and any changes to the schedule. Don't miss out on the latest information—connect with us online!",
    },
    {
      question: "What is the agenda for the day? ",
      reply:
        "The day will be packed with informative sessions, panel discussions, and networking opportunities. Check out the detailed schedule once it's out to plan your tech-packed adventure to make the most of CareerConf.🚀",
    },
  ];

  const faqTab = (question, reply, links, index) => {
    return (
      <>
        <div
          className={`faq-tab group relative bg-primary/70 p-3 text-lg border-b-[1px] border-primary shadow-lg flex flex-col justify-center`}
        >
          <input
            className="faq-input peer/input appearance-none"
            type="checkbox"
            name="faq"
            id={`id${index}`}
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
            <h2 className="font-normal text-light pr-2">{question}</h2>
          </label>
          <div className="faq-content max-h-0 overflow-hidden ease-in-out duration-200 peer-checked/input:max-h-screen">
            <h5 className="pt-2 w-[80%] opacity-70 ">{reply}</h5>
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
      className="faq-section flex flex-col relative md:h-screen md:p-0 p-2"
    >
      <BgHeader header={"FAQS"} bgHeader={"QUERIES"} />
      <div className="flex flex-row items-center justify-center md:p-8 p-0 mt-8 overflow-hidden md:-mt-32 gap-24">
        <div className="faqs-container flex flex-row flex-1 z-1 m-0 max-w-4xl md:p-8 ml-6 md:ml-0">
          <div className="flex flex-col items-center ">
            <div className="w-full md:h-[40vh] h-[70vh] overflow-y-scroll custom-scrollbar flex flex-col  ">
              <div className="grid gap-6 mr-4">
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
