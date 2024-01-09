import Image from "next/image";

const About = () => {
  return (
    <section className="w-screen grid md:grid-cols-2 gap-12 items-center justify-center px-4 md:w-5/6 mx-auto">
      <div className="flex flex-col items-center mx-auto">
        <div className=" font-garalama text-white md:text-[5vw] text-3xl md:mb-12 mb-4 self-start">
          <div className="md:text-[3vw] md:py-12 py-4">What is </div>
          Career<span className="text-primary">Conf</span>?
        </div>
        <div className="flex flex-col">
          <div className="md:text-xl text-lg mt-5 md:text-left text-center">
            {`CareerConf is an amagus of ideas, passion, and troubled incantations over caffeinated 3AM chats. Troubled Incantations - what's that? It's the lack of perspective!! Our aim is to emulsify these gaps & channel your energy toward growth. Come aboard to discover what can't be seen, and fuel yourself to push boundaries, unleashing immense potential - let's dive-in :)`}
          </div>
        </div>
        <button className="font-garalama text-xl w-64 bg-primary pt-2 pl-3 pb-2 pr-3 text-black rounded-md justify-self-start md:self-start hover:bg-white mt-8">
          REGISTRATION
        </button>
      </div>
      <div className="about-asset md:block hidden justify-self-center mt-8">
        <Image
          src="/About.png"
          alt="About"
          // fill={true}
          width={500}
          height={500}
          className="object-cover rounded-lg"
        />
      </div>
    </section>
  );
};
export default About;
