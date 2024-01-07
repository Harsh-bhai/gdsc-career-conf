import ArrowList from "./sec2_arrow_comp";
import Image from "next/image";

const About = () => {
  return (
    <section className="w-screen grid md:grid-cols-2 md:gap-60 items-center px-4">
      <div className="flex flex-col items-center ml-26">
        <div className=" font-garalama text-white md:text-[6em] text-3xl md:mb-12 mb-4 self-start	md:ml-40 ml-4	">
          <div className="md:text-7xl md:py-12 py-4">What is </div>
          Career<span className="text-primary">Conf</span>?
        </div>
        <div className="flex flex-col md:ml-40">
          <div className="md:text-xl text-lg mt-5 md:text-left text-center">
            {`CareerConf is an amagus of ideas, passion, and troubled incantations over caffeinated 3AM chats. Troubled Incantations - what's that? It's the lack of perspective!! Our aim is to emulsify these gaps & channel your energy toward growth. Come aboard to discover what can't be seen, and fuel yourself to push boundaries, unleashing immense potential - let's dive-in :)`}
          </div>
        </div>
        <button className="font-garalama text-xl w-64 bg-primary pt-2 pl-3 pb-2 pr-3 text-black rounded-md justify-self-start md:self-start hover:bg-white md:ml-40 ml-4  mt-8">
          REGISTRATION
        </button>
      </div>
      <div className="about-asset md:block hidden md:ml-8">
        <Image
          src="/About.png"
          alt="About"
          height={500}
          width={500}
          className="object-cover rounded-lg"
        />
      </div>
    </section>
  );
};
export default About;
