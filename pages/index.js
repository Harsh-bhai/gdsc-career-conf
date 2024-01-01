import FaqContainer from "@/components/FaqContainer";
import Hero from "@/components/Hero";
import TitleDescription from "@/components/titleDescription";
import Sponsor_Info from "@/components/Sponsor_Info";
import About from "@/components/About";
import SpeakerRegister from "@/components/SpeakerRegister";

export default function Home() {

  return (
    <div className="text-white min-h-screen">
      <section className="my-16 md:my-4" id ="/"><Hero /></section>
      <section className="my-16 md:my-4" id ="careerconf"><About /></section>
      <section className="my-16 md:my-4" id ="sponsor"><Sponsor_Info /></section>
      <section className="my-16 md:my-4" id="speaker"><SpeakerRegister/></section>
      <section className="my-16 md:my-4" id="about"><FaqContainer /></section>
    </div>
  );
}
