import FaqContainer from "@/components/FaqContainer";
import Hero from "@/components/Hero";
import Collaborate from "@/components/Collaborate";
import About from "@/components/About";
import SpeakerRegister from "@/components/SpeakerRegister";
import AboutInfo from "@/components/AboutInfo";

export default function Home() {
  return (
    <div className="text-white relative overflow-hidden">
      <Hero />
      <main className="relative">
        <About />
        <Collaborate />
        <SpeakerRegister />
        <FaqContainer />
      </main>
    </div>
  );
}