
import React from 'react';
import Section from './Section';
import { TESTIMONIALS } from '../constants';
import type { Testimonial } from '../types';

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
  <div className="p-10 bg-gray-900/40 border border-gray-800 rounded-3xl backdrop-blur-sm relative group hover:border-red-500 transition-colors duration-500">
    <div className="absolute top-6 left-6 text-6xl text-red-500/20 font-serif leading-none pointer-events-none transition-transform group-hover:-translate-y-2">“</div>
    <p className="text-gray-300 italic mb-8 relative z-10 text-lg leading-relaxed">
      {testimonial.quote}
    </p>
    <div className="flex items-center gap-4 border-t border-gray-800 pt-6">
      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-red-500 flex items-center justify-center text-white font-bold text-xl">
        {testimonial.author.charAt(0)}
      </div>
      <div>
        <p className="font-bold text-white">{testimonial.author}</p>
        <p className="text-sm text-red-500 font-medium">{testimonial.role}</p>
      </div>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  return (
    <Section id="testimonials">
      <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-20 tracking-tight">
        Voices of <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-cyan-400">Resilience</span>
      </h2>
      <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
        {TESTIMONIALS.map((testimonial) => (
          <TestimonialCard key={testimonial.author} testimonial={testimonial} />
        ))}
      </div>
    </Section>
  );
};

export default Testimonials;
