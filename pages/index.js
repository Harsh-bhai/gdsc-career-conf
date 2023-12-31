import Faq from "@/components/faq";
import TitleDescription from "@/components/titleDescription";

export default function Home() {
  const data = [
    {
      title: "Sample Title",
      description:
        "This is a sample description. You can replace this with your own content.",
    },
  ];

  const faqData = [
    {
      question: "What is GDSC - BITD ?",
      answer:
        "Google Developer Student Clubs (GDSC) are university-based community groups powered by Google Developers for students interested in Technology. The aim is to help students bridge the gap between theory and practice. We are a group of students who are passionate about Technology. Our goal is to bring together students from various backgrounds who love learning and applying their skills to solve real-world problems.",
    },
    {
      question: "What is GDSC Career Conf ?",
      answer:
        "GDSC CareerConf, a dynamic one-day conference organized by Google Developers Student Clubs at BIT-D, is designed to expand students&rsquo; horizons within the tech industry. Our mission is to offer comprehensive insights into the diverse spectrum of career opportunities available in the ever-evolving world of technology. Through engaging talks, interactive workshops, and networking sessions, we aim to equip students with the knowledge, resources, and connections vital for navigating and thriving in various tech career paths. Join us as we delve into the vast and exciting landscape of tech careers, empowering the next generation of innovators and professionals",
    },
    {
      question: "Is there any fee for entry in GDSC - BITD ?",
      answer: "Yes",
    },
    // Add more FAQ items as needed
  ];

  return (
    <div className="text-white min-h-screen">
      <TitleDescription
        title={data[0].title}
        description={data[0].description}
      />
      
      <section id="faqs " className="my-10 flex flex-col justify-center space-y-6">
        <h1 className="font-secondary text-4xl text-center my-4">Common Queries</h1>
      {faqData.map((item, index) => (
        <Faq key={index} question={item.question} answer={item.answer} />
      ))}
      </section>

    </div>
  );
}
