
import React from 'react';

const Logo = () => (
  <div className="flex items-center gap-2">
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-cyan-400">
      <path d="M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2ZM8.5 16.5L7 15L9.5 12.5L7.5 10.5L9 9L11.5 11.5L14 9L15.5 10.5L13 13L15.5 15.5L14 17L11.5 14.5L8.5 16.5Z" fill="currentColor"/>
      <path d="M7.5 12H4.5C4.5 8.686 7.186 6 10.5 6V9C8.567 9 7.5 10.567 7.5 12Z" fill="url(#paint0_linear_101_2)" />
      <path d="M16.5 12H19.5C19.5 15.314 16.814 18 13.5 18V15C15.433 15 16.5 13.433 16.5 12Z" fill="url(#paint1_linear_101_2)" />
      <defs>
        <linearGradient id="paint0_linear_101_2" x1="4.5" y1="9" x2="10.5" y2="9" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ef4444"/>
          <stop offset="1" stopColor="#dc2626"/>
        </linearGradient>
        <linearGradient id="paint1_linear_101_2" x1="13.5" y1="15" x2="19.5" y2="15" gradientUnits="userSpaceOnUse">
          <stop stopColor="#06b6d4"/>
          <stop offset="1" stopColor="#22d3ee"/>
        </linearGradient>
      </defs>
    </svg>
    <span className="text-xl font-bold text-white">MindSpace</span>
  </div>
);

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 py-4 backdrop-blur-lg bg-gray-900/50 border-b border-gray-800/50">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
        <Logo />
        <nav className="hidden md:flex space-x-6 text-sm font-medium">
          <a href="#resources" className="hover:text-cyan-400 transition-colors">Resources</a>
          <a href="#team" className="hover:text-cyan-400 transition-colors">Team</a>
          {/* FIX: Add navigation links for Testimonials and FAQ sections. */}
          <a href="#testimonials" className="hover:text-cyan-400 transition-colors">Testimonials</a>
          <a href="#faq" className="hover:text-cyan-400 transition-colors">FAQ</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
