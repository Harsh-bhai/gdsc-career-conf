import React from "react";
import TitleDescription from "./titleDescription";
import BgHeader from "./BgHeader";
import Image from "next/image";

const SpeakerRegister = () => {
  return (
    <div className="">
      <BgHeader bgHeader={"SPEAKER"} header={"BE A SPEAKER"} />

      <div className="grid md:grid-cols-2 gap-4 items-center flex-col md:-mt-20 md:ml-28">
        <section className="flex flex-col items-start text-lg text-justify text-center p-8 md:p-0 mx-auto md:w-4/5">
          <div className="mb-8 text-lg flex flex-col gap-4 text-justify ">
            <p>
              Do you have something to{" "}
              <span className="text-primary">share</span> with the world?
            </p>

            <p>
              This could be your chance! <br /> We are seeking speakers from
              diverse domains such as UI/UX, System Design, Product Management,
              Developer Relations, Machine Learning, and more. Our vision is
              simple:{" "}
              <span className="text-primary">learn, grow, and give back</span>.
              If you resonate with these principles, join us at CareerConf.
            </p>
          </div>
          <div className="flex md:justify-start w-full justify-center">
            <button className="inline-flex text-black font-secondary bg-white border-0 py-2 px-6 focus:outline-none hover:bg-primary rounded text-lg">
              Register Speaker
            </button>
          </div>
        </section>

        <Image
          src={"/Speaker.png"}
          height={600}
          width={650}
          className="ml-8 md:block hidden"
          alt="Speaker Register"
        />
      </div>
    </div>
  );
};

export default SpeakerRegister;
