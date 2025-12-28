
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-gray-800/50 py-12 md:py-16 bg-black">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-3 mb-2">
            <svg width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="45" fill="#22d3ee" />
              <path d="M50 22C38 22 28 32 28 50C28 68 38 78 50 78V22Z" fill="#2dd4bf" />
              <path d="M50 22C62 22 72 32 72 50C72 68 62 78 50 78V22Z" fill="#f43f5e" />
            </svg>
            <span className="text-2xl font-bold text-white tracking-tighter">MindSpace</span>
          </div>
          
          <div className="space-y-3 max-w-3xl mx-auto">
            <p className="text-cyan-400 font-semibold text-lg">
              A project dedicated to SDG 3: Good Health and Well-Being.
            </p>
            <p className="text-gray-300 text-lg md:text-xl font-light italic">
              Take control of your digital life. Your well-being is worth it.
            </p>
            <div className="pt-4 border-t border-gray-800/50">
              <p className="text-sm text-gray-500 leading-relaxed">
                © 2025 MindSpace. All Rights Reserved. Empowering the next generation's mental wellness.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
