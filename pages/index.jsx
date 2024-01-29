import FaqContainer from "@/components/FaqContainer";
import Hero from "@/components/Hero";
import Collaborate from "@/components/Collaborate";
import About from "@/components/About";
// import SpeakerRegister from "@/components/SpeakerRegister";
import Sponsors from "@/components/Sponsors";
import Speakers from "@/components/Speakers";



export default function Home() {
  return (
    <div className="text-white relative overflow-hidden">
      <Hero />
      <main className="relative">
        <About />
        <Collaborate />
        <Speakers/>
        <Sponsors />
        {/* <SpeakerRegister /> */}
        <FaqContainer />
      </main>
    </div>
  );
}
