
import React from 'react';
import Section from './Section';
import AnimatedText from './AnimatedText';

const Hero: React.FC = () => {
  return (
    <Section className="text-center min-h-[70vh] flex flex-col justify-center items-center">
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-4">
        Building Mental Strength for <br/> <AnimatedText>Generation Z</AnimatedText>
      </h1>
      <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-400 mb-8">
        Welcome to <span className="font-bold text-white">MindSpace</span>. We provide modern, accessible resources to help you navigate life's challenges, fostering resilience and well-being in the digital age.
      </p>
    </Section>
  );
};

export default Hero;
