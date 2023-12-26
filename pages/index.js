import Team from "@/components/team";
import About from "@/components/about";
import PreviousEvents from "@/components/previousEvents";
import Speakers from "@/components/speakers";
import Contact from "@/components/contact";
import Careerconf from "@/components/careerconf";
import Faq from "@/components/faq";
import { BsInstagram } from 'react-icons/bs';
import { SiDiscord } from 'react-icons/si';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";


export default function Home() {

  const faqData = [
    {
      question: 'What is GDSC - BITD ?',
      answer: 'Google Developer Student Clubs (GDSC) are university-based community groups powered by Google Developers for students interested in Technology. The aim is to help students bridge the gap between theory and practice. We are a group of students who are passionate about Technology. Our goal is to bring together students from various backgrounds who love learning and applying their skills to solve real-world problems.',
    },
    {
      question: 'What is GDSC Career Conf ?',
      answer: 'GDSC CareerConf, a dynamic one-day conference organized by Google Developers Student Clubs at BIT-D, is designed to expand students&rsquo; horizons within the tech industry. Our mission is to offer comprehensive insights into the diverse spectrum of career opportunities available in the ever-evolving world of technology. Through engaging talks, interactive workshops, and networking sessions, we aim to equip students with the knowledge, resources, and connections vital for navigating and thriving in various tech career paths. Join us as we delve into the vast and exciting landscape of tech careers, empowering the next generation of innovators and professionals',
    },
    {
      question: 'Is there any fee for entry in GDSC - BITD ?',
      answer: 'Yes',
    },
    // Add more FAQ items as needed
  ];

  return (
    <div className="space-y-28">
      <div className="flex my-10 md:my-0 flex-col justify-center items-stretch">
        <div className=" flex flex-col md:flex-row space-x-5 justify-center items-center space-y-10 md:p-20 p-4 ">
          <div className="  flex flex-col space-y-6 justify-center md:text-start text-center md:items-left md:w-1/2">
            <p className="md:text-4xl text-2xl font-semibold">
              Empowering Innovators, Shaping Tomorrow:{" "}
            </p>
            <p className="md:text-4xl text-2xl font-semibold">
              Join GDSC BITD&rsquo;s Quest!{" "}
            </p>
            <p className=" text-gray-500 text-base ">
              Unleashing Potential, Driving Innovation in Technology &
              Development
            </p>
          </div>
          <div className="  flex flex-col justify-center items-start md:items-center md:w-1/2">
            <div className="flex ">
              <img src="Rectangle 196.png" className="h-28 md:h-36" alt="" />
                <img src="Rectangle 200.png" className="h-28 md:h-36" alt="" />
            </div>
            <div className="flex ">
              <img src="Group 2188.png" className="h-24 md:h-28" alt="" />
                <img src="Rectangle 202.png" className="h-24 md:h-28" alt="" />
            </div>
            <div className="flex ">
              <img src="Ellipse 84.png" className="h-28 md:h-36" alt="" />
                <img src="Group 2189.png" className="h-28 md:h-36" alt="" />
                <img src="Group 2190.png" className="h-28 md:h-36" alt="" />
            </div>
          </div>
        </div>
        <button class="flex mx-auto md:-mt-10 mt-8 text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 hover:scale-110 transition-transform rounded-full text-lg">
          Get Tickets
        </button>
      </div>

      <section id="About">
        
        <About />
      </section>

      <section id="careerconf" >
        
        <Careerconf />
      </section>
      <section id="PreviousEvents" >
        
        <h1 className="ml-10 sm:w-2/5 text-gray-900 font-medium title-font text-4xl md:text-5xl m-4 mb-2 sm:mb-0">
        Reflecting Brilliance
        </h1>
        <p className="ml-10 md:text-base text-sm text-center my-8">GDSC BITD&rsquo;s Unforgettable Past Events</p>
        <PreviousEvents />
      </section>
      <section id="team">
        
        <h1 className="ml-10 sm:w-2/5 text-gray-900 font-medium title-font text-4xl md:text-5xl m-4 mb-2 sm:mb-0">
          Meet Our Team
        </h1>
        <Team />
      </section>
      <section id="extras">
        
      <div className="container mx-auto mt-8 p-10">
      <h1 className="text-5xl font-semibold mb-8">Frequently Asked Questions</h1>
      {faqData.map((faq, index) => (
        <Faq key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
      </section>
      <section id="contact">
        
        <div className=" flex flex-col md:flex-row rounded-lg justify-center items-center border-black border-2 p-10 md:p-20 m-4 md:m-16">
          <div className="md:w-1/2 flex flex-col space-y-4">
            <p className="text-3xl font-semibold">Stay tuned for the most recent updates and exciting news from <span className="text-green-500">#</span><span className="text-blue-500">GDSC</span><span className="text-red-500">BITD</span> <span className="text-yellow-500">2023!</span></p>
            <p>Let&rsquo;s connect to ensure we&rsquo;re updated via notifications. Keep an eye out for announcements by joining us and stay informed with GDSC BITD!</p>
          </div>
          <div className="md:w-1/2 my-8 md:my-0 flex  justify-center space-x-20">
            <div className="flex flex-col space-y-10">
            <FaTwitter className="text-3xl"/>
            <BsInstagram className="text-3xl"/>
            </div>
            <div className="flex flex-col space-y-10">
            <FaLinkedinIn className="text-3xl"/>
            <FaYoutube className="text-3xl"/>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
