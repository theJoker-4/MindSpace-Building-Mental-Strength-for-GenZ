
import React, { useState, useEffect } from 'react';

const Logo = () => (
  <div className="flex items-center gap-3">
    <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/argssvg">
      <circle cx="50" cy="50" r="45" fill="#22d3ee" />
      <path d="M50 22C38 22 28 32 28 50C28 68 38 78 50 78V22Z" fill="#2dd4bf" />
      <path d="M50 22C62 22 72 32 72 50C72 68 62 78 50 78V22Z" fill="#f43f5e" />
      <path d="M40 40L60 60" stroke="#111827" strokeWidth="8" strokeLinecap="round" />
      <path d="M60 40L40 60" stroke="#111827" strokeWidth="8" strokeLinecap="round" />
    </svg>
    <span className="text-xl md:text-2xl font-bold text-white tracking-tighter">MindSpace</span>
  </div>
);

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Initialize Chatbase integration safely
    const initChatbase = () => {
      const win = window as any;
      if (!win.chatbase || win.chatbase("getState") !== "initialized") {
        win.chatbase = (...args: any[]) => {
          if (!win.chatbase.q) {
            win.chatbase.q = [];
          }
          win.chatbase.q.push(args);
        };
        win.chatbase = new Proxy(win.chatbase, {
          get(target, prop) {
            if (prop === "q") {
              return target.q;
            }
            return (...args: any[]) => target(prop, ...args);
          }
        });
      }

      const onLoad = () => {
        if (document.getElementById("cGE9KK4wK95XqHaYI3HnH")) return;
        const script = document.createElement("script");
        script.src = "https://www.chatbase.co/embed.min.js";
        script.id = "cGE9KK4wK95XqHaYI3HnH";
        script.setAttribute("domain", "www.chatbase.co");
        document.body.appendChild(script);
      };

      if (document.readyState === "complete") {
        onLoad();
      } else {
        window.addEventListener("load", onLoad);
      }
    };

    initChatbase();
  }, []);

  const navLinks = [
    { name: 'Resources', href: '#resources' },
    { name: 'Team', href: '#team' },
  ];

  return (
    <header className="sticky top-0 z-50 py-4 backdrop-blur-md bg-black/60 border-b border-gray-800/40">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
        <Logo />
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-semibold">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {isMenuOpen && (
        <nav className="md:hidden bg-gray-900/95 border-b border-gray-800 p-6 absolute w-full animate-in slide-in-from-top duration-300">
          <div className="flex flex-col space-y-4 text-center font-medium">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-300 hover:text-cyan-400 py-2"
              >
                {link.name}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
