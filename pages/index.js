import FaqContainer from "@/components/FaqContainer";
import Hero from "@/components/Hero";
import Faq from "@/components/faq";
import TitleDescription from "@/components/titleDescription";

export default function Home() {
  const infoContainer = [
    {
      title: "Sample Title",
      description:
        "      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi sunt sequi hic velit sint beatae odit quas eligendi, molestias, similique, veniam ipsa eum. Laborum magni molestiae cumque sunt quia dignissimos. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia rerum, possimus quas vel odit quae voluptatem cumque tempora illum? Atque!",
      buttonLabel: "Register",
    },
  ];

  return (
    <div className="text-white min-h-screen">
      <Hero />

      <TitleDescription
        title={infoContainer[0].title}
        description={infoContainer[0].description}
        buttonLabel={infoContainer[0].buttonLabel}
      />

      <FaqContainer />
    </div>
  );
}
