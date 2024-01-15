import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import AboutInfo from "./AboutInfo";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const About = () => {
  const aboutControls = useAnimation();
  const aboutInfoControls = useAnimation();

  const [aboutRef, aboutInView] = useInView({
    triggerOnce: true,
  });

  const [aboutInfoRef, aboutInfoInView] = useInView({
    triggerOnce: true,
  });

  const [aboutTransitioned, setAboutTransitioned] = useState(false);

  useEffect(() => {
    if (aboutInView && !aboutTransitioned) {
      aboutControls.start({
        x: 0,
        opacity: 1,
        transition: { type: "spring", duration: 1.5, bounce: 0.3 },
      });
      setAboutTransitioned(true);
    }
  }, [aboutControls, aboutInView, aboutTransitioned]);

  useEffect(() => {
    if (aboutTransitioned && aboutInfoInView) {
      aboutInfoControls.start({
        y: 0,
        opacity: 1,
        transition: { type: "spring", duration: 2, bounce: 0.3 },
      });
    }
  }, [aboutInfoControls, aboutInfoInView, aboutTransitioned]);

  // Reset animations when scrolling back up
  useEffect(() => {
    if (!aboutInView) {
      aboutControls.start({ x: "-100%", opacity: 0 });
      setAboutTransitioned(false);
    }
  }, [aboutControls, aboutInView]);

  useEffect(() => {
    if (!aboutInfoInView) {
      aboutInfoControls.start({ y: "100%", opacity: 0 });
    }
  }, [aboutInfoControls, aboutInfoInView]);

  return (
    <section className="w-screen md:h-[60vh] grid md:grid-cols-2 gap-12 items-center justify-center px-4 md:w-5/6 mx-auto my-12 mt-20">
      <motion.div
        ref={aboutRef}
        initial={{ x: "-100%", opacity: 0 }}
        animate={aboutControls}
        transition={{ type: "spring", duration: 3, bounce: 0.3 }}
        className="flex flex-col items-center mx-auto gap-8"
      >
        <h2 className="font-secondary md:text-[3.5vw] text-4xl md:p-0 px-8 self-start ">
          What is Career<span className="text-primary">Conf</span>?
        </h2>
        <div className="flex flex-col">
          <p className="md:text-lg text-base md:leading-8 mt-5 md:text-left text-center">
            {`CareerConf is an amagus of ideas, passion, and troubled incantations over caffeinated 3AM chats. Troubled Incantations - what's that? It's the lack of perspective!! Our aim is to emulsify these gaps & channel your energy toward growth. Come aboard to discover what can't be seen, and fuel yourself to push boundaries, unleashing immense potential - let's dive-in :)`}
          </p>
          <Link
            href={"/register"}
            className="font-garalama text-center text-xl w-64 bg-primary pt-2 pl-3 pb-2 pr-3 text-black rounded-md justify-self-start self-center hover:text-white md:self-start duration-300 hover:scale-110 mt-8"
          >
            REGISTRATION
          </Link>
        </div>
      </motion.div>
      <motion.div
        ref={aboutInfoRef}
        initial={{ y: "100%", opacity: 0 }}
        animate={aboutInfoControls}
        transition={{ type: "spring", duration: 4, bounce: 0.3 }}
        className="about-info justify-self-end"
      >
        <AboutInfo />
      </motion.div>
    </section>
  );
};

export default About;
