import Image from "next/image";
import Link from "next/link";

const SpeakerRegister = () => {
  return (
    <div
      id="speaker"
      className="flex justify-center relative items-center mt-20 md:mt-64 h-[60vh]"
    >
      <div className="md:grid grid-cols-2 gap-12 items-center flex flex-col md:-mt-20 md:w-5/6 z-20">
        <section className="flex flex-col items-start text-base md:text-left text-center p-4 md:p-0 mx-auto">
          <div className="flex flex-col gap-12 text-base md:p-0 md:text-left text-center md:mx-auto w-full ">
            <h2 className="font-secondary md:text-[3.4vw] text-4xl md:p-0 px-8 self-start ">
              Register as a <span className="text-primary">Speaker</span>!
            </h2>
            <div className="flex flex-col">
              <div className="md:text-lg flex flex-col gap-4 text-base md:leading-8 mt-5 md:text-left text-center">
                <p>{`Do you have something to share with the world?`} </p>
                <p>{`This could be your chance! We're seeking speakers from diverse domains such as UI/UX, System Design, Product Management, Developer Relations, Machine Learning, and more. Our vision is simple: learn, grow, and give back. If you resonate with these principles, join us at CareerConf.`}</p>
              </div>
              <Link
                href={"https://forms.gle/Tc7iLKtAc3yMFiND8"}
                target="_blank"
                className="font-secondary text-center text-lg w-64 bg-primary pt-2 pl-3 pb-2 pr-3 rounded-md justify-self-start self-center text-white md:self-start duration-300 hover:scale-110 mt-8"
              >
                REGISTER SPEAKER
              </Link>
            </div>
          </div>
        </section>
      </div>
      {/* bg-asset */}
      <Image
        src={"/bg-asset.svg"}
        height={700}
        width={500}
        alt=""
        className="absolute right-0 top-1/4 z-10"
      />
    </div>
  );
};

export default SpeakerRegister;
