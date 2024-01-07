import BgHeader from "./BgHeader";
import Image from "next/image";
const Collaborate = () => {
  return (
    <section className="flex flex-col items-center">
      <BgHeader header={"WHY COLLABORATE?"} bgHeader={"PARTNER"} />
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4 items-center md:-mt-20 md:ml-36">
        <div className="flex flex-col gap-12 text-lg md:p-0 px-8 text-justify md:mx-auto md:w-4/5 w-full ">
          <p>
            Invest - time, resources and energy at CareerConf.{" "}
            <span className="text-primary">But why?</span>
            <br />
            <br />
            CareerConf is one way solution to the uncertainty, dilemmas, and
            ignorance in choosing career paths. Our core mission is to
            illuminate the lesser-known avenues available to students, unveiling
            refreshing paths they might not have considered. Embodying novelty
            and passion, CareerConf is a platform that invites{" "}
            <span className="text-primary">collaboration</span> to cherish the
            notion.
          </p>
          <div className="buttons grid grid-cols-2 md:gap-12 gap-8">
            <button className="bg-white font-secondary  hover:bg-primary text-black py-2 md:px-6 px-2 rounded-lg ">
              Sponsor Us
            </button>
            <button className="bg-white font-secondary  hover:bg-primary text-black py-2 px-6 rounded-lg">
              Partner with Us
            </button>
          </div>
        </div>
        <div className="md:block hidden">
          <Image
            src="/About.png"
            alt="About"
            height={500}
            width={500}
            className="ml-16 object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};
export default Collaborate;
