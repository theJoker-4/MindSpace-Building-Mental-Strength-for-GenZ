import React, { useState } from 'react';
import Section from './Section';
import { FAQS } from '../constants';
import type { FAQItem as FAQItemType } from '../types';

const FAQItem: React.FC<{ item: FAQItemType }> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-800">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left py-6"
      >
        <span className="text-lg font-medium text-white">{item.question}</span>
        <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-red-500">
            <path d="M12 4V20M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </button>
      <div
        className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
          <p className="pb-6 text-gray-400">{item.answer}</p>
        </div>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  return (
    <Section id="faq">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
        Frequently Asked Questions
      </h2>
      <div className="max-w-3xl mx-auto">
        {FAQS.map((faq, index) => (
          <FAQItem key={index} item={faq} />
        ))}
      </div>
    </Section>
  );
};

export default FAQ;