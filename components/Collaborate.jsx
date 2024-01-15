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
      // Add a delay to the right div animation
      controlsSponsorUs.start({
        x: 0,
        opacity: 1,
        transition: { type: "spring", duration: 1.5, bounce: 0.3, delay: 0.5 },
      });
      setSponsorUsTransitioned(true);
    }
  }, [controlsSponsorUs, sponsorUsInView, sponsorUsTransitioned]);

  // Reset animations when scrolling back up
  useEffect(() => {
    if (!collaborateInView) {
      controlsCollaborate.start({ x: "-100%", opacity: 0 });
      setCollaborateTransitioned(false);
    }
  }, [controlsCollaborate, collaborateInView]);

  useEffect(() => {
    if (!sponsorUsInView) {
      controlsSponsorUs.start({ x: "100%", opacity: 0 });
      setSponsorUsTransitioned(false);
    }
  }, [controlsSponsorUs, sponsorUsInView]);

  return (
    <section className="flex flex-col items-center md:mt-40 my-20">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-32 md:-mt-20 md:w-5/6">
        <motion.div
          ref={collaborateRef}
          initial={{ x: "-100%", opacity: 0 }}
          animate={controlsCollaborate}
          transition={{ type: "spring", duration: 3, bounce: 0.3 }}
          className="flex flex-col gap-12 text-base md:p-0 px-4 md:text-left text-center md:mx-auto w-full"
        >
          {" "}
          <h2 className="font-secondary md:text-[3.4vw] text-4xl md:p-0 px-8 self-start ">
            <span className="text-primary">Collaborate</span> With Us
          </h2>
          <div className="flex flex-col">
            <div className="md:text-lg flex flex-col gap-4 text-base md:leading-8 mt-5 md:text-left text-center">
              <p>{`Invest - time, resources and energy at CareerConf. But why?`}</p>
              <p>{`CareerConf is a one way solution to the uncertainty, dilemmas, and ignorance in choosing career paths. Our core mission is to illuminate the lesser-known avenues available to students, unveiling refreshing paths they might not have considered. Embodying novelty and passion, CareerConf is a platform that invites collaboration to cherish the notion.
`}</p>
            </div>
            <div className="flex flex-row md:gap-12 gap-4 ">
              <Link
                href={
                  "https://drive.google.com/file/d/1CZMrp4d9Q4DX2wBCWQhr4UUyKeOQNMvH/view?usp=sharing"
                }
                target="_blank"
                className="font-secondary text-center md:text-xl w-64 bg-primary pt-2 pl-3 pb-2 pr-3 text-white rounded-md justify-self-start self-center md:self-start duration-300 hover:scale-110 mt-8"
              >
                SPONSOR US
              </Link>
              <Link
                href={
                  "https://drive.google.com/file/d/1gtBK18q7Z3ylgh9wy7R6gcHhKLZDCFHA/view"
                }
                target="_blank"
                className="font-secondary text-center md:text-xl w-64 bg-primary pt-2 pl-3 pb-2 pr-3 text-white rounded-md justify-self-start self-center md:self-start duration-300 hover:scale-110 mt-8"
              >
                BE A PARTNER
              </Link>
            </div>
          </div>
        </motion.div>
        <motion.div
          ref={sponsorUsRef}
          initial={{ x: "100%", opacity: 0 }}
          animate={controlsSponsorUs}
          transition={{ type: "spring", duration: 3, bounce: 0.3 }}
          className="flex flex-row text-base md:p-0 px-4 md:ml-16 text-center w-full"
        >
          {" "}
          <div className="relative mt-4 md:h-[420px] h-[400px] md:w-20 w-32">
            <Image src="/collabInfo.png" fill={true} alt="Collab" />
          </div>
          <div className="flex flex-col md:gap-24 gap-12">
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
      </div>
    </section>
  );
};
export default Collaborate;
