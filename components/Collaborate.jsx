import Link from "next/link";
import BgHeader from "./BgHeader";
const Collaborate = () => {
  const sponsorUs = [
    {
      title: "Brand visibility",
      description: "Communicate your brand motto to enthusiastic developers",
    },
    {
      title: "Community Engagement & Networking Opportunities:",
      description: "Access to a network of young tech enthusiasts.",
    },
    {
      title: "Social Impact",
      description:
        "Our aim with GDSC CareerConf is to bring a change in the lives of our community members - join hands with us to foster change.",
    },
  ];

  return (
    <section className="flex flex-col items-center md:mt-40">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-12 items-center md:-mt-20 md:w-5/6">
        <div className="flex flex-col gap-12 text-base md:p-0 px-4 md:text-left text-center md:mx-auto w-full ">
          <h2 className="font-secondary md:text-[3.4vw] text-4xl md:p-0 px-8 self-start ">
            Want to be a <span className="text-primary">Sponsor</span>?
          </h2>
          <div className="flex flex-col">
          <p className="md:text-lg text-base md:leading-8 mt-5 md:text-left text-center">
            {`CareerConf is one way solution to the uncertainty, dilemmas, and ignorance in choosing career paths. Our core mission is to illuminate the lesser-known avenues available to students, unveiling refreshing paths they might not have considered. Embodying novelty and passion, CareerConf is a platform that invites collaboration to cherish the notion.`}
          </p>
          <Link
            href={
              "https://drive.google.com/file/d/1CZMrp4d9Q4DX2wBCWQhr4UUyKeOQNMvH/view?usp=sharing"
            }
            target="_blank"
            className="font-garalama text-center text-xl w-64 bg-primary pt-2 pl-3 pb-2 pr-3 text-black rounded-md justify-self-start self-center hover:text-white md:self-start duration-300 hover:scale-110 mt-8"
          >
            SPONSOR US
          </Link>
        </div>
          {/* <div className="buttons flex justify-center  md:grid md:grid-cols-2 md:gap-12 gap-8">
            <Link
              href={
                "https://drive.google.com/file/d/1CZMrp4d9Q4DX2wBCWQhr4UUyKeOQNMvH/view?usp=sharing"
              }
              target="_blank"
              className="font-garalama text-center text-xl w-64 bg-primary pt-2 pl-3 pb-2 pr-3 text-black rounded-md justify-self-start self-center md:self-start duration-300 hover:scale-110 mt-8 hover:text-white"
            >
              Sponsor Us
            </Link>
          </div> */}
        </div>
        <div className="flex justify-center text-base md:p-0 px-4 md:text-left text-center md:mx-auto w-full ">
          <div className="w-1/2 md:ml-20 ">
            <img src="group 26.png" className="md:h-[30rem] h-[33rem]  object-cover    " alt="" />
          </div>
          <div className="space-y-[5.4rem]  md:-mr-0">
            {sponsorUs.map(({ title, description }) => {
              return (
                <div key={title} className="flex flex-col ml-10 ">
                  <span className="text-primary py-2 text-start">{title}</span>
                  <span className=" py-2 text-start">{description}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Collaborate;
