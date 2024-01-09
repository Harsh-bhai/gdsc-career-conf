import Link from "next/link";
import BgHeader from "./BgHeader";
import Image from "next/image";
const Collaborate = () => {
  return (
    <section className="flex flex-col items-center">
      <BgHeader header={"WHY COLLABORATE?"} bgHeader={"PARTNER"} />
      <div className="grid md:grid-cols-2 grid-cols-1 gap-12 items-center md:-mt-20 md:w-5/6">
        <div className="flex flex-col gap-12 text-base md:p-0 px-4 md:text-left text-center md:mx-auto w-full ">
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
            <Link
              href={
                "https://drive.google.com/file/d/1CZMrp4d9Q4DX2wBCWQhr4UUyKeOQNMvH/view?usp=sharing"
              }
              target="_blank"
              className="bg-white flex items-center font-secondary justify-center hover:bg-primary text-black py-2 md:px-6 px-2 rounded-lg "
            >
              Sponsor Us
            </Link>
            <Link
              href={
                "https://drive.google.com/file/d/1gtBK18q7Z3ylgh9wy7R6gcHhKLZDCFHA/view?usp=sharing"
              }
              target="_blank"
              className="bg-white flex items-center font-secondary justify-center hover:bg-primary text-black py-2 px-6 rounded-lg"
            >
              Partner with Us
            </Link>
          </div>
        </div>
        <div className="md:block hidden justify-self-center">
          <Image
            src="/About.png"
            alt="About"
            height={500}
            width={500}
            className="object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};
export default Collaborate;
