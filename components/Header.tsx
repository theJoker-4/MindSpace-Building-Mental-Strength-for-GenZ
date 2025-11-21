
import React from 'react';

const Logo = () => (
  <div className="flex items-center gap-3">
    <svg width="48" height="48" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Head / Mind Container - Cyan */}
      <circle cx="50" cy="50" r="45" fill="#22d3ee" />
      
      {/* Brain Left Hemisphere - Teal/Green */}
      <path d="M50 22C38 22 28 32 28 50C28 68 38 78 50 78V22Z" fill="#2dd4bf" />
      
      {/* Brain Right Hemisphere - Pink/Red */}
      <path d="M50 22C62 22 72 32 72 50C72 68 62 78 50 78V22Z" fill="#f43f5e" />
      
      {/* Cross Mark - Dark */}
      <path d="M40 40L60 60" stroke="#111827" strokeWidth="8" strokeLinecap="round" />
      <path d="M60 40L40 60" stroke="#111827" strokeWidth="8" strokeLinecap="round" />
    </svg>
    <span className="text-2xl font-bold text-white">MindSpace</span>
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
        </nav>
      </div>
    </header>
  );
};

export default Header;
