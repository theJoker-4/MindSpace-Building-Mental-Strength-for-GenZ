
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-gray-800/50 py-8 mt-16">
      <div className="container mx-auto px-4 md:px-8 text-center text-sm text-gray-500">
        <div className="mb-4">
          <p>Aligned with <span className="font-bold text-gray-400">UN Sustainable Development Goal 3:</span> Good Health & Well-being.</p>
        </div>
        <p>&copy; {new Date().getFullYear()} MindSpace. All Rights Reserved. Empowering the next generation's mental wellness.</p>
      </div>
    </footer>
  );
};

export default Footer;
