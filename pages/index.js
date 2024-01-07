"use client";

import FaqContainer from "@/components/FaqContainer";
import Hero from "@/components/Hero";
import Collaborate from "@/components/Collaborate";
import About from "@/components/About";
import SpeakerRegister from "@/components/SpeakerRegister";

export default function Home() {
  return (
    <div className="text-white min-h-screen overflow-x-hidden">
      <section className="my-16 md:my-4" id="hero">
        <Hero />
      </section>
      <section className="my-16 md:my-4" id="careerconf">
        <About />
      </section>
      <section className="my-16 md:my-4" id="sponsor">
        <Collaborate />
      </section>
      <section className="my-16 md:my-4" id="speaker">
        <SpeakerRegister />
      </section>
      <section className="my-16 md:my-4" id="about">
        <FaqContainer />
      </section>
    </div>
  );
}
