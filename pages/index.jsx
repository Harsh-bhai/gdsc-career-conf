import FaqContainer from "@/components/FaqContainer";
import Hero from "@/components/Hero";
import Collaborate from "@/components/Collaborate";
import About from "@/components/About";
import SpeakerRegister from "@/components/SpeakerRegister";
import AboutInfo from "@/components/AboutInfo";

export default function Home() {
  return (
    <div className="text-white relative overflow-hidden">
      <section id="careerconf">
        <Hero />
      </section>
      <main className="relative">
        <section id="about">
          <About />
        </section>
        <section id="sponsor">
          <Collaborate />
        </section>
        <section id="speaker">
          <SpeakerRegister />
        </section>
        <section id="faq">
          <FaqContainer />
        </section>
      </main>
    </div>
  );
}
