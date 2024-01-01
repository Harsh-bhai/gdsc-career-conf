import FaqContainer from "@/components/FaqContainer";
import Hero from "@/components/Hero";
import TitleDescription from "@/components/titleDescription";
import Sponsor_Info from "@/components/Sponsor_Info";
import About from "@/components/About";
import SpeakerRegister from "@/components/SpeakerRegister";

export default function Home() {
  const infoContainer = [
    {
      title: "Sample Title",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi sunt sequi hic velit sint beatae odit quas eligendi, molestias, similique, veniam ipsa eum. Laborum magni molestiae cumque sunt quia dignissimos. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia rerum, possimus quas vel odit quae voluptatem cumque tempora illum? Atque!",
      buttonLabel: "Register",
    },
  ];

  return (
    <div className="text-white min-h-screen">
      <Hero />
      <About />
      <Sponsor_Info />
      <SpeakerRegister/>
      {/* <TitleDescription
        title={infoContainer[0].title}
        description={infoContainer[0].description}
        buttonLabel={infoContainer[0].buttonLabel}
      /> */}

      <FaqContainer />
    </div>
  );
}
