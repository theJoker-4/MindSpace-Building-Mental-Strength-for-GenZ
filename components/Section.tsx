import React, { ReactNode } from 'react';
import { useFadeInOnScroll } from '../hooks/useFadeInOnScroll';

interface SectionProps {
  children: ReactNode;
  className?: string;
  // FIX: Add id prop to allow sections to have an ID for anchor links.
  id?: string;
}

const Section: React.FC<SectionProps> = ({ children, className = '', id }) => {
  const ref = useFadeInOnScroll<HTMLDivElement>();

  return (
    <section ref={ref} id={id} className={`fade-up py-16 md:py-24 ${className}`}>
      {children}
    </section>
  );
};

export default Section;
