import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Hyperlinks from './components/Hyperlinks';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import SDG from './components/SDG';
import Footer from './components/Footer';
import CursorGlow from './components/CursorGlow';

const App: React.FC = () => {
  const [cursorPos, setCursorPos] = useState({ x: -200, y: -200 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="bg-black text-gray-300 antialiased overflow-x-hidden">
      <CursorGlow position={cursorPos} />
      <div className="relative z-10">
        <Header />
        <main className="container mx-auto px-4 md:px-8">
          <Hero />
          <Hyperlinks />
          <Team />
          <Testimonials />
          <FAQ />
          <SDG />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;