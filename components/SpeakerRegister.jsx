import Link from "next/link";
import BgHeader from "./BgHeader";
import Image from "next/image";

const SpeakerRegister = () => {
  return (
    <div className="flex flex-col items-center md:bg-gradient-bottom mt-10 md:mt-40">

      <div className="grid  md:grid-cols-2 gap-12 items-center flex-col md:-mt-20 md:w-5/6">
        <section className="flex flex-col items-start text-base md:text-left text-center p-4 md:p-0 mx-auto">
        <div className="flex flex-col gap-12 text-base md:p-0 px-4 md:text-left text-center md:mx-auto w-full ">
          <h2 className="font-secondary md:text-[3.4vw] text-4xl md:p-0 px-8 self-start ">
            Register as a <span className="text-primary">Speaker</span>!
          </h2>
          <div className="flex flex-col">
          <p className="md:text-lg text-base md:leading-8 mt-5 md:text-left text-center">
            {`Ready to share your insights and inspire the next generation of developers? Join us as a speaker and be part of a day dedicated to career exploration. Register now!`}
          </p>
          <Link
            href={"https://forms.gle/Tc7iLKtAc3yMFiND8"}
            target="_blank"
            className="font-garalama text-center text-xl w-64 bg-primary pt-2 pl-3 pb-2 pr-3 text-black rounded-md justify-self-start self-center hover:text-white md:self-start duration-300 hover:scale-110 mt-8"
          >
            REGISTER SPEAKER
          </Link>
        </div>
        </div>
        </section>

        <div className="md:block hidden justify-self-center">
          <Image
            src={"/Speaker.png"}
            height={600}
            width={650}
            className="md:block hidden"
            alt="Speaker Register"
          />
        </div>
      </div>
    </div>
  );
};

export default SpeakerRegister;
