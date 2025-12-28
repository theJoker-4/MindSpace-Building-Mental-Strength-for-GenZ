
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-gray-800/50 py-8 mt-16">
      <div className="container mx-auto px-4 md:px-8 text-center text-sm text-gray-500">
        <p className="mb-2">
          A project dedicated to{' '}
          <a
            href="https://sdgs.un.org/goals/goal3"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-gray-400 hover:text-cyan-400 transition-colors"
          >
            UN Sustainable Development Goal 3
          </a>.
        </p>
        <p className="mb-4">
          Take control of your digital life. Your well-being is worth it.
        </p>
        <p>&copy; 2025 MindSpace. All Rights Reserved. Empowering the next generation's mental wellness.</p>
      </div>
    </footer>
  );
};

export default Footer;
