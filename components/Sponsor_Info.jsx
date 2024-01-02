import ArrowList_TD from "./sec3_arrow_comp";
const Sponsor_Info = () => {
  return (
    <section className="flex flex-col items-center">
      <div className="w-screen h-auto relative">
        <div className="text-[19.5vw] font-garalama text-black text-center z-0 heading-outline">
          SPONSOR
        </div>
        <div className="absolute font-garalama translate-y-4 text-2xl -translate-x-10 md:translate-y-0 md:-translate-x-40 md:text-7xl z-10 bg-center">
          Why Sponsor Us ?
        </div>
      </div>
      <div className="flex lg:flex-row relative w-screen gap-10 items-center  justify-center  flex-col ">
        <div className="lg:w-[40%] w-[90%] text-justify ml-5 mr-5">
        Elevate your brand by sponsoring GDSC CareerConf – a pivotal one-day event by Google Developers Student Clubs, BIT-D, propelling students into diverse tech careers.<br/><br/>
        Enjoy perks like promotional opportunities, targeted advertising, and a lasting bond with our community as a token of appreciation. Your support fuels our growth and expands our reach! 🌟💼
        </div>
        <div className="lg:w-[40%] w-[90%]">
          <div className="flex flex-col gap-10">
            <ArrowList_TD
              tittle={"Brand Visibility"}
              des={"Communicate your brand motto to enthusiastic developers"}
            ></ArrowList_TD>
            <ArrowList_TD
              tittle={"Community Engagement & Networking Opportunities"}
              des={"Access to a network of young tech enthusiasts"}
            ></ArrowList_TD>
            <ArrowList_TD
              tittle={"Social Impact"}
              des={
                "Our aim with GDSC CareerConf is to bring a change in the lives of our community members - join hands with us to foster change."
              }
            ></ArrowList_TD>
          </div>
        </div>
      </div>
      <button className="font-garalama w-64  bg-primary p-2 text-black rounded-sm mt-10 items-center">
        SPONSOR US
      </button>
    </section>
  );
};
export default Sponsor_Info;
