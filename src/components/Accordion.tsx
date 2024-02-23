import React, { useState } from "react";

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-y border-gray-300 rounded-lg">
      <div
        className="flex justify-between items-center py-4 cursor-pointer transition-colors duration-300 ease-in-out bg-gray-100 hover:bg-gray-200"
        onClick={toggleAccordion}
      >
        <div className="font-semibold">{title}</div>
        <div className="flex items-center">
          <svg
            className={`w-5 h-5 transition-transform ${
              isOpen ? "transform rotate-180" : ""
            }`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </div>
      {isOpen && (
        <div
          className="p-4 border-t border-gray-300 max-h-0 overflow-hidden transition-all duration-300"
          style={{ maxHeight: "100vh" }}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default Accordion;
