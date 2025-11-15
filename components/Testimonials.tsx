import React from 'react';
import Section from './Section';
import { TESTIMONIALS } from '../constants';
import type { Testimonial } from '../types';

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
  <div className="p-8 bg-gray-900/50 border border-gray-800 rounded-lg">
    <p className="text-gray-300 italic mb-6">"{testimonial.quote}"</p>
    <div className="text-right">
      <p className="font-bold text-white">{testimonial.author}</p>
      <p className="text-sm text-red-500">{testimonial.role}</p>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  return (
    <Section id="testimonials">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
        What Our Community Says
      </h2>
      <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {TESTIMONIALS.map((testimonial) => (
          <TestimonialCard key={testimonial.author} testimonial={testimonial} />
        ))}
      </div>
    </Section>
  );
};

export default Testimonials;