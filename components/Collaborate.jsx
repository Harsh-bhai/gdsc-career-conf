import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

import { useInView } from "react-intersection-observer";

const Collaborate = () => {
  const sponsorUs = [
    {
      title: "Brand visibility",
      description: "Communicate your brand motto to enthusiastic developers",
    },
    {
      title: "Community Engagement & Networking Opportunities:",
      description: "Access to a network of young tech enthusiasts.",
    },
    {
      title: "Social Impact",
      description:
        "Our aim with GDSC CareerConf is to bring a change in the lives of our community members - join hands with us to foster change.",
    },
  ];

  const [collaborateRef, collaborateInView] = useInView({
    triggerOnce: true,
  });

  const [sponsorUsRef, sponsorUsInView] = useInView({
    triggerOnce: true,
  });

  const [collaborateTransitioned, setCollaborateTransitioned] = useState(false);
  const [sponsorUsTransitioned, setSponsorUsTransitioned] = useState(false);

  const controlsCollaborate = useAnimation();
  const controlsSponsorUs = useAnimation();

  useEffect(() => {
    if (collaborateInView && !collaborateTransitioned) {
      controlsCollaborate.start({
        x: 0,
        opacity: 1,
        transition: { type: "spring", duration: 1.5, bounce: 0.3 },
      });
      setCollaborateTransitioned(true);
    }
  }, [controlsCollaborate, collaborateInView, collaborateTransitioned]);

  useEffect(() => {
    if (sponsorUsInView && !sponsorUsTransitioned) {
      controlsSponsorUs.start({
        y: "100%",
        opacity: 1,
        transition: { type: "spring", duration: 1.5, bounce: 0.3 },
      });
      setSponsorUsTransitioned(true);
    }
  }, [controlsSponsorUs, sponsorUsInView, sponsorUsTransitioned]);

  return (
    <section
      id="collab"
      className="w-screen relative md:h-screen grid md:grid-cols-2 grid-cols-1 md:gap-28 gap-8 items-start justify-center md:px-4 md:w-5/6 mx-auto md:my-12 my-4 z-20"
    >
      <motion.div
        ref={collaborateRef}
        initial={{ x: "-100%", opacity: 0 }}
        animate={controlsCollaborate}
        transition={{ type: "spring", duration: 3, bounce: 0.3 }}
        className="flex flex-col md:gap-8 gap-4 text-base md:p-0 px-4 md:text-left text-center md:mx-auto"
      >
        {" "}
        <h2 className="font-secondary md:text-[3.4vw] text-4xl md:p-0 px-8 md:self-start ">
          <span className="text-primary">Collaborate</span> With Us
        </h2>
        <div className="flex flex-col">
          <div className="md:text-lg flex flex-col gap-4 text-base md:leading-8 mt-5 md:text-left text-center">
            <p>
              Invest - time, resources and energy at Career
              <span className="font-secondary">Conf</span>. But why?
            </p>
            <p>
              Career<span className="font-secondary">Conf</span> is a one way
              solution to the uncertainty, dilemmas, and ignorance in choosing
              career paths. Our core mission is to{" "}
              <span className=" font-secondary">illuminate</span> the
              lesser-known avenues available to students, unveiling refreshing
              paths they might not have considered. Embodying novelty and{" "}
              <span className="font-secondary">passion</span>, CareerConf is a
              platform that invites{" "}
              <span className="font-secondary">collaboration</span> to cherish
              the notion.
            </p>
          </div>
          <div className="flex md:flex-row flex-col md:gap-12 gap-4 ">
            <Link
              href={
                "https://drive.google.com/file/d/1_76dC3TpvthdOciAjVMqh2QsvKv7yssC/view?usp=sharing"
              }
              target="_blank"
              className="font-secondary text-center md:text-lg w-64 bg-primary pt-2 pl-3 pb-2 pr-3 text-white rounded-md justify-self-start self-center md:self-start duration-300 hover:scale-110 mt-8"
            >
              SPONSOR US
            </Link>
            <Link
              href={
                "https://drive.google.com/file/d/19nUA6GX3Hi0O8o7M0v2-1vv5TezDs9av/view?usp=drivesdk"
              }
              target="_blank"
              className="font-secondary text-center md:text-lg w-64 bg-primary py-2 px-auto text-white rounded-md justify-self-start self-center md:self-start duration-300 hover:scale-110 md:mt-8"
            >
              BE A PARTNER
            </Link>
          </div>
        </div>
      </motion.div>
      <motion.div
        ref={sponsorUsRef}
        initial={{ y: "200%", opacity: 0 }}
        animate={controlsSponsorUs}
        transition={{ type: "spring", duration: 4, bounce: 0.3 }}
        className="md:flex hidden flex-row text-base md:p-0 pt-30 px-4 md:ml-16 text-center w-full md:mb-8"
      >
        <div className="relative mt-4 md:h-[420px] h-[400px] md:w-20 w-32">
          <Image src="/collabInfo.png" fill={true} alt="Collab" />
        </div>
        <div className="flex flex-col md:gap-24 gap-12 ">
          {sponsorUs.map(({ title, description }) => {
            return (
              <div key={title} className="flex flex-col ml-10 ">
                <span className="text-primary py-2 text-start">{title}</span>
                <span className=" py-2 text-start">{description}</span>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};
export default Collaborate;
