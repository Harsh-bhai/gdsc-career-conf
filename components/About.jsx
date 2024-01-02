import ArrowList from "./sec2_arrow_comp";
import Image from "next/image";
const About = () => {
  return (
    <section className="w-screen md:-mt-32 -mt-44 flex flex-col justify-center items-center px-4">
      <Image
        className="right-0 absolute"
        src="sec2_message.svg"
        height={90}
        width={90}
        alt="not found"
      />
      <div className=" font-garalama text-white md:text-[7em] text-2xl md:mb-12 mb-4 self-start	md:ml-40 ml-4	">
        <div className="md:text-7xl text-5xl md:py-12 py-4">What is </div>
        Career<span className="text-primary">Conf </span>?
      </div>
      <div className="flex lg:flex-row gap-20 sm:flex-col items-center flex-col">
        <div className="flex flex-col item-center lg:w-[40%] w-[90%] md:ml-40">
          <div className="text-justify md:text-xl text-lg mt-5">
            Welcome to CareerConf, a one-day event by Google Developer Student
            Our goal is simple: bridge the knowledge gap and guide budding
            developers to explore varied career paths. At CareerConf, connect
            with industry professionals, gain insights, and expand your
            horizons. Join us for a day of discovery and career empowerment.
          </div>
        </div>
        <div className="lg:w-[40%] w-[90%]">
          <div className="flex flex-col gap-10">
            <ArrowList
              des={"Get To Know About The Unexplored Paths In Tech"}
            ></ArrowList>
            <ArrowList
              des={"Deep Dive Into Current Trends In the Tech"}
            ></ArrowList>
            <ArrowList des={"Learn About Emerging Fields In Tech"}></ArrowList>
            <ArrowList
              des={"Connect With Like Minded Individuals and Professionals"}
            ></ArrowList>
          </div>
        </div>
      </div>
      <button className="font-garalama text-xl w-64 bg-primary pt-2 pl-3 pb-2 pr-3 text-black rounded-md justify-self-start md:self-start hover:bg-white md:ml-40 ml-4  md:mt-auto mt-8">
        REGISTRATION
      </button>
    </section>
  );
};
export default About;
