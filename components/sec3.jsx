import ArrowList_TD from "./sec3_arrow_comp";
const style = {
    "sponsor":{
        "-webkit-text-stroke-width": "1px",
        "-webkit-text-stroke-color": "#EC003380"
    },
    "center":{
        "top":"50%",
        "left":"40%",
        "margin" : "-30px 0 0 -50px"
    }
} 
const Section_three = ()=>{
    return(
        <section className="flex flex-col items-center" >
            <div className="w-screen h-auto relative">
                <div className="text-[19.5vw] font-garalama text-black text-center z-0" style={style.sponsor}>SPONSOR</div>
                <div className="absolute font-garalama text-4xl z-10" style={style.center}>Want to be a sponser ?</div>
            </div>
            <div className="flex lg:flex-row relative w-screen gap-10 items-center  justify-center  flex-col ">
                <div className="lg:w-[40%] w-[90%] text-justify ml-5 mr-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type </div>
                <div className="lg:w-[40%] w-[90%]">
                    <div className="flex flex-col gap-10">
                        <ArrowList_TD tittle={"Brand Visibility"} des={"Communicate your brand motto to enthusiastic developers"}></ArrowList_TD>
                        <ArrowList_TD tittle={"Community Engagement & Networking Opportunities"} des={"Access to a network of young tech enthusiasts"}></ArrowList_TD>
                        <ArrowList_TD tittle={"Social Impact"} des={"Our aim with GDSC CareerConf is to bring a change in the lives of our community members - join hands with us to foster change."}></ArrowList_TD>
                        
                    </div>
                </div>
            </div>
            <button className="font-garalama w-64  bg-primary pt-2 pl-2 pb-2 pr-2 text-black rounded-sm mt-10 items-center">SPONSOR US</button>
        </section>
    );
}
export default Section_three;