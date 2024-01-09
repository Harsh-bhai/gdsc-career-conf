import Link from "next/link";
import BgHeader from "./BgHeader";
import Image from "next/image";

const SpeakerRegister = () => {
  return (
    <div className="flex flex-col items-center">
      <BgHeader bgHeader={"SPEAKER"} header={"BE A SPEAKER"} />

      <div className="grid md:grid-cols-2 gap-12 items-center flex-col md:-mt-20 md:w-5/6">
        <section className="flex flex-col items-start text-lg md:text-left text-center p-4 md:p-0 mx-auto">
          <div className="mb-8 text-lg flex flex-col gap-4">
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
            <Link
              href={"https://forms.gle/Tc7iLKtAc3yMFiND8"}
              target="_blank"
              className="inline-flex text-black font-secondary bg-white border-0 py-2 px-6 focus:outline-none hover:bg-primary rounded text-lg"
            >
              Register Speaker
            </Link>
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
