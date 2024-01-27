import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import AboutInfo from "./AboutInfo";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

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
        y: "0%",
        opacity: 1,
        transition: { type: "spring", duration: 2, bounce: 0.3 },
      });
    }
  }, [aboutInfoControls, aboutInfoInView, aboutTransitioned]);

  return (
    <>
      <section
        id="about"
        className="w-screen relative grid md:grid-cols-2 md:gap-28 gap-16 items-start justify-center px-4 md:w-5/6 mx-auto md:mt-12 md:mb-72 mt-8 mb-20 pt-2 md:mt-64 z-20"
      >
        <motion.div
          ref={aboutRef}
          initial={{ x: "-100%", opacity: 0 }}
          animate={aboutControls}
          transition={{ type: "spring", duration: 3, bounce: 0.3 }}
          className="flex flex-col items-center mx-auto md:gap-8 gap-4"
        >
          <h2 className="font-secondary md:text-[3.5vw] text-4xl md:p-0 md:text-left text-center">
            What is Career<span className="text-primary">Conf</span>?
          </h2>
          <div className="flex flex-col">
            <p className="md:text-lg text-base md:leading-8 mt-5 md:text-left text-center">
              {`CareerConf is an amagus of ideas, passion, and troubled incantations over caffeinated 3AM chats. Troubled Incantations - what's that? It's the lack of perspective!! Our aim is to emulsify these gaps & channel your energy toward growth. Come aboard to discover what can't be seen, and fuel yourself to push boundaries, unleashing immense potential - `}
              <span className="text-primary font-secondary">
                {" "}
                lets dive-in {`:)`}
              </span>
            </p>
            <Link
              href={"/register"}
              className="font-secondary text-center text-xl w-64 bg-primary pt-2 pl-3 pb-2 pr-3 text-white rounded-md justify-self-start self-center md:self-start duration-300 hover:scale-110 mt-8"
            >
              REGISTER
            </Link>
          </div>
        </motion.div>
        <motion.div
          ref={aboutInfoRef}
          initial={{ y: "100%", opacity: 0 }}
          animate={aboutInfoControls}
          transition={{ type: "spring", duration: 4, bounce: 0.3 }}
          className="about-info flex items-center justify-center md:-mt-[2vw]"
        >
          {/* <AboutInfo /> */}
          <Image
            src={"/AboutAsset.png"}
            width={500}
            height={500}
            alt=""
            // className="-translate-y-80 md:translate-y-0"
          />
        </motion.div>
      </section>

      {/* bg asset */}
      {/* <Image
        src={"/bg-asset.svg"}
        height={700}
        width={500}
        alt=""
        className="absolute left-0 top-0 rotate-180"
      /> */}
    </>
  );
};

export default About;
