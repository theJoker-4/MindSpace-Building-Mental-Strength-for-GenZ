
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Hyperlinks from './components/Hyperlinks';
import Team from './components/Team';
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
    <div className="bg-black text-gray-300 antialiased overflow-x-hidden relative min-h-screen">
      {/* Background Image: Aesthetic Neural Network / Digital Mind */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.15
        }}
      />
      
      <CursorGlow position={cursorPos} />
      <div className="relative z-10">
        <Header />
        <main className="container mx-auto px-4 md:px-8">
          <Hero />
          <Hyperlinks />
          <Team />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
