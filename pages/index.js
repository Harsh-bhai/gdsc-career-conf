import FaqContainer from "@/components/FaqContainer";
import Hero from "@/components/Hero";
import TitleDescription from "@/components/titleDescription";
import Sponsor_Info from "@/components/Sponsor_Info";
import About from "@/components/About";
import SpeakerRegister from "@/components/SpeakerRegister";

export default function Home() {

  return (
    <div className="text-white min-h-screen">
      <section id ="/"><Hero /></section>
      <section id ="careerconf"><About /></section>
      <section id ="sponsor"><Sponsor_Info /></section>
      <section id="speaker"><SpeakerRegister/></section>
      <section id="about"><FaqContainer /></section>
    </div>
  );
}
