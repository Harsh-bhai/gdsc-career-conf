// components/FAQItem.js
import { useState } from 'react';

const Faq = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="m-4 md:mx-80">
      <div
        className="cursor-pointer  border-y-2 border-red-500 p-4 rounded-md"
        onClick={toggleAccordion}
      >
        <h3 className="text-lg font-semibold">{question}</h3>
      </div>
      {isOpen && (
        <div className="mt-2 p-4 bg-black rounded-md shadow-md">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default Faq;
