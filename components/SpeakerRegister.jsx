import React from "react";
import TitleDescription from "./titleDescription";
import BgHeader from "./BgHeader";
import Image from "next/image";

const SpeakerRegister = () => {
  return (
    <div className="w-screen ">
      <BgHeader bgHeader={"SPEAKER"} header={"BE A SPEAKER"} />
      <div className="grid md:grid-cols-2 gap-20 items-center md:-mt-20">
        <section className="body-font">
          <div className="container mx-auto flex px-5 md:-my-10 items-end justify-center flex-col">
            <div className="text-center lg:w-4/5 w-full">
              <h1 className=" font-secondary md:text-4xl text-3xl mb-4 font-medium "></h1>
              <div className="mb-8 text-lg leading-relaxed flex flex-col gap-4 text-justify ">
                <p>
                  Do you have something to{" "}
                  <span className="text-primary">share</span> with the world?
                </p>

                <p>
                  This could be your chance! <br /> We are seeking speakers from
                  diverse domains such as UI/UX, System Design, Product
                  Management, Developer Relations, Machine Learning, and more.
                  Our vision is simple:{" "}
                  <span className="text-primary">
                    learn, grow, and give back
                  </span>
                  . If you resonate with these principles, join us at
                  CareerConf.
                </p>
              </div>
              <div className="flex md:justify-start justify-center mt-12">
                <button className="inline-flex text-black font-secondary bg-white border-0 py-2 px-6 focus:outline-none hover:bg-primary rounded text-lg">
                  Register Speaker
                </button>
              </div>
            </div>
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
